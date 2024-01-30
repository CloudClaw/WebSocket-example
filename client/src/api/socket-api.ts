import { Socket, io } from 'socket.io-client';

class SocketApi {
    static socket: null | Socket = null;

    static createConnection() {
        this.socket = io('http://localhost:3000/');

        this.socket.on('connect', () => {
            console.log('connected');
        });

        this.socket.on('disconnect', (error) => {
            console.log('disconnected');
            console.log(error);
        });
    }
}

export default SocketApi;
