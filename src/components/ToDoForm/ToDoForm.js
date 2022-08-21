import React, { useState } from "react"


export default function ToDoForm({todoList, setTodoList, setSearchRes}){

    const [value, setValue] = useState('')
    

    const saveTodo = (e) => {
        e.preventDefault()
        const newTodoList = [...todoList, {
            id: Math.floor(Math.random()*1000),
            body: value,
            status: true
        }]
        setTodoList(newTodoList)
        setValue('')
    }

    const searchForTodo = (e)=>{
        e.preventDefault()
        const queryTodo = new RegExp(value)
        const foundTodo = todoList.filter(item => {
            if(queryTodo.test(item.body)){
                return item
            }
        })
        setSearchRes(foundTodo)
        
    }


    return (
        <form className="todo-add-form">
            <input className="todo-input" placeholder="Type your task"  type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button className="todo-btn" onClick={(event)=>saveTodo(event)}>Save!</button>
            <button className="todo-btn-search" onClick={(e)=>searchForTodo(e)}>Search</button>
        </form>

    )
}