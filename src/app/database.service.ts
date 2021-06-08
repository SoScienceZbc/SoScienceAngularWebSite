import { Injectable } from '@angular/core';
import { grpc } from "@improbable-eng/grpc-web";
import { GrpcDatabaseProject } from "./generated/DataBaseProto/DatabaseProto_pb_service";
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
  signelProject = {} as D_Project;
  obsProjects = {} as D_Projects;
  projects: D_Projects = new D_Projects;
  behavProject$: BehaviorSubject<D_Projects> = new BehaviorSubject<D_Projects>(this.projects);

  constructor() {
    this.projects = new D_Projects();
     this.GetProjects("alex303a");
  }


  /*-------------------Projects-------------------*/

  public testObs(){ }

  /**
   *
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

        // console.log(res)
        // return res.message?.toObject() as Observable<D_Projects>;
        // subject.next((res.message?.toObject() as D_Projects.AsObject));
        // console.log((res.message?.toObject() as D_Projects.AsObject).dProjectList);
        // this.behavProject.subscribe().add(new Subject<D_Projects.AsObject>().next(res.message?.toObject() as D_Projects.AsObject));
        this.behavProject$.next((res.message?.toObject() as D_Projects));
        console.log("have run the subject asignment line 51 under databse.service.ts");

        //  return this.obsProjects.next(message.toObject() as D_Projects)


      }
    });
    return subject;
  }
  public GetProject(name: string): D_Project {
    this.userinfomation = new UserDbInfomation();
    this.userinfomation.setDbname("andi0137");
    grpc.unary(GrpcDatabaseProject.GetProject, {
      request: this.userinfomation,
      host: this.hostAddress,
      onEnd: res => {
        const { status, message } = res;
        if (status === grpc.Code.OK && message) {
          this.signelProject = message.toObject() as D_Project;
        }
        return null;
      }
    });
    return this.signelProject;
  }

  /*-------------------Documents-------------------*/

  /*-------------------RemoteFiles-------------------*/
}


