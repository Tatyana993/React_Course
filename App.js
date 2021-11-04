import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message/Message.jsx";
import { Form } from "./components/Form";
import { MessageList } from "./components/MessageList";
import { useState, useEffect, useCallback } from "react";

let message = "Hello, my first project";

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Message text={message} />
        </p>
        <div>
          <Form SendMessage={sendMessages} />
          <MessageList messages={messages} />
        </div>
      </header>
    </div>
  );
}

export default App;
