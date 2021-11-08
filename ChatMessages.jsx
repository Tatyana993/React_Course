import React from "react";

import Button from 'react-bootstrap/Button';
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";

const chatMessseng = {
    name: "Ivan",
    id: Date.now(),
  };

export const ChatMessages = () => {
  

const popover = (
  <Popover id="popover-basic" >
    <Popover.Header as="h3">{chatMessseng.name}</Popover.Header>
    <Popover.Body>
    {chatMessseng.id}
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <div className="d-grid gap-2">
    <Button variant="success" >Chat1</Button>
    <Button variant="warning" >Chat2</Button>
    <Button variant="secondary" >Chat3</Button>
     </div>
  </OverlayTrigger>
);

return(<Example />
      
  );
}
