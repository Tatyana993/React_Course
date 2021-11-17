import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ChatMessages } from "./components/ChatMessages";
import Chats from "./components/Chats/Chats";
import { Home } from "./components/Home/Home";
import { store } from "./store";
import { Provider } from "react-redux";
import { Profile } from "./components/Profile/Profile";

export const App = () => (
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
          <Route path=":chatId" element={<Chats />} />
          <Route index element={<ChatMessages />} />
        </Route>
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
