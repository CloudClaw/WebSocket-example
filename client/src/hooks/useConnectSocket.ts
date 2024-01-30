import React from 'react';
import SocketApi from '../api/socket-api';

export const useConnectSocket = () => {
    const [message, setMessage] = React.useState('');
    const connectSocket = () => {
        SocketApi.createConnection();

        SocketApi.socket?.on('client-path', (data) => {
            setMessage(JSON.stringify(data)); 
        });
    };

    React.useEffect(() => {
        connectSocket();
    }, []);

    return { message };
};
