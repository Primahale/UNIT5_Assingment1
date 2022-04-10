   
import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 0,
    notebooks: 0,
    pens: 0,
  });
    // Create add and remove functions here that changes the

    const handlechange = (value,item)=>{
      if(inv[value] <=0 && item === -1){
        return
      }
      inv[value] = inv[value] + item;
        setInv({
          books: inv.books,
          notebooks: inv.notebooks,
          pens: inv.pens
        });
    }
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>handlechange("books",1)}>+</button>
        <span>{inv.books}</span>
        <button className="circlularButton" onClick={()=>handlechange("books",-1)}>-</button>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>handlechange("notebooks",1)}>+</button>
        <span>{inv.notebooks}</span>
        <button className="circlularButton" onClick={()=>handlechange("notebooks",-1)}>-</button>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>handlechange("pens",1)}>+</button>
        <span>{inv.pens}</span>
        <button className="circlularButton" onClick={()=>handlechange("pens",-1)}>-</button>
      </div>
     
            {/*calculate total and show it*/}

      total: {inv.books+inv.notebooks+inv.pens}
      
    </div>
  );
};
