import { Component, OnInit } from '@angular/core';
import { BaseWidget } from '../widget.base';
import { WebSocketService } from 'src/app/web-socket.service';

@Component({
  selector: 'app-thermo',
  templateUrl: './thermo.component.html',
  styleUrls: ['./thermo.component.css', '../widget.style.css']
})
export class ThermoComponent extends BaseWidget implements OnInit {
  

  temperature : number;
  humidity : number;
  pressure : number;

  constructor(webSocketService : WebSocketService) {
    super(webSocketService);

    this.widgetID = 3;
    this.widgetName = "Thermo"
    //pipe(this.messageFilter)
    webSocketService.onMessage.subscribe(e => {
      console.log(this.getWidgetType() + " got my msg")

      var msg = JSON.parse(e.data);

      console.log(msg)

      this.temperature = msg.Message.Temperature;
      this.humidity = msg.Message.Humidity;
      this.pressure = msg.Message.Pressure;
    })
   }

  ngOnInit() {

    this.temperature = 25
    this.humidity = 43;
    this.pressure = 101000
  }

  getWidgetType(): string {
    return "Thermo";
  }

}
