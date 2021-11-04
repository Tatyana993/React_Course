import "./App.css";
import { Form } from "./components/Form";
import { MessageList } from "./components/MessageList";
import { useState, useEffect, useCallback } from "react";

const userMessages = [
  {
    text: "text1",
    author: "Nick",
  },
];

function App() {
  const [messages, setMessages] = useState(userMessages);

  const sendMessages = useCallback((newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <MessageList messages={messages} />
          <Form sendMessages={sendMessages} />
        </div>
      </header>
    </div>
  );
}

export default App;
