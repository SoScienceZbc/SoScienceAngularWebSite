import { Injectable } from '@angular/core';
import { grpc } from "@improbable-eng/grpc-web";
import { LoginServcie } from "../app/generated/AdLookupProto/AdLookupProto_pb_service";
import { LoginRequset, LoginRepley } from "../app/generated/AdLookupProto/AdLookupProto_pb";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  hostAddress = "http://40.87.150.18:27385";
  // hostAddress = "http://10.111.162.18:27385";
  constructor() { }

  userlogin = {} as LoginRepley;


  public CheckLogin(usernam:string,passwor:string): LoginRepley{
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
          this.userlogin=
          message.toObject() as LoginRepley;
        }
        return false;
      }

    });

      return this.userlogin;
  }

}
