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
      onEnd: (res) => {}
    })
  }

  public GetVideo() {

  }

  public UpdateVideo() {

  }

  public DeleteVideo() {

  }
}
