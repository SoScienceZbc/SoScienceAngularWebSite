import { Injectable } from '@angular/core';
import { grpc } from "@improbable-eng/grpc-web";
import { GrpcDatabaseProject, GrpcDatabaseProjectClient } from "./generated/DataBaseProto/DatabaseProto_pb_service";
import { UserDbInfomation, ProjectUserInfomation, intger, D_Project, D_Projects, D_Documents } from "./generated/DataBaseProto/DatabaseProto_pb";
import { BehaviorSubject, Observable, of, Subject, zip } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { GrpcDataEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { GrpcWebClientBase } from 'grpc-web';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  userinfomation = {} as UserDbInfomation;
  project = {} as D_Projects;
  hostAddress = "http://40.87.150.18:27385";
  obsProjects: D_Project = new D_Project;
  signelProject$: BehaviorSubject<D_Project> = new BehaviorSubject<D_Project>(this.obsProjects);
  simpleProjectArray$?: BehaviorSubject<Array<D_Project.AsObject>> = new BehaviorSubject<Array<D_Project.AsObject>>(new Array<D_Project.AsObject>());

  projects: D_Projects = new D_Projects;
  behavProject$: BehaviorSubject<D_Projects> = new BehaviorSubject<D_Projects>(this.projects);

  constructor() {
    this.projects = new D_Projects();
  }


  /*-------------------Projects-------------------*/
  /**
   * Dont use this anymore
   * @param name name to use to find projects in databse
   * @returns a projectList for the specfide name.*/
  public GetProjects(name: string): Observable<D_Projects> {
    var userinfomation = new UserDbInfomation();
    userinfomation.setDbname(name);
    let subject = {} as Subject<D_Projects>;
    grpc.unary(GrpcDatabaseProject.GetProjects, {
      request: userinfomation,
      host: this.hostAddress,
      onEnd: res => {
        const { status, message } = res;
        if (status == grpc.Code.OK) {
          console.log("message is not null");
         // this.behavProject$.next((res.message?.toObject() as D_Projects));
        }
      }
    });
    return subject;
  }
/**
 * this call the grpc function the rigth way..
 * @param name The projects owner name
 */
  public GetProjectsTheRigthWay(name:string){

    // const grpcC = new GrpcDatabaseProjectClient(this.hostAddress);
    const userDbInfomation = new UserDbInfomation();
    userDbInfomation.setDbname(name);
    grpc.invoke(GrpcDatabaseProject.GetProjects,{
      request:userDbInfomation,
      host:this.hostAddress,
      onMessage:(Message:D_Projects) =>{
        this.behavProject$.next(Message);
        // console.log(Message);
        // console.log(Message.getDProjectList().findIndex(x => console.log(x.getName())));
      },onEnd:res =>{
        // console.log("It have endes")
      }
    })
  }

  public GetProjectsAsArray(name: string): Observable<D_Project.AsObject[]> {
    var userinfomation = new UserDbInfomation();
    userinfomation.setDbname(name);
    let arrayProjects = new Array<D_Project.AsObject>();
    let temp: D_Project.AsObject | any;
    grpc.unary(GrpcDatabaseProject.GetProjects, {
      request: userinfomation,
      host: this.hostAddress,
      onEnd: res => {
        const { status, message } = res;
        for (let I = 0; I < (res.message?.toObject() as D_Projects.AsObject).dProjectList.length; I++) {
          temp = (res.message!.toObject() as D_Projects.AsObject).dProjectList[I];
          arrayProjects.push(temp);
        }
        this.simpleProjectArray$?.next(arrayProjects);
      }
    });
    return of(arrayProjects);
  }
  public GetProject(name: string): Observable<D_Project> {
    this.userinfomation = new UserDbInfomation();
    this.userinfomation.setDbname(name);
    let subject = {} as Subject<D_Project>;
    grpc.unary(GrpcDatabaseProject.GetProject, {
      request: this.userinfomation,
      host: this.hostAddress,
      onEnd: res => {
        const { status, message } = res;
        if (status === grpc.Code.OK && message) {
          this.signelProject$.next((message?.toObject() as D_Project));
        }
        return null;
      }
    });
    return subject;
  }

  AddProject(name:string,projectToAdd:D_Project){

    // const grpcC = new GrpcDatabaseProjectClient(this.hostAddress);
    const projectuserInfomation = new ProjectUserInfomation();
    projectuserInfomation.setProject(projectToAdd);
    const userDbInfomation = new UserDbInfomation();
    userDbInfomation.setDbname(name);
    projectuserInfomation.setUser(userDbInfomation);
    grpc.invoke(GrpcDatabaseProject.AddProject,{
      request:projectuserInfomation,
      host:this.hostAddress,
      onMessage:(Message:intger) =>{

        console.log(Message);
        // console.log(Message.getDProjectList().findIndex(x => console.log(x.getName())));
      },onEnd:res =>{
        // console.log("It have endes")
      }
    })
  }

  /*-------------------Documents-------------------*/

  /*-------------------RemoteFiles-------------------*/
}


