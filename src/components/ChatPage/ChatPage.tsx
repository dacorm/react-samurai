import React, {useEffect, useState} from 'react';
import userIcon from './png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png'

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: React.FC = () => {
    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    );
};

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        ws.addEventListener('message', (e: MessageEvent) => {
            let newMessage = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessage])
        })
    }, [])

    return (
        <div style={{height: "400px", overflowY: "auto"}}>
            {
                messages.map((m, i) => <Message key={i} message={m} />)
            }
        </div>
    );
};

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
    return (
        <div>
            <img src={message.photo ?? userIcon} alt={message.userName} style={{width: '30px'}}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    );
};

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        if (!message) return
        ws.send(message)
        setMessage('')
    }

    return (
        <>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </>
    );
};


export default ChatPage;