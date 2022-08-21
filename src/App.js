import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ToDoList from './components/ToDoList/ToDoList';
import TodoReader from './components/TodoReader/TodoReader';
import ToDoForm from './components/ToDoForm/ToDoForm';

function App() {
    const [readStatus, setReadStatus] = useState(null)
    const [todoList, setTodoList] = useState([])
    const [searchRes, setSearchRes] = useState(null)


    return ( 
    <div className = "App" >
        <Header/>
        <div className='todo-container'>
        <div className="todo-div">
            
            <ToDoForm setSearchRes={setSearchRes} todoList={todoList} setTodoList={setTodoList}/>
            <ToDoList setReadStatus={setReadStatus} todoList={todoList} setTodoList={setTodoList}/>
        

    </div>
    <div className='todo-read'>
        {readStatus||searchRes?<TodoReader searchRes={searchRes} setSearchRes={setSearchRes} setReadStatus={setReadStatus} readStatus={readStatus}/>:<span>Click on your todo to open it full!</span>}
        
    </div>
        </div>
        


    </div>
    );
}

export default App;