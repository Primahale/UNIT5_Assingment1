import React from "react"; 
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { addTodo, deleteTodo } from "../action";

export const Todo = ()=>{
    const [inputdata , setinputData] = useState("");
    const list = useSelector ((state)=>state.TodoReducers.list);
    const dispatch = useDispatch();
    return(
        <>
        <div className="main">
        <div className="child">
          <h1>Todo app</h1>
          <figure>
            <figcaption>Todo List</figcaption>
          </figure>
          <div className="addItems">
            <input style={{height:"33px",width:"200px"}}
              type="text"
              placeholder=" Add Items .."
              value={inputdata}
              onChange={(e) => setinputData(e.target.value)}
            />
           
            <button style={{marginLeft:"20px",height:"37px"}}
              className="add-btn"
              onClick={() => dispatch(addTodo(inputdata), setinputData(""))}
            >
              {" "}
              ADD TODO
            </button>
          </div>
          <div className="showItem">
            {list.map((el)=>{
              return(
                <div style={{width:"150px", margin:"auto"}}>
                <div style={{display:"flex"}} className="items" key={el.id}>
                  <h2 style={{marginRight:"20px"}}>{el.data}</h2>
                  <button style={{height:"30px", width:"110px",marginTop:"20px"}}
                   className="add-btn"
                    title="Delete item"
                    onClick={() =>
                      dispatch(deleteTodo(el.id))
                    } 
                  >delete</button>
                </div>
                </div>
              )
            })}
          </div>
         
        </div>
      </div>
    </>
    );
};


