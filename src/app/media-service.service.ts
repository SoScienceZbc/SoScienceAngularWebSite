import { Injectable } from '@angular/core';
import {grpc} from '@improbable-eng/grpc-web';
import {RemoteMediaService} from './protos/RemoteMediaProto_pb_service';
import { MediaRequest, MediaReply, ProjectInformation, RetrieveMediaRequest, RetrieveMediaReply, ChangeTitleRequest, MediaRequests, D_MediaInfo } from './protos/RemoteMediaProto_pb';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { title } from 'process';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  hostAddress = 'https://soscience.dk:27385';

  constructor(private databaseservice: DatabaseService) { }

  public AddRecordedMedia(video: MediaRequest) {
    const videoToAdd = video;
    grpc.invoke(RemoteMediaService.SendMedia, {
      request: videoToAdd,
      host: this.hostAddress,
      onMessage: (successfull: MediaReply) => {
        console.log("Media added to db: " + successfull); 
      },
      onEnd: res => {console.log("On End AddMedia: " + res)}
    })
  }

  public GetMedia(videoId: number): Observable<RetrieveMediaReply> {
    const getMediaRequest = new RetrieveMediaRequest();
    getMediaRequest.setId(videoId);
    let mediaFileFromDB:  BehaviorSubject<RetrieveMediaReply> = new BehaviorSubject<RetrieveMediaReply>(new RetrieveMediaReply);
    grpc.invoke(RemoteMediaService.RetrieveMedia, {
      request: getMediaRequest,
      host: this.hostAddress,
      onMessage: (videoElement: RetrieveMediaReply) => {
        //TODO: Display retrieved video in the popup window
        mediaFileFromDB.next(videoElement);
      },
      onEnd: res => {
        console.log("On end GetMedia: " + res)
      }
    })
    return mediaFileFromDB;
  }

  public UpdateMedia(videoId: number, titleToChange: string) {
    console.log("entered UpdateMedia")
    const changeTitle = new ChangeTitleRequest();
    changeTitle.setId(videoId);
    changeTitle.setTitle(titleToChange);
    grpc.invoke(RemoteMediaService.UpdateMedia, {
      request: changeTitle,
      host: this.hostAddress,
      onMessage: (successfull: MediaReply) => {
        console.log("UpdateMedia successfull: " + successfull)
        this.databaseservice.GetProjectsTheRigthWay();
      },
      onEnd: res => {console.log("On end UpdateMedia: " + res)
      }
    })
  }

  public DeleteMedia(videoId: number) {
    const videoToDelete = new RetrieveMediaRequest();
    videoToDelete.setId(videoId);
    grpc.invoke(RemoteMediaService.DeleteMedia, {
      request: videoToDelete,
      host: this.hostAddress,
      onMessage: (successfull: MediaReply) => {
        console.log("video deleted successfully: " + successfull);
        this.databaseservice.GetProjectsTheRigthWay();
      },
      onEnd: res => {console.log("On end DeleteMedia: " + res)}
    })

  }

  public GetAllMedias(id: number): Observable<MediaRequests> {
    const userInformation = new ProjectInformation();
    userInformation.setId(id);
    const medias: BehaviorSubject<MediaRequests> = new BehaviorSubject<MediaRequests>(new MediaRequests);
    grpc.invoke(RemoteMediaService.GetMedias, {
      request: userInformation,
      host: this.hostAddress,
      onMessage: (message: MediaRequests) => {
        medias.next(message);
      },
      onEnd: res => {console.log("On end GetAllMedias: " + res)}
    })
    return medias;
  }
}
