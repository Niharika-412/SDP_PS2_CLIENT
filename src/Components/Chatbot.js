import React, { useState } from 'react';
import { IconButton, TextField, Paper } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send'; // Import Send icon
import PersonIcon from '@mui/icons-material/Person';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [chatOpen, setChatOpen] = useState(false); // State to toggle chat visibility

    const handleSend = () => {
        if (input.trim()) {
            const newMessages = [...messages, { text: input, sender: 'user' }];
            // Simulated response
            const botResponse = getBotResponse(input);
            newMessages.push({ text: botResponse, sender: 'bot' });
            setMessages(newMessages);
            setInput('');
        }
    };

    const getBotResponse = (input) => {
        const responses = {
            hi: "Hello! How can I assist you?",
        "how are you": "I'm just a program, but I'm here to help!",
        "fine": "Great to hear! What can I assist you with?",
        "what is your name": "i am friendly AI",
        "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
        "what is the weather like": "I can't check the weather, but I can help with other questions!",
        "what can you do": "I can answer questions, provide information, and assist you with various tasks!",
        "help": "Sure! What do you need help with?",
        "goodbye": "Goodbye! Have a great day!",
        "thank you": "You're welcome! I'm always here to assist you.",
        "how can I get started": "Just ask me a question, and I'll do my best to assist you.",
        "who created you": "I was created by a team of developers to assist with various tasks!",
        "what is your purpose": "My purpose is to assist you with information and tasks. How can I help?",
        "what is 2 + 2": "2 + 2 equals 4!",
        "tell me a story": "Once upon a time, there was a chatbot who loved to help people...",
        "how old are you": "I don't have an age, but I'm always ready to assist!",
        "can you play music": "I can't play music, but I can suggest some great tunes if you'd like!",
        "what is the time": "I don't have access to the current time, but you can check it on your device.",
        "do you have any hobbies": "I don't have hobbies, but I do enjoy assisting people like you!",
        // Add more custom responses as needed
        };
        return responses[input.toLowerCase()] || "I'm sorry, I didn't understand that.";
    };

    const handleChatToggle = () => {
        if (chatOpen) {
            // Clear the chat messages when closing the chatbot
            setMessages([]);
        }
        setChatOpen(!chatOpen);
    };

    return (
        <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
            {/* Chat Icon to toggle chat visibility */}
            <IconButton 
                onClick={handleChatToggle} 
                style={{ backgroundColor: 'green', borderRadius: '50%' }}
            >
                <PersonIcon style={{ color: 'white' }} />
            </IconButton>
            
            {chatOpen && (  // Show the chat box only if chatOpen is true
                <Paper elevation={3} style={{ padding: '10px', borderRadius: '20px', width: '300px' }}>
                    <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '10px' }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                                <p style={{ margin: '5px', padding: '10px', borderRadius: '5px', backgroundColor: msg.sender === 'user' ? '#e1f5fe' : '#fff' }}>
                                    {msg.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            variant="outlined"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            style={{ width: '80%' }}
                        />
                        <IconButton onClick={handleSend}>
                            <SendIcon style={{ color: 'green' }} /> {/* Send icon */}
                        </IconButton>
                        <IconButton onClick={handleSend}>
                            <MicIcon style={{ color: 'green' }} />
                        </IconButton>
                    </div>
                </Paper>
            )}
        </div>
    );
};

export default Chatbot;
