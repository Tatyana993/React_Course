import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Chats from "./components/Chats/Chats";
import { Home } from "./components/Home/Home";

export const App = () => (
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/chats">Chats</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<Chats />} />
    </Routes>
  </BrowserRouter>
);
