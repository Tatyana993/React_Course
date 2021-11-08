import React, {useRef, useState} from "react";
import { AUTHOR } from "../utils/constants";


import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


export const Form = ({sendMessages}) => {
  const[value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
    
  }

const handleSubmit = (e) => {
    e.preventDefault();
    sendMessages({
      text:value,
      author: AUTHOR.human,
      id: `mes-${Date.now()}`
    });

    inputRef.current?.autofocus();
    setValue('')
  
  }
  return(
<form onSubmit={handleSubmit}>
   <InputGroup className="mb-3">
    <FormControl
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value={value} onChange={handleChange}
      inputRef={inputRef}
    />
    <Button variant="secondary" id="button-addon2" type="submit" size="lg">
      SEND
    </Button>
  </InputGroup>
   </form>  
  )
}