import React from "react";

import Button from "react-bootstrap/Button";
import { OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";

const chatMessseng = [
  { name: "chat1", id: "chat1" },
  { name: "chat2", id: "chat2" },
  { name: "chat3", id: "chat3" },
];

export const ChatMessages = () => {
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right">
      <div className="d-grid gap-2">
        {chatMessseng.map((chat) => (
          <Link to={`/chats/${chat.id}`}>
            {chat.name}
            <Button variant="success">Send</Button>
          </Link>
        ))}
      </div>
    </OverlayTrigger>
  );

  return <Example />;
};
