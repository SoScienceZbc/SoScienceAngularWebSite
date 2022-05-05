import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { EMPTY, Observable, from } from 'rxjs';
import { catchError } from 'rxjs/operators'

declare const MediaRecorder: any;

@Directive({
  selector: 'video',
})
export class HtmlVideoDirective {

  public mediaElement: HTMLMediaElement;

  constructor(elRef: ElementRef) {
    this.mediaElement = elRef.nativeElement;
  }
}

@Directive({
  selector: 'video[mediaStream]',
})
export class MediaStreamDirective extends HtmlVideoDirective implements AfterViewInit{
@Input('mediaStream')
public config!: MediaStreamConstraints

@Output()
public intitError: EventEmitter<DOMException | ReferenceError> = new EventEmitter();

@Output()
public mediaStreamRef: EventEmitter<MediaStream> = new EventEmitter();

// @Output()
// public videoRecorded: EventEmitter<Blob> = new EventEmitter();

// @Output()
// public audioRecorded: EventEmitter<Blob> = new EventEmitter();

@Output()
public mediaRecorded: EventEmitter<Blob> = new EventEmitter();

private readonly mediaDevices: MediaDevices = navigator.mediaDevices;
private readonly document: Document = document;
private mediaRecorder: typeof MediaRecorder;
private mediaStream!: MediaStream | undefined;

constructor(ref: ElementRef, private ngZone: NgZone) {
  super(ref)
}

ngAfterViewInit(): void {
  if (this.mediaElement.autoplay) {
    this.videoPlay();
  }
}


/*---------------Video-----------------*/
public videoPlay(): void {
  if (!this.mediaStream) {
    this.videoUserMediaObs(this.config)
      .pipe(
        catchError((err) => {
          this.intitError.emit(err);
          return EMPTY;
        })
      )
      .subscribe((stream) => {
        // No need to cancel subscription because will complete
        this.mediaStream = stream;
        this.mediaStreamRef.emit(this.mediaStream);
        this.videoPlay(); // Recursive call to assing video stream
      });
    return;
  }
  if (!this.mediaElement.srcObject) {
    this.mediaElement.srcObject = this.mediaStream;
  }
  this.mediaElement.play();
}

private videoUserMediaObs(
  config: MediaStreamConstraints
): Observable<MediaStream> {
  return from(
    this.mediaDevices.getUserMedia({
      ...{ video: true, audio: true }, // Default config
      ...config,
    })
  );
}

/*---------------Video-----------------*/
audioPlay() {
  if (!this.mediaStream) {
    this.audioUserMediaObs(this.config)
      .pipe(
        catchError((err) => {
          this.intitError.emit(err);
          return EMPTY;
        })
      )
      .subscribe((stream) => {
        // No need to cancel subscription because will complete
        this.mediaStream = stream;
        this.mediaStreamRef.emit(this.mediaStream);
        this.videoPlay(); // Recursive call to assing video stream
      });
    return;
  }
  if (!this.mediaElement.srcObject) {
    this.mediaElement.srcObject = this.mediaStream;
  }
  this.mediaElement.play();
}

audioUserMediaObs(
  config: MediaStreamConstraints
  ): Observable<MediaStream> {
  return from(
    this.mediaDevices.getUserMedia({
      ...{ video: false, audio: true }, // Default config
      ...config,
    })
  );
}

/*------------Audio and video methods-------------  */
public stop(): void {
  // Stop camera/microphone devices streaming
  this.mediaStream?.getTracks().forEach((track) => track.stop());
  this.mediaStream = undefined;
  this.mediaElement.pause();
  this.mediaElement.srcObject = null;
}

public recordStop(): void {
  if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
    return;
  }
  this.mediaRecorder.stop(); // Fires ondataavailable's event
}

public recordStart(): void {
  if (this.mediaRecorder || !this.mediaStream) {
    return;
  }
  try {
    this.mediaRecorder = new MediaRecorder(this.mediaStream);
  } catch (err: any) {
    this.intitError.emit(err);
  }
  this.mediaRecorder.ondataavailable = (event: any) => {
    const blob = event.data;
    if (blob?.size > 0) {
      this.ngZone.run(() => this.mediaRecorded.emit(blob));
    }
  };
  this.mediaRecorder.start();
}

}


