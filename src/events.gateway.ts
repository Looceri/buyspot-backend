import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  private server: Server;

  @SubscribeMessage('msgToServer')
  handleMessage(client: any, payload: string): void {
    this.server.emit('msgToClient', payload); // Broadcast
  }

  notifyPurchase(data: any): void {
    this.server.emit('purchaseMade', data);
  }
}
