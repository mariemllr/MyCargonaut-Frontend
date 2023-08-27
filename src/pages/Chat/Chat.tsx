import {
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  Paper,
  Button,
} from '@mui/material';
import { color, styled } from '@mui/system';
import React, { useState } from 'react';

const MessageBubble = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  margin: theme.spacing(1, 0),
  maxWidth: '80%',
  wordWrap: 'break-word',
}));

interface Message {
  id: number;
  text: string;
  sender: boolean;
}

const Chat: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    // Beispieltext kann Entfernt werden sobald die Verbindung zum Backend steht
    {
      id: 0,
      text: 'Hallo, kann ich mit dir nach Dresden fahren',
      sender: false,
    },
    {
      id: 1,
      text: 'Hallo! klar, was möchtest du noch mitnehmen?',
      sender: true,
    },
    {
      id: 2,
      text: 'Super, ein Klavier, ein Hund, ein Fharrad ...',
      sender: false,
    },
  ]);

  const handleMessageSend = () => {
    const newMessage: Message = {
      id: messages.length,
      text: input,
      sender: true,
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <Container maxWidth='sm'>
      <h1>Chat</h1>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id} style={{ padding: 0 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: message.sender ? 'flex-end' : 'flex-start',
                width: '100%',
              }}
            >
              <MessageBubble
                elevation={3}
                style={{
                  color: message.sender ? 'white' : 'black',
                  backgroundColor: message.sender ? 'green' : 'white',
                }}
              >
                <ListItemText primary={message.text} />
              </MessageBubble>
            </div>
          </ListItem>
        ))}
      </List>
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant='outlined'
        label='Nachricht'
        fullWidth
      />
      <Button
        onClick={handleMessageSend}
        variant='contained'
        color='primary'
        style={{ marginTop: '10px' }}
      >
        Senden
      </Button>
    </Container>
  );
};

export default Chat;
