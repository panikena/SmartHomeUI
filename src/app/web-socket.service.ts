import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, Observer } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  
  private ws : WebSocket;

  public onOpen = new EventEmitter<Event>();
  public onMessage = new EventEmitter<MessageEvent>();
  public onError = new EventEmitter<Event>();
  private onClose = new EventEmitter<CloseEvent>();

  constructor(){
    this.ws = new WebSocket(environment.webSocketUrl)

    this.ws.onopen = e => {
       this.onOpen.emit(e)
       this.ws.onmessage = msg => this.onMessage.emit(msg);
       this.ws.onerror = err => this.onError.emit(err);
       this.ws.onclose = closed => this.onClose.emit(closed);
    }
  }

  public send(msg : any){
    this.ws.send(msg)
  }

  /*
  private subject: Subject<MessageEvent>;

  // For chat box
  public connect(url: string): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
    }
    return this.subject;
  }

  private create(url: string): Subject<MessageEvent> {

    var ws;
    try{
    ws = new WebSocket(url);
  }catch(e){
    console.log("----on  ws ctor---")
    console.log(e)
  }

    let observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);

        return ws.close.bind(ws);
      });

    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };

    console.log("----- created ws-----")
    return Subject.create(observer, observable);
  }
  */




}
