import { Injectable } from '@angular/core';
import { grpc } from "@improbable-eng/grpc-web";
import { LoginServcie } from "../app/generated/AdLookupProto/AdLookupProto_pb_service";
import { LoginRequset, LoginRepley } from "../app/generated/AdLookupProto/AdLookupProto_pb";
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  hostAddress = "http://40.87.150.18:27385";
  LoginCheakBehavierSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userlogin = {} as LoginRepley;

  constructor() { }

  public CheckLogin(usernam:string,passwor:string){
    let response = {} as LoginRepley;
    const user = new LoginRequset();
    user.setUsername(usernam);
    user.setPassword(passwor);
    grpc.unary(LoginServcie.LoginAD,{
      request: user,
      host: this.hostAddress,
      onEnd: res => {
        const { status, message } = res;
        if (status === grpc.Code.OK && message) {
          this.LoginCheakBehavierSubject$.next((message.toObject() as LoginRepley.AsObject).loginsucsefull);
        }
      }

    });
  }

}
