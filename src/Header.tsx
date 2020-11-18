import React, {useState} from 'react';

interface HeaderText {
    name: string;
    id: number;
  }

export default function Header(props:HeaderText){
   let  [count,setCount] = useState(0)
    const handleClick = async() => {
await setCount(count + 1);
    }
 return(
     <div>
         <h1> {props.name}</h1>
         <h1> {props.id}</h1>
         <h1>{count}</h1>
         <button onClick={handleClick}> Click Me</button>
     </div>
 ) 
}