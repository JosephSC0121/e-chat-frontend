import React, { useState } from 'react';

export default function ChatBot() {
    const [messages, setMessages] = useState<{ content: string, isUser: boolean }[]>([]);
    const [input, setInput] = useState<string>("");

//TODO: Isolate fetch data
    
    const handleSendMessage = async () => {
        if (input.trim()) {
            const newMessage = { content: input.trim(), isUser: true };
            setMessages([...messages, newMessage]);
            setInput("");

            try {
                const response = await fetch('http://127.0.0.1:8000/product/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question: newMessage.content }),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const botMessage = { content: data.response.content, isUser: false };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            } catch (error) {
                console.error('Error sending message:', error);
                const errorMessage = { content: 'Error enviando el mensaje', isUser: false };
                setMessages((prevMessages) => [...prevMessages, errorMessage]);
            }
        }
    };

    return (
        <div className="flex flex-col items-center h-screen bg-primary pt-20">
            <div className="w-full max-w-5xl flex flex-col h-full bg-primary mb-10">
                <div className="flex-grow p-6 overflow-auto">
                    <div className="flex flex-col space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded shadow text-white max-w-xs ${
                                    message.isUser
                                        ? 'bg-secondary self-end'
                                        : 'bg-secondary self-start'
                                }`}
                            >
                                {message.content}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-4 bg-primary border-t">
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-grow bg-primary p-2 border text-white rounded"
                            placeholder="Escribe tu mensaje..."
                        />
                        <button
                            onClick={handleSendMessage}
                            className="p-2 bg-primary text-white rounded"
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
