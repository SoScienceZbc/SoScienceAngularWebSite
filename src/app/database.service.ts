import { Injectable } from '@angular/core';
import { grpc } from "@improbable-eng/grpc-web";
import { GrpcDatabaseProject, GrpcDatabaseProjectClient } from "./generated/DataBaseProto/DatabaseProto_pb_service";
import { UserDbInfomation, ProjectUserInfomation, intger, D_Project, D_Projects, D_Documents } from "./generated/DataBaseProto/DatabaseProto_pb";
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  userinfomation = {} as UserDbInfomation;
  project = {} as D_Projects;
  hostAddress = "http://40.87.150.15:5000";
  signelProject = {} as D_Project;

  constructor() { }


  /*-------------------Projects-------------------*/

/**
 *
 * @param name name to use to find projects in databse
 * @returns a projectList for the specfide name.*/
  public GetProjects(name : string) : D_Projects {
    this.userinfomation.setDbname(name);
    grpc.unary(GrpcDatabaseProject.GetProjects, {
      request: this.userinfomation,
      host: this.hostAddress,
      onEnd: res => {
        const { status, message } = res;
        if (status === grpc.Code.OK && message) {
          this.project = message.toObject() as D_Projects;
        }
        return null;
      }
    });
    return this.project;
  }
  public GetProject(name : string) : D_Project {
    this.userinfomation.setDbname(name);
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
  public AddProject(project:D_Project,name : string) : intger {
    this.userinfomation.setDbname(name);
    const tesdt = new ProjectUserInfomation();
    tesdt.setUser(this.userinfomation);
    let intgers = new intger();
    grpc.unary(GrpcDatabaseProject.AddProject, {
      request: tesdt,
      host: this.hostAddress,
      onEnd: res => {
        const { status, message } = res;
        if (status === grpc.Code.OK && message) {
          intgers = message.toObject() as intger;
        }
        return null;
      }
    });
    return intgers;
  }

/*-------------------Documents-------------------*/

  public GetDocuments(name : string) {
    const userdbinfo = new UserDbInfomation();
    userdbinfo.setDbname(name);
    grpc.unary(GrpcDatabaseProject.GetDocuments, {
      request: userdbinfo,
      host: this.hostAddress,
      onEnd: res => {
        const { status, message } = res;
        if (status === grpc.Code.OK && message) {
          var result = message.toObject() as D_Documents.AsObject;
          console.log(result.dDocumentsList.length);
          return of(result)
        }
        return null;
      }
    });
  }

  /*-------------------RemoteFiles-------------------*/
}


