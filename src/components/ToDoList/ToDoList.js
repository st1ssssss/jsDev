import React, { useState } from "react"
import EditTodo from "../editTodo.js/editTodo"

export default function ToDoList({todoList, setTodoList, setReadStatus}){

    const [edit, setEdit] = useState(null)

    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        setTodoList(newTodo)
    }

    const changeTodoStatus = (id) => {
        const newTodo = [...todoList].filter(item=>{
            if(item.id === id){
                item.status = !item.status
                            
            }
            return item
        })

        setTodoList(newTodo)
        if(checkStatus(id)) {

            document.getElementById(`${id}`).classList.add('todo-finished')
        }else{
            document.getElementById(`${id}`).classList.remove('todo-finished')
        }
        
    }

    const checkStatus = (id) => {
       const neeadedItem = todoList.find(item=>item.id === id)

       if(neeadedItem.status === false) return true
    }

    const readFullToDo = (todoText)=>{
        setReadStatus(todoText)
    }

    return (
           
        <div className="todo-list">
             
            {todoList.map(item=>(
                
                <div className="todo-item" key={item.id} >
                    {edit === item.id? <EditTodo todo={todoList} setTodo={setTodoList} id={item.id} setEdit={setEdit} valueBody={item.body}/> : 
                    
                    <div className="todo-body"><input className="todo-input" onClick={()=>changeTodoStatus(item.id)}  type='checkbox'/><span  onClick={()=> readFullToDo(item.body)}className="todo-body-text" id={item.id}>{item.body}</span></div>
                    }
                    
                    <div className="todo-btns"><button className="todo-btn" onClick={()=>deleteTodo(item.id)}>Delete</button>
                    <button className="todo-btn" onClick={()=>setEdit(item.id)}>Edit</button></div>
                    
                    
                </div>
                
            ))}
        </div>
        

    )
}