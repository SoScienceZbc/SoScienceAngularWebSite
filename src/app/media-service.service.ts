import { Injectable } from '@angular/core';
import {grpc} from '@improbable-eng/grpc-web';
import {RemoteMediaService} from './protos/RemoteMediaProto_pb_service';
import { MediaRequest, MediaReply, UserDbInformation, RetrieveMediaRequest, RetrieveMediaReply, ChangeTitleRequest, MediaRequests, MediasReply } from './protos/RemoteMediaProto_pb';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  hostAddress = 'https://soscience.dk:27385';

  constructor() { }

  public AddRecordedMedia(video: MediaRequest) {
    const videoToAdd = video;
    grpc.invoke(RemoteMediaService.SendMedia, {
      request: videoToAdd,
      host: this.hostAddress,
      onMessage: (successfull: MediaReply) => {
        console.log("AddVideo Message");
        console.log("Video added to db: " + successfull);
      },
      onEnd: res => {console.log("On End AddVideo: " + res)}
    })
  }

  public GetMedia(videoId: number) {
    const getVideoRequest = new RetrieveMediaRequest();
    getVideoRequest.setId(videoId);
    grpc.invoke(RemoteMediaService.RetrieveMedia, {
      request: getVideoRequest,
      host: this.hostAddress,
      onMessage: (videoElement: RetrieveMediaReply) => {
        //TODO: Display retrieved video in the popup window
      },
      onEnd: () => {}
    })
  }

  public UpdateMedia(videoId: number, titleToChange: string) {
    const changeTitle = new ChangeTitleRequest();
    changeTitle.setId(videoId);
    changeTitle.setTitle(titleToChange);
    grpc.invoke(RemoteMediaService.UpdateMedia, {
      request: changeTitle,
      host: this.hostAddress,
      onMessage: (successfull: MediaReply) => {
        console.log("video name changed: " + successfull)
      },
      onEnd: () => {}
    })
  }

  public DeleteMedia(videoId: number) {
    const videoToDelete = new RetrieveMediaRequest();
    videoToDelete.setId(videoId);
    grpc.invoke(RemoteMediaService.DeleteMedia, {
      request: videoToDelete,
      host: this.hostAddress,
      onMessage: (successfull: MediaReply) => {
        console.log("video deleted successfully: " + successfull)
      },
      onEnd: () => {}
    })

  }

  public GetAllMedias(id: number): Observable<MediaRequests> {
    const userInformation = new UserDbInformation();
    userInformation.setUsername(sessionStorage.getItem("Token")!);
    userInformation.setId(id);
    const medias: BehaviorSubject<MediaRequests> = new BehaviorSubject<MediaRequests>(new MediaRequests);
    grpc.invoke(RemoteMediaService.GetMedias, {
      request: userInformation,
      host: this.hostAddress,
      onMessage: (message: MediaRequests) => {
        medias.next(message);
      },
      onEnd: () => {}
    })
    return medias;
  }
}
