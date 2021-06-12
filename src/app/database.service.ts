import { Injectable } from '@angular/core';
import { grpc } from "@improbable-eng/grpc-web";
import { GrpcDatabaseProject, GrpcDatabaseProjectClient } from "./generated/DataBaseProto/DatabaseProto_pb_service";
import { UserDbInfomation, ProjectUserInfomation, intger, D_Project, D_Projects, D_Documents, D_Document } from "./generated/DataBaseProto/DatabaseProto_pb";
import { BehaviorSubject, Observable, of, Subject, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  project = {} as D_Projects;
  hostAddress = "http://40.87.150.18:27385";
  signelProject$: BehaviorSubject<D_Project> = new BehaviorSubject<D_Project>(new D_Project);
  behavProject$: BehaviorSubject<D_Projects> = new BehaviorSubject<D_Projects>(new D_Projects);

  constructor() {
  }


  //#region Project
  /*-------------------Projects-------------------*/
  /**
   * this call the grpc function the rigth way..
   * @param name The projects owner name
   */
  public GetProjectsTheRigthWay(name: string) {

    // const grpcC = new GrpcDatabaseProjectClient(this.hostAddress);
    const userDbInfomation = new UserDbInfomation();
    userDbInfomation.setDbname(name);
    grpc.invoke(GrpcDatabaseProject.GetProjects, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: D_Projects) => {
        this.behavProject$.next(Message);
        // console.log(Message);
        // console.log(Message.getDProjectList().findIndex(x => console.log(x.getName())));
      }, onEnd: res => {
        // console.log("It have endes")
      }
    })
  }
  /**
   *
   * @param name the name to getproject for(note the id is the thing that is useing)
   * @returns
   */
  public GetProject(name: string, id: number) {
    const userDbInfomation = new UserDbInfomation();
    userDbInfomation.setDbname(name);
    userDbInfomation.setId(id);
    grpc.invoke(GrpcDatabaseProject.GetProject, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: D_Project) => {
        this.signelProject$.next(Message);
      }, onEnd: res => {
        // console.log("It have endes")
      }
    })
  }
  /**
   * This adds a D_prject to the database.
   * @param name the project owner name.
   * @param projectToAdd a D_Project to add to the database.
   */
  AddProject(name: string, projectToAdd: D_Project) {
    const projectuserInfomation = new ProjectUserInfomation();
    projectuserInfomation.setProject(projectToAdd);
    const userDbInfomation = new UserDbInfomation();
    userDbInfomation.setDbname(name);
    projectuserInfomation.setUser(userDbInfomation);
    grpc.invoke(GrpcDatabaseProject.AddProject, {
      request: projectuserInfomation,
      host: this.hostAddress,
      onMessage: (Message: intger) => {
        console.log("entris change: " + Message.getNumber());
      }, onEnd: res => {
      }
    })
  }
  /**
   * //TODO: Struction Documents => call getdocoment => getData() (getData() is not return in the first call and you have to call getdoument to get the data back(its in html form.))
   * @param name
   * @param id
   */
  public GetProject2(name: string, id: number) {
    const userDbInfomation = new UserDbInfomation();
    userDbInfomation.setDbname(name);
    userDbInfomation.setId(id);
    grpc.invoke(GrpcDatabaseProject.GetProject, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: D_Project) => {
        // this.behavProject$.next(Message);
        if (Message.getDocumentsList().length > 0) {

          console.log("From dataService (GetDocoments) with name: " + name);
          console.log(Message.getDocumentsList()[0].getId());
          console.log(Message.getDocumentsList()[0].getData());
        }
        // console.log(Message.getDProjectList().findIndex(x => console.log(x.getName())));
      }, onEnd: res => {
        // console.log("It have endes")
      }
    })
  }
  //#endregion
  //#region Documents
  /*-------------------Documents-------------------*/
  public AddDocument(name: string) {

    // const grpcC = new GrpcDatabaseProjectClient(this.hostAddress);
    const userDbInfomation = new D_Document();
    userDbInfomation.setProjectid(151);
    userDbInfomation.setTitle("Test Docoment");
    userDbInfomation.setData("test word stuff");
    grpc.invoke(GrpcDatabaseProject.AddDocument, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: intger) => {
        // this.behavProject$.next(Message);
        console.log(Message);
        // console.log(Message.getDProjectList().findIndex(x => console.log(x.getName())));
      }, onEnd: res => {
        // console.log("It have endes")
      }
    })
  }

  public GetDocuments(name: string, id: number): Observable<D_Documents> {

    // const grpcC = new GrpcDatabaseProjectClient(this.hostAddress);
    const userDbInfomation = new UserDbInfomation();
    userDbInfomation.setDbname(name);
    userDbInfomation.setId(id);
    const docmoments: BehaviorSubject<D_Documents> = new BehaviorSubject<D_Documents>(new D_Documents);
    grpc.invoke(GrpcDatabaseProject.GetDocuments, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: D_Documents) => {
        // this.behavProject$.next(Message);
        docmoments.next(Message);


        // console.log("From dataService (GetDocoments) with name: " + name);
        console.log(Message.getDDocumentsList()[0].getId());
        console.log(Message.getDDocumentsList()[0].getProjectid())



        // console.log(Message.getDProjectList().findIndex(x => console.log(x.getName())));
      }, onEnd: res => {
        console.log(res.toString());
        // console.log("It have endes")
      }
    })
    return docmoments;
  }

  public GetDocument(name: string, id: number): Observable<D_Document> {
    const userDbInfomation = new UserDbInfomation();
    userDbInfomation.setDbname(name);
    userDbInfomation.setId(id);
    let docoment: BehaviorSubject<D_Document> = new BehaviorSubject<D_Document>(new D_Document);
    grpc.invoke(GrpcDatabaseProject.GetDocument, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: D_Document) => {
        // this.behavProject$.next(Message);
        // console.log("From dataService (GetDocoment) with name: " + name);
        console.log(Message.getId());
        console.log(Message.getProjectid())
        docoment.next(Message);

        // console.log(Message.getDProjectList().findIndex(x => console.log(x.getName())));
      }, onEnd: res => {
        // console.log("It have endes")
      }
    })
    return docoment;
  }

  //#endregion
  /*-------------------RemoteFiles-------------------*/
}


