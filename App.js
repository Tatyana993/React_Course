import "./App.css";
import { Form } from "./components/Form";
import { MessageList } from "./components/MessageList";
import { useState, useEffect, useCallback } from "react";
import { AUTHOR } from "./utils/constants";
import { ChatMessages } from "./components/ChatMessages";

const userMessages = [
  {
    text: "text1",
    author: AUTHOR.human,
  },
];

function App() {
  const [messages, setMessages] = useState(userMessages);

  const sendMessages = useCallback((newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, []);

  useEffect(() => {
    if (
      messages.length &&
      messages[messages.length - 1].author !== AUTHOR.bot
    ) {
      const timer = setTimeout(
        () =>
          sendMessages({
            author: AUTHOR.bot,
            text: "I am a bot",
            id: `mes-${Date.now()}`,
          }),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [messages]);

  return (
    <div className="App">
      <div>
        <MessageList messages={messages} />
        <Form sendMessages={sendMessages} />
        <ChatMessages />
      </div>
    </div>
  );
}

export default App;
