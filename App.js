import React, { useCallback, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ChatMessages } from "./components/ChatMessages";
import Chats from "./components/Chats/Chats";
import { Home } from "./components/Home/Home";
import { store } from "./store";
import { Provider } from "react-redux";
import { Profile } from "./components/Profile/Profile";
import { AUTHOR } from "./utils/constants";

const initialChatList = [
  {
    name: "chat1",
    id: "chat1",
  },
  {
    name: "chat2",
    id: "chat2",
  },
  {
    name: "chat3",
    id: "chat3",
  },
];

const initialMessages = {
  chat1: [
    {
      text: "text1",
      author: AUTHOR.human,
      id: "mes1",
    },
  ],
  chat2: [
    {
      text: "this is chat2",
      author: AUTHOR.human,
      id: "mes2",
    },
  ],
  chat3: [],
};

export const App = () => {
  const [chatMessages, setChatMessages] = useState(initialChatList);
  const [message, setMessage] = useState(initialMessages);

  const handleAddChat = useCallback((name) => {
    const newId = `chat${Date.now()}`;

    setChatMessages((prevChatMessages) => [
      ...prevChatMessages,
      { name, id: newId },
    ]);
    setMessage((prevMessage) => ({
      ...prevMessage,
      [newId]: [],
    }));
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chats">Chats</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route
              index
              element={
                <ChatMessages
                  chatMessages={chatMessages}
                  onAddChat={handleAddChat}
                />
              }
            />
            <Route
              path=":chatId"
              element={
                <Chats
                  chatMessages={chatMessages}
                  message={message}
                  setMessage={setMessage}
                  onAddChat={handleAddChat}
                />
              }
            />
          </Route>
          <Route path="*" element={<h3>404</h3>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
