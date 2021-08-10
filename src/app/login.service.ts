import { Injectable } from '@angular/core';
import { grpc } from "@improbable-eng/grpc-web";
import { LoginService as pbLoginService } from "../app/generated/AdLookupProto/ADLookupProto_pb_service";
import { LoginRequset, LoginRepley } from "../app/generated/AdLookupProto/ADLookupProto_pb";
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  hostAddress = "http://40.87.150.18:27385";
  LoginCheckBehaviorSubject$: BehaviorSubject<LoginRepley> = new BehaviorSubject<LoginRepley>(new LoginRepley());
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
        this.LoginCheckBehaviorSubject$.next(Message);
      },
      onEnd: res => {}
      

    });
  }
  public ValidateLogin(token:string,admin:boolean){
    const user = new LoginRepley();
    user.setToken(token);
    user.setAdmin(admin);
    user.setLoginsucsefull(false);
    const reply: BehaviorSubject<LoginRepley| null> =
      new BehaviorSubject<LoginRepley | null>(null);
    grpc.invoke(pbLoginService.ValidateToken,{
      request: user,
      host: this.hostAddress,
      onMessage: (Message:  LoginRepley) => {
        reply.next(Message);
      },
      onEnd: res => {}
      

    });
    return reply;
  }

}
