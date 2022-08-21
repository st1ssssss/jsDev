import React from "react";

export default function TodoReader({readStatus, setReadStatus, searchRes, setSearchRes}){


    return(
        
        <div>
           { readStatus?
           <div>
            <span className="todo-reader">
            {readStatus}
        </span>
        <button onClick={()=>setReadStatus(null)} className="todo-btn">Close</button>
        </div>
        :<div></div>}
        {searchRes.length? 
        <div className="todo-search-results">
            
            {
            searchRes.map(item=>{
                return <span key={item.id} className="todo-reader">{item.body}</span>
            })
            }
        
        <button onClick={()=>setSearchRes(null)} className="todo-btn">Close</button>
        </div>
        :<div>You don't have any appropriate tasks </div>}
        </div>
    )
}