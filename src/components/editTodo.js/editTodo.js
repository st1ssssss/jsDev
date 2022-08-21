import React, {useState} from "react";

export default function EditTodo({todo, setTodo, id, setEdit, valueBody}){

    const [value, setValue] = useState(valueBody)

    const saveTodo = (e) => {
        e.preventDefault()
        const newTodo = [...todo].filter(item => {
            if(item.id === id){
                item.body = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <form className="todo-edit-form">
            <input className="todo-input"  type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button className="todo-btn" onClick={(e)=>saveTodo(e)}>Save</button>
        </form>
    )
}