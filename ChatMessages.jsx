import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";

export const ChatMessages = ({ chatMessages, onAddChat }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddChat(value);

    setValue("");
  };

  return (
    <div className="d-grid gap-2">
      <h3>List of chats</h3>
      <ul>
        {chatMessages.map((chat) => (
          <>
            <li>
              <NavLink to={`/chats/${chat.id}`}>{chat.name}</NavLink>
            </li>

            <Button variant="warning" onClick={() => {}}>
              delete
            </Button>
          </>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            aria-describedby="basic-addon2"
            value={value}
            onChange={handleChange}
          />
          <Button variant="danger" id="button-addon2" size="lg">
            Add chat
          </Button>
        </InputGroup>
      </form>
    </div>
  );
};
