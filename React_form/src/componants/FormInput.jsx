import {useState} from "react";

export const FormInput = ({getData})=>{
    const [text, setText] = useState([{
        Name : "",
        Age: "",
        Address: "",
        Department : "",
        Salary: "",
    }]);

    // const handlechange=(e)=>{
    //     console.log(e.target.value);
        // if(e.target.id === "Name"){
        //     setText({
        //         ...text,
        //         Name:e.target.value,
        //     });
        // }

        // if(e.target.id === "Age"){
        //     setText({
        //         ...text,
        //         Age:e.target.value,
        //     });
        // }

        // if(e.target.id === "Address"){
        //     setText({
        //         ...text,
        //         Address:e.target.value,
        //     });
        // }
        // if(e.target.id === "Department"){
        //     setText({
        //         ...text,
        //         Department:e.target.value,
        //     });
        // }

        // if(e.target.id === "Salary"){
        //     setText({
        //         ...text,
        //         Salary:e.target.value,
        //     });
        // }
    // }

    return (
    <div>
        <input onChange = {(e)=>setText(e.target.value)}
        //  value={text.Name} 
         type="text" placeholder = "Enter Name"
          id="Name"
         />
        <input onChange = {(e)=>setText(e.target.value)} 
        // value={text.Age} 
        type="Number" placeholder = "Enter Age" 
        id="Age"
        />
        <input onChange = {(e)=>setText(e.target.value)}
        //  value={text.Address} 
         type="text" placeholder = "Enter Address"
         id="Address"
         />
        <select onChange = {(e)=>setText(e.target.value)}
        // value={text.Department}
        >
            <option>Department</option>
            <option>Hr Department</option>
            <option>Sales Department</option>
            <option>Testing</option>
            <option>Devlopment</option>
        </select>
        <input onChange = {(e)=>setText(e.target.value)}
        // value={text.Salary} 
        type="Number" placeholder = "Enter Salary" 
        id="Salary"
        />
        <button onClick={()=>{
            getData(text)
        }}>Submit</button>
    </div>
    );
}