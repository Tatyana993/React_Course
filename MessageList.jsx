import React from "react";

export const MessageList = ({ message }) => {
  return (
    <div>
      {message.map((mes) => (
        <div key={mes.id}>
          <span>{mes.author}</span>: <span>{mes.text}</span>
        </div>
      ))}
    </div>
  );
};
