import { Form } from "../Form";
import { MessageList } from "../MessageList";
import { AUTHOR } from "../../utils/constants";
import { ChatMessages } from "../ChatMessages";
import { useCallback, useEffect, useState } from "react";
import "./Chats.css";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router";

function Chats({ chatMessages, message, setMessage, onAddChat }) {
  const { chatId } = useParams();
  const sendMessages = useCallback(
    (newMessage) => {
      setMessage((prevMessages) => ({
        ...prevMessages,
        [chatId]: [...prevMessages[chatId], newMessage],
      }));
    },
    [chatId]
  );

  useEffect(() => {
    if (
      message[chatId]?.length &&
      message[chatId]?.[message[chatId]?.length - 1].author !== AUTHOR.bot
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
  }, [message]);
  if (!message[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="App">
      <div>
        <ChatMessages chatMessages={chatMessages} onAddChat={onAddChat} />
        <MessageList message={message[chatId]} />
        <Form sendMessages={sendMessages} />
      </div>
    </div>
  );
}

export default Chats;
