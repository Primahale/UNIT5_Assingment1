// import logo from './logo.svg';
import './App.css';


function App() {
  const skills = [
            {name:"Android",style:"disk"},
            {name:"Blackberry",style:"disk"},
            {name:"iphone",style:"disk"},
            {name:"Windows Phone",style:"disk"}
          ];
  const mobile = [
            {name:"Samsang",style:"square"},
            {name:"HTC",style:"square"},
            {name:"micromax",style:"disk"},
            {name:"Apple",style:"circle"}
          ];
  return (
   <div className="App">
    <h1>Mobile Operating System</h1>
    <ul>
       {skills.map((el)=>{
        return <li className={el.style}>{el.name}</li>
       })}
    </ul>

     <h1>Mobile Manufacturers</h1>
     <ul>
       {
         mobile.map((el)=>{
           return <li className={el.style}>{el.name}</li>
         })
       }
     </ul>
   </div>
  )
  
}

export default App;
