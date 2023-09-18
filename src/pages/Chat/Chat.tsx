import {
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  Paper,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { color, styled } from "@mui/system";
import React, { useState } from "react";

const MessageBubble = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  margin: theme.spacing(1, 0),
  maxWidth: "80%",
  wordWrap: "break-word",
}));

interface Message {
  id: number;
  text: string;
  sender: boolean;
}

interface ChatPartner {
  id: number;
  name: string;
  messages: Message[];
}

const Chat: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [currentPartner, setCurrentPartner] = useState<number>(0);
  const [chatPartners, setChatPartners] = useState<ChatPartner[]>([
    {
      id: 0,
      name: "Martina",
      messages: [
        {
          id: 0,
          text: "Hallo, kann ich mit dir nach Dresden fahren",
          sender: false,
        },
        {
          id: 1,
          text: "Hallo! klar, was möchtest du noch mitnehmen?",
          sender: true,
        },
      ],
    },
    {
      id: 1,
      name: "Axel",
      messages: [
        {
          id: 0,
          text: "Wie geht es dir heute?",
          sender: false,
        },
      ],
    },
  ]);

  const handleMessageSend = () => {
    const newMessage: Message = {
      id: chatPartners[currentPartner].messages.length,
      text: input,
      sender: true,
    };
    const updatedPartners = [...chatPartners];
    updatedPartners[currentPartner].messages.push(newMessage);
    setChatPartners(updatedPartners);
    setInput("");
  };

  return (
    <Container maxWidth="sm">
      <h1>Chat</h1>
      <Select
        value={currentPartner}
        onChange={(e) => setCurrentPartner(e.target.value as number)}
        fullWidth>
        {chatPartners.map((partner) => (
          <MenuItem key={partner.id} value={partner.id}>
            {partner.name}
          </MenuItem>
        ))}
      </Select>
      <List>
        {chatPartners[currentPartner].messages.map((message) => (
          <ListItem key={message.id} style={{ padding: 0 }}>
            <div
              style={{
                display: "flex",
                justifyContent: message.sender ? "flex-end" : "flex-start",
                width: "100%",
              }}>
              <MessageBubble
                elevation={3}
                style={{
                  color: message.sender ? "white" : "black",
                  backgroundColor: message.sender ? "green" : "white",
                }}>
                <ListItemText primary={message.text} />
              </MessageBubble>
            </div>
          </ListItem>
        ))}
      </List>
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant="outlined"
        label="Nachricht"
        fullWidth
      />
      <Button
        onClick={handleMessageSend}
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}>
        Senden
      </Button>
    </Container>
  );
};

export default Chat;
