import { useEffect, useState } from "react";
import { axios } from "axios";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const[data,setData] = useState([]);
      useEffect(()=>{
        axios.get("http://localhost:8080/employee").then(({data})=>{
          setData(data.data);
          
        });
      },[])
      console.log(data)
     
    return (
      <div className="list_container">
        {data.map((e,i)=>{
          return(
            <Link to={`/employees/${e.id}`}>
               <div className="employee_card" key={i}>
                <img className="employee_image" src={e.image} />
                <span className="employee_name">{e.employee_name}</span>
                <span className="employee_title">{e.title}</span>
                </div>
            </Link>
          )
        })}
        
        {/* On clicking this card anywhere, user goes to user details */}
      </div>
    );
  };