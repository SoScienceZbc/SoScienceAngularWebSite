import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import {
  GrpcDatabaseProject,
  GrpcDatabaseProjectClient,
} from './generated/DataBaseProto/DataBaseProto_pb_service';
import {
  UserDbInfomation,
  ProjectUserInfomation,
  intger,
  D_Project,
  D_Projects,
  D_Documents,
  D_Document,
  D_Subject,
  D_Subjects
} from './generated/DataBaseProto/DataBaseProto_pb';
import { BehaviorSubject, Observable, of, Subject, zip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  project = {} as D_Projects;
  hostAddress = 'http://40.87.150.18:27385';
  signelProject$: BehaviorSubject<D_Project> = new BehaviorSubject<D_Project>(
    new D_Project()
  );
  behavProject$: BehaviorSubject<D_Projects> = new BehaviorSubject<D_Projects>(
    new D_Projects()
  );
  listOfProjects$: BehaviorSubject<D_Project[]> = new BehaviorSubject<
    D_Project[]
  >([]);
  EditorDocoment$: BehaviorSubject<D_Document> =
    new BehaviorSubject<D_Document>(new D_Document());

  constructor() {}

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
        this.listOfProjects$.next(Message.getDProjectList());
        // this.behavProject$.next(Message);
        // console.log(Message);
        // console.log(Message.getDProjectList().findIndex(x => console.log(x.getName())));
      },
      onEnd: (res) => {
        // console.log("It have endes")
      },
    });
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
      },
      onEnd: (res) => {
        // console.log("It have endes")
      },
    });
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
        console.log('entris change: ' + Message.getNumber());
        this.GetProjectsTheRigthWay(name);
      },
      onEnd: (res) => {},
    });
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
          console.log('From dataService (GetDocoments) with name: ' + name);
          console.log(Message.getDocumentsList()[0].getId());
          console.log(Message.getDocumentsList()[0].getData());
        }
        // console.log(Message.getDProjectList().findIndex(x => console.log(x.getName())));
      },
      onEnd: (res) => {
        // console.log("It have endes")
      },
    });
  }
