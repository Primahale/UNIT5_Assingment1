// import logo from './logo.svg';
import './App.css';

function App() {
  const nav = ["Service","Project","About"];
  return (
    <div className="App">
     <div className="container">
       <div className="left"><p>LOGOBAKERY</p></div>
       <div className="center">
         <div className="navset">{nav.map((el)=>{
           return <p>{el}</p>
         })}</div>
       </div>
       <div className="right">
         <button>Contact</button>
       </div>
     </div>
    </div>
  );
}

export default App;
