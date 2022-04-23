import { useState } from "react"
import {FormInput } from "./FormInput";
import { FormItem } from "./formItem";

function Form (){
    const [formlist,setformList] = useState([]);
    const getData = (form)=>{
        setformList ([...formlist,form])
    }
    return(
        <div>
            <FormInput getData={getData} />
            {formlist.map((e)=>(
                <FormItem form={e}></FormItem>
            ))}
        </div>
    )
}
export {Form}