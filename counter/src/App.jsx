import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0);

  const handlechange = (value)=>{
    setCounter(counter+value);
  }
  if(counter%2 === 0){
    document.body.style.color =  "green";
  }
  else{
    document.body.style.color =  "red";
  }
  return (
    <div className="App">
      <p className='count'>Counter:{counter}</p>
      <button className="btn" onClick={() =>handlechange(1)}>+</button>
      <button onClick={() =>{
        if(counter<=0)
        return;
        handlechange(-1)}}>-</button>
      <button onClick={() =>{
        handlechange(counter*1)
      }}>double</button>
    </div>
  );
}

export default App;