/**
 * updates the providede project in the database.
 * @param projectToUpdate the project to update in database
 * @param name the users name in the database
 */
  public UpdateProject(projectToUpdate:D_Project,name:string){
    const userDbInfomation = new ProjectUserInfomation();
    const userinfo = new UserDbInfomation();
    userinfo.setDbname(name)
    userDbInfomation.setProject(projectToUpdate);
    userDbInfomation.setUser(userinfo)
    grpc.invoke(GrpcDatabaseProject.EditProject, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: intger) => {
        this.GetProjectsTheRigthWay(name);
      },
      onEnd: (res) => {
        // console.log("It have endes")
      },
    });

  }
  //#endregion
  //#region Documents
  /*-------------------Documents-------------------*/
  public AddDocument(name: string, docomentToAdd: D_Document) {
    // const grpcC = new GrpcDatabaseProjectClient(this.hostAddress);
    const userDbInfomation = docomentToAdd;
    grpc.invoke(GrpcDatabaseProject.AddDocument, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: intger) => {
        // this.behavProject$.next(Message);
        // console.log(Message);
        this.GetProjectsTheRigthWay(name);
        // console.log(Message.getDProjectList().findIndex(x => console.log(x.getName())));
      },
      onEnd: (res) => {
        // console.log("It have ended")
      },
    });
  }

  public GetDocuments(name: string, id: number): Observable<D_Documents> {
    const userDbInfomation = new UserDbInfomation();
    userDbInfomation.setDbname(name);
    userDbInfomation.setId(id);
    const docmoments: BehaviorSubject<D_Documents> =
      new BehaviorSubject<D_Documents>(new D_Documents());
    grpc.invoke(GrpcDatabaseProject.GetDocuments, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: D_Documents) => {
        docmoments.next(Message);
      },
      onEnd: (res) => {},
    });
    return docmoments;
  }

  public GetDocument(name: string, id: number): Observable<D_Document> {
    const userDbInfomation = new UserDbInfomation();
    userDbInfomation.setDbname(name);
    userDbInfomation.setId(id);
    let docoment: BehaviorSubject<D_Document> = new BehaviorSubject<D_Document>(
      new D_Document()
    );
    grpc.invoke(GrpcDatabaseProject.GetDocument, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: D_Document) => {
        this.EditorDocoment$.next(Message);
        docoment.next(Message);

        // console.log(Message.getDProjectList().findIndex(x => console.log(x.getName())));
      },
      onEnd: (res) => {
        // console.log("It have endes")
      },
    });
    return docoment;
  }
  /**
   *
   * @param name The docoment owners name
   * @param id the docoment id
   * @returns a behaviorsubject of type D_document.
   */
  public GetDocomentHtml(
    name: string,
    id: number
  ): BehaviorSubject<D_Document> {
    const userDbInfomation = new UserDbInfomation();
    userDbInfomation.setDbname(name);
    userDbInfomation.setId(id);
    let docoment: BehaviorSubject<D_Document> = new BehaviorSubject<D_Document>(
      new D_Document()
    );
    grpc.invoke(GrpcDatabaseProject.GetDocument, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: D_Document) => {
        this.EditorDocoment$.next(Message);
        // console.log("Data from database in html form.",Message.getData())
        docoment.next(Message);
      },
      onEnd: (res) => {},
    });
    return docoment;
  }

  /**
   *
   * @param name The docoment owners name
   * @param docomentToUpdate the document to update in database.
   * @returns a behaviorsubject of type D_document.
   */
  public UpdateDocoment(name: string, docomentToUpdate: D_Document) {
    const userDbInfomation = docomentToUpdate;
    grpc.invoke(GrpcDatabaseProject.UpdateDocument, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: intger) => {
        if (Message.getNumber() == 0) {
          console.log('D_DocomentId', docomentToUpdate.getId());
          console.log('Title', docomentToUpdate.getTitle());
          console.log('Data', docomentToUpdate.getData());
        }
      },
      onEnd: (res) => {},
    });
  }

  public RemoveDocoment(docomnet: D_Document, projectID: number) {
    const userDbInfomation = new ProjectUserInfomation();
    //Removedocoment usese userinfomation as the docoment id..
    //BadFix but Create new Project and add the docoment into that and send that to the database.
    //and ofcufse remeber to set the projectid from the parm"projectID"
    let tempproject = new D_Project();
    tempproject.addDocuments(docomnet);
    tempproject.setId(projectID);
    userDbInfomation.setProject(tempproject);

    grpc.invoke(GrpcDatabaseProject.RemoveDocument, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: intger) => {
        console.log('This have been changed in database.');
        this.GetProjectsTheRigthWay(sessionStorage.getItem('Token')!.toString());
      },
      onEnd: (res) => {
      },
    });
  }

  public DeleteProject(project: D_Project, name: string) {
    const userDbInfomation = new ProjectUserInfomation();
    const userinfomation = new UserDbInfomation();
    userinfomation.setDbname(name);
    userDbInfomation.setProject(project);
    userDbInfomation.setUser(userinfomation);
    grpc.invoke(GrpcDatabaseProject.RemoveProject, {
      request: userDbInfomation,
      host: this.hostAddress,
      onMessage: (Message: intger) => {
        this.GetProjectsTheRigthWay(name);
        console.log('This have been changed in database.', Message.getNumber());
      },
      onEnd: (res) => {},
    });
  }
  //#endregion
  /*-------------------RemoteFiles-------------------*/

  /*--------------------Subjects---------------------*/
  public AddSubject(subject: D_Subject,name:string) {
    const userinfomation = new UserDbInfomation();
    userinfomation.setDbname(name);
    subject.setUser(userinfomation);
    
    grpc.invoke(GrpcDatabaseProject.AddSubject, {
      request: subject,
      host: this.hostAddress,
      onMessage: (Message: intger) => {
      }, 
      onEnd: (res) => {},
    })
  }
}
