import "./App.css"
import { AddStudent } from "./componants/AddStudent";
import { ShowStudents } from "./componants/ShowStudents";
import {useEffect, useState} from "react"

function App() {
  const [std, setStd] = useState([]);
  useEffect(()=>{
    fetch(" http://localhost:8080/students")
    .then((d) => d.json())
    .then((data) => {
      setStd(data)
    })
  },[])

  return (
    <div className="App">
     
      <button className="togglebtn">Add A new Student</button>
      <ShowStudents />
     
      
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */
        std.map((std)=>(
          <div>{std.first_name}</div>
        
        ))
      }
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {/* <AddStudent /> */}
      
    </div>
  );
}

export default App;