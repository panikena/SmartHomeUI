import { Component, OnInit, ViewChild } from '@angular/core';
import { WebSocketService } from 'src/app/web-socket.service';
import { BaseWidget } from '../widget.base';
import { MatButtonToggleGroup } from '@angular/material';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css', '../widget.style.css']
})
export class LightSwitchComponent extends BaseWidget implements OnInit {

  lightName : string;
  lightStatus : boolean;
  lightValue : string;

  constructor(webSocketService : WebSocketService) { 
    super(webSocketService);

    this.lightName = "Switch 1";

    webSocketService.onMessage.pipe(this.messageFilter).subscribe(e => {
      this.lightValue = e.data.status
      this.lightStatus  = e.data.status == "On" ? true : false;
    })

  }

  onButtonClicked(value : string){
    console.log("Toggled!!! ===="+ value + "===")

    this.lightStatus  = value == "On" ? true : false;
    let msg = {
      
    }
    //this.webSocketService.send(msg)
  }

  getWidgetType(): string {
    return "LightSwitch"
  }

  ngOnInit() {
  }

}
