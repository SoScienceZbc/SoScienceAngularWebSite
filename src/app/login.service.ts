import { Injectable } from '@angular/core';
import { grpc } from "@improbable-eng/grpc-web";
import { LoginService as pbLoginService } from "../app/generated/AdLookupProto/AdLookupProto_pb_service";
import { LoginRequset, LoginRepley } from "../app/generated/AdLookupProto/AdLookupProto_pb";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  hostAddress = "http://40.87.150.18:27385";
  LoginCheckBehaviorSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userlogin = {} as LoginRepley;

  public CheckLogin(username:string,password:string){
    const user = new LoginRequset();
    user.setUsername(username);
    user.setPassword(password);
    grpc.invoke(pbLoginService.LoginAD,{
      request: user,
      host: this.hostAddress,
      onMessage: (Message:  LoginRepley) => {
        console.log(Message.toObject());
        this.LoginCheckBehaviorSubject$.next((Message.toObject() as LoginRepley.AsObject).loginsucsefull);
      },
      onEnd: res => {}
      

    });
  }

}
