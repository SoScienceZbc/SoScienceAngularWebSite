import { Injectable } from '@angular/core';
import { grpc } from "@improbable-eng/grpc-web";
import { LoginService as pbLoginService } from "./protos/AdLookupProto_pb_service";
import { LoginRequset, LoginRepley } from "./protos/AdLookupProto_pb";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MockLoginReply, MockLoginRequest } from './protos/MockupProto_pb';
import { loginMockup } from './protos/MockupProto_pb_service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  hostAddress = "https://93.191.157.106:27385";
  //hostAddress = "http://localhost:27385";
  //hostAddress = "http://127.0.0.1:27385";

  LoginCheckBehaviorSubject$: BehaviorSubject<LoginRepley> = new BehaviorSubject<LoginRepley>(new LoginRepley());
  userlogin = {} as LoginRepley;
  userlogin2 = {} as MockLoginReply;

  public CheckLogin(username:string,password:string){
    console.log("checks login");
    const user = new LoginRequset();
    user.setUsername(username);
    user.setPassword(password);
    console.log("Try To Invoke");
    grpc.invoke(pbLoginService.LoginAD,{
      request: user,
      host: this.hostAddress,
      onMessage: (Message:  LoginRepley) => {
        console.log("try Msg");
        console.log(this.LoginCheckBehaviorSubject$.next(Message));
      },
      onEnd: res => {console.log("On End Check Login" + res);}      

    });
  }

  public loginMockupSuccessful(username:string, password:string){
    const user = new MockLoginRequest();
    user.setUsername(username);
    user.setPass(password);

    grpc.invoke(loginMockup.loginMockupSuccessful,{
      request: user,
      host: this.hostAddress,
      onMessage: (Message:  MockLoginReply) => {
        console.log("Reply Message: " + Message);
      },
      onEnd: res => {}   

    });
    
  }
  
  public ValidateLogin(token:string){
    const user = new LoginRepley();
    user.setToken(token);
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
