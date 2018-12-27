import { Component, OnInit } from '@angular/core';
import { BaseWidget } from '../widget.base';
import { WebSocketService } from 'src/app/web-socket.service';

@Component({
  selector: 'app-color-picker-switch',
  templateUrl: './color-picker-switch.component.html',
  styleUrls: ['./color-picker-switch.component.css', '../widget.style.css']
})
export class ColorPickerSwitchComponent extends BaseWidget implements OnInit {

  color1 : number
  color2 : number
  color3 : number
  lightName : string;
  isTurnedOn: boolean;

  constructor(webSocketService : WebSocketService) { 
    super(webSocketService);

    this.widgetID = 2;
    this.lightName = "LED Strip 1"
    //
    webSocketService.onMessage.pipe(this.messageFilter).subscribe(e => {
      console.log("got my msg")

      var msg = JSON.parse(e.data);
      
      this.color1 = msg.Message.Color1;
      this.color2 = msg.Message.Color2;
      this.color3 = msg.Message.Color3;
      this.isTurnedOn = msg.Message.IsTurnedOn;
    })
  }

  ngOnInit() {
  }

  getWidgetType(): string {
    return "ColorPickerSwitch";
  }

  onButtonClicked(value : string){
    console.log("Toggled!!! ===="+ value + "===")

    this.isTurnedOn  = value == "On" ? true : false;
    let msg = {
      'WidgetID': this.widgetID,
      'WidgetType': this.getWidgetType(),
      'Message':{
        'LightID': 1,
        'IsTurnedOn': this.isTurnedOn,
        'Color1': this.color1,
        'Color2': this.color2,
        'Color3': this.color3,
      }
    }
    this.webSocketService.send(JSON.stringify(msg))
  }

  onColorChanged($event){
    console.log($event)
    let msg = {
      'WidgetID': this.widgetID,
      'WidgetType': this.getWidgetType(),
      'Message':{
        'LightID': 1,
        'IsTurnedOn': this.isTurnedOn,
        'Color1': this.color1,
        'Color2': this.color2,
        'Color3': this.color3,
      }
     
    }
    this.webSocketService.send(JSON.stringify(msg))
  }


}
