import { WebSocketService } from '../web-socket.service';
import { Input } from '@angular/core';
import { filter } from 'rxjs/operators';

export abstract class BaseWidget
{
    @Input()
    public widgetID : number;

    @Input()
    public widgetName : string;

    
    /**
     *
     */
    constructor(protected webSocketService : WebSocketService) {  
    }


    abstract getWidgetType() : string;
    protected messageFilter  = filter<MessageEvent>(event => JSON.parse(event.data).WidgetID == this.widgetID)    

}