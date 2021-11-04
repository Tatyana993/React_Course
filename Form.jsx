import React, {useState} from "react";

export const Form = ({sendMessages}) => {
  const[value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    
  }


const handleSubmit = (e) => {
    e.preventDefault();
    sendMessages({
      text:value,
      author:'human'
    });
    setValue('')
  
  }


  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange}/>
      <button>Отправить</button>
   </form>
     
  )
}
