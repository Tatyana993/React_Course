import React, {useState} from "react";

export const Form = ({}) => {
  const[value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  
  }



const handleSubmit = (e) => {
    e.preventDefault();
  
  }


  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange}/>
      <button>Отправить</button>
      <p></p>
   </form>
     
  )
}