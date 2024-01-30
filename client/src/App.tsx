import React from 'react';
import './App.css';
import { useConnectSocket } from './hooks/useConnectSocket';
import SocketApi from './api/socket-api';

function App() {
    const [text, setText] = React.useState<string>('');
    useConnectSocket();
    const { message } = useConnectSocket();

    const sendMessage = () => {
        SocketApi.socket?.emit('server-path', { text });
    };

    return (
        <div className="App">
            <h1>WebSocket</h1>
            <div>
                <input type="text" onChange={(e) => setText(e.currentTarget.value)} />
                <button onClick={sendMessage}>SEND</button>
                <div>
                    <h3>Backend message</h3>
                    {message}
                </div>
            </div>
        </div>
    );
}

export default App;
