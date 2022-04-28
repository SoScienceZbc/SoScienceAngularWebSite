import { Injectable } from '@angular/core';
import {grpc} from '@improbable-eng/grpc-web';
import {RemoteMediaService} from './protos/RemoteMediaProto_pb_service';
import { VideoRequest, VideoReply, UserDbInformation, RetrieveVideoRequest, RetrieveVideoReply, ChangeTitleRequest, VideoRequests } from './protos/RemoteMediaProto_pb';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  hostAddress = 'https://soscience.dk:27385';

  constructor() { }

  public AddRecordedVideo(video: VideoRequest ) {
    const videoToAdd = video;
    grpc.invoke(RemoteMediaService.SendVideo, {
      request: videoToAdd,
      host: this.hostAddress,
      onMessage: (successfull: VideoReply) => {
        console.log("Video added to db: " + successfull);
      },
      onEnd: () => {}
    })
  }

  public GetVideo(videoId: number) {
    const getVideoRequest = new RetrieveVideoRequest();
    getVideoRequest.setId(videoId);
    grpc.invoke(RemoteMediaService.RetrieveVideo, {
      request: getVideoRequest,
      host: this.hostAddress,
      onMessage: (videoElement: RetrieveVideoReply) => {
        //TODO: Display retrieved video in the popup window
      },
      onEnd: () => {}
    })
  }

  public UpdateVideo(videoId: number, titleToChange: string) {
    const changeTitle = new ChangeTitleRequest();
    changeTitle.setId(videoId);
    changeTitle.setTitle(titleToChange);
    grpc.invoke(RemoteMediaService.UpdateVideo, {
      request: changeTitle,
      host: this.hostAddress,
      onMessage: (successfull: VideoReply) => {
        console.log("video name changed: " + successfull)
      },
      onEnd: () => {}
    })
  }

  public DeleteVideo(videoId: number) {
    const videoToDelete = new RetrieveVideoRequest();
    videoToDelete.setId(videoId);
    grpc.invoke(RemoteMediaService.DeleteVideo, {
      request: videoToDelete,
      host: this.hostAddress,
      onMessage: (successfull: VideoReply) => {
        console.log("video deleted successfully: " + successfull)
      },
      onEnd: () => {}
    })
  }

  public GetVideos(id: number) {

  }
}
