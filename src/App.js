import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

class TodoItem {
    title;
    completed;

    constructor(title, completed) {
        this.title = title;
        this.completed = completed;
    }
}

const TODO_ITEMS = [
    new TodoItem('Learn React', false),
    new TodoItem('Learn JS', true),
    new TodoItem('Learn TailWind', false)
]


function TodoComponent({title, isCompleted, onClick}) {
    console.log(`TodoComponent: ${title} ${isCompleted}`);
    return (
        <div className="flex justify-center items-center">
            <input type="checkbox" className="w-8 h-8 border border-gray-400 rounded-md" 
                checked={isCompleted ? "checked" : ""} 
                onClick={onClick}
            >
            </input>
            <span className="ml-4">{title}</span>
        </div>
    );
}

function TodoListComponent() {
    const [todoItems, setTodoItems] = useState(TODO_ITEMS);

    function clickHandler(i) {
        const newItems = [...todoItems];
        newItems[i].completed = !newItems[i].completed;
        setTodoItems(newItems);
    }

    return (
        <div className="flex-1 left-0">
            {todoItems.map((item, i) => {
                return <TodoComponent title={item.title} isCompleted={item.completed} onClick={() => clickHandler(i)}/>
            })}
        </div>
    );
}

export default function App() {

    return (
      <>
      <div className="text-3xl text-center">
        TODO LIST
      </div>
        <TodoListComponent/>
      </>
  )
}
