import { Injectable, EventEmitter } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private ws: WebSocket;

  public onOpen = new EventEmitter<Event>();
  public onMessage = new EventEmitter<MessageEvent>();
  public onError = new EventEmitter<Event>();
  private onClose = new EventEmitter<CloseEvent>();

  constructor() {

  }

  init() {
    let wsAddress = `ws://${!isNullOrUndefined(environment.webSocketUrl) ? environment.webSocketUrl : window.location.hostname}:${environment.webSocketPort}`;

    if (this.ws == null) {
      this.ws = new WebSocket(wsAddress)

      this.ws.onopen = e => {
        this.onOpen.emit(e)
        this.ws.onmessage = msg => this.onMessage.emit(msg);
        this.ws.onerror = err => this.onError.emit(err);
        this.ws.onclose = closed => this.onClose.emit(closed);
      }
    }


  }


  close() {
    //code 1000 - Normal closure
    this.ws.close(1000)
  }


  public send(msg: any) {
    this.ws.send(msg)
  }
}
