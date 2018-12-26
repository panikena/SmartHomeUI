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
}
