import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*', //Опции, дающие доступ к любому домену
  },
})
export class SocketService implements OnGatewayConnection {
  @SubscribeMessage('server-path')
  handleEvent(@MessageBody() dto: any, @ConnectedSocket() client: any) {
    console.log('dto', dto);
    const res = { type: 'someType', dto };
    client.emit('client-path', res);
  }

  handleConnection(client: any) {
    //Когда клиент подключается к сокету, он отправляет запрос на соединение
    console.log(client);
    console.log('CONNECTED');
  }
}
