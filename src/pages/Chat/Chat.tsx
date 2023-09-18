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
  FormControl,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";

const MessageBubble = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  margin: theme.spacing(1, 0),
  maxWidth: "80%",
  wordWrap: "break-word",
}));

const OfferBubble = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  margin: theme.spacing(1, 0),
  maxWidth: "80%",
  wordWrap: "break-word",
  backgroundColor: theme.palette.grey[200],
}));

interface Message {
  id: number;
  type: "text" | "offer";
  text: string;
  sender: boolean;
  offer?: RideOffer;
}

interface RideOffer {
  destination: string;
  seatsAvailable: number;
  departureTime: string;
}

interface ChatPartner {
  id: number;
  name: string;
  messages: Message[];
}

const Chat: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedOffer, setSelectedOffer] = useState<RideOffer | null>(null);

  const handleOfferSelection = (offer: RideOffer) => {
    setSelectedOffer(offer);
    handleClose();
  };

  const initialChatPartners: ChatPartner[] = [
    {
      id: 0,
      name: "Max Mustermann",
      messages: [
        {
          id: 0,
          text: "Hallo, ich suche eine Fahrt nach Berlin. Kannst du mich mitnehmen?",
          sender: true,
          type: "text",
        },
        {
          id: 1,
          text: "Klar, ich fahre morgen um 10 Uhr. Wie klingt das?",
          sender: false,
          type: "text",
        },
        {
          id: 2,
          text: "Das klingt gut! Das würde mir passen.",
          sender: true,
          type: "text",
        },
        {
          id: 3,
          text: "Angebot: Fahrt nach Berlin mit 3 verfügbaren Plätzen um 10:00 Uhr.",
          sender: true,
          type: "offer",
          offer: {
            destination: "Berlin",
            seatsAvailable: 3,
            departureTime: "10:00",
          },
        },
      ],
    },
    {
      id: 1,
      name: "Bastian Vidal",
      messages: [
        {
          id: 0,
          text: "Hey, ich suche eine Mitfahrgelegenheit nach München. Hast du noch Plätze frei?",
          sender: false,
          type: "text",
        },
        {
          id: 1,
          text: "Ja, ich habe 2 Plätze frei. Wann möchtest du fahren?",
          sender: true,
          type: "text",
        },
        {
          id: 2,
          text: "Wie wäre es morgen um 15 Uhr?",
          sender: false,
          type: "text",
        },
        {
          id: 3,
          text: "Angebot: Fahrt nach München mit 2 verfügbaren Plätzen um 15:00 Uhr.",
          sender: false,
          type: "offer",
          offer: {
            destination: "München",
            seatsAvailable: 2,
            departureTime: "15:00",
          },
        },
      ],
    },
  ];

  const [chatPartners, setChatPartners] =
    useState<ChatPartner[]>(initialChatPartners);
  const [currentPartner, setCurrentPartner] = useState<number>(
    initialChatPartners[0]?.id || -1
  );

  const handleMessageSend = () => {
    const newMessage: Message = {
      id:
        chatPartners.find((partner) => partner.id === currentPartner)?.messages
          .length || 0,
      text: input,
      sender: true,
      type: "text",
    };
    const updatedPartners = chatPartners.map((partner) => {
      if (partner.id === currentPartner) {
        return {
          ...partner,
          messages: [...partner.messages, newMessage],
        };
      }
      return partner;
    });
    setChatPartners(updatedPartners);
    setInput("");
  };

  return (
    <Container maxWidth="sm">
      <h1>Deine Unterhaltungen</h1>
      <FormControl fullWidth>
        <InputLabel>Chatpartner</InputLabel>
        <Select
          value={currentPartner}
          onChange={(e) => setCurrentPartner(e.target.value as number)}>
          {chatPartners.map((partner) => (
            <MenuItem key={partner.id} value={partner.id}>
              {partner.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <List>
        {chatPartners
          .find((partner) => partner.id === currentPartner)
          ?.messages.map((message) => (
            <ListItem key={message.id} style={{ padding: 0 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: message.sender ? "flex-end" : "flex-start",
                  width: "100%",
                }}>
                {message.type === "text" ? (
                  <MessageBubble
                    elevation={3}
                    style={{
                      color: message.sender ? "white" : "black",
                      backgroundColor: message.sender ? "green" : "white",
                    }}>
                    <ListItemText primary={message.text} />
                  </MessageBubble>
                ) : (
                  <OfferBubble elevation={3}>
                    <ListItemText
                      primary={`Angebot: Fahrt nach ${message.offer?.destination} mit ${message.offer?.seatsAvailable} verfügbaren Plätzen um ${message.offer?.departureTime}.`}
                    />
                    {!message.sender && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginTop: "10px",
                        }}>
                        <Button
                          variant="contained"
                          color="warning"
                          size="small"
                          style={{ marginRight: "5px" }}>
                          Ansicht
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          style={{ marginRight: "5px" }}>
                          Annehmen
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small">
                          Ablehnen
                        </Button>
                      </div>
                    )}
                  </OfferBubble>
                )}
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
        style={{ marginTop: "10px", marginRight: "10px" }}>
        Senden
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "10px" }}
        onClick={handleOpen}>
        Angebot Auswählen
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Angebote</DialogTitle>
        <DialogContent>
          {initialChatPartners.map((partner) =>
            partner.messages.map(
              (message) =>
                message.type === "offer" && (
                  <div key={message.id}>
                    {`Von: ${message.offer?.departureTime} Zu: ${message.offer?.destination}`}
                    <Button
                      variant="outlined"
                      size="small"
                      style={{ marginLeft: "10px" }}
                      onClick={() => handleOfferSelection(message.offer!)}>
                      Auswählen
                    </Button>
                  </div>
                )
            )
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Schließen
          </Button>
          <Button color="primary">Neues Angebot erstellen</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Chat;
