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


function TodoComponent({title, isCompleted}) {
    const defaultStyle = "ml-4 mr-4 flex flex-col justify-center";
    const crossedStyle = `${defaultStyle} line-through`;
    const [checked, setChecked] = useState(isCompleted);
    const [style, setStyle] = useState(checked ? crossedStyle : defaultStyle);

    function clickHandler() {
        setChecked(!checked);
        // Don't understand why its' reversed now
        setStyle(checked ? defaultStyle : crossedStyle);
    }
    //console.log(`TodoComponent: ${title} ${isCompleted}`);
    return (
            <div className="flex flex-row gap-1 bg-gray-200 bg-opacity-70">
                    <input type="checkbox" 
                        className="mt-4 mb-4 ml-4 w-8 h-8"
                        checked={checked ? "checked" : ""} 
                        onClick={() => clickHandler()}
                    >
                    </input>
                    <span className={style}>{title}</span>
            </div>
    );
}

function TodoListComponent() {
    return (
        <div className='flex flex-row justify-center'>
            <div className="flex flex-col gap-1 max-w-md">
                {TODO_ITEMS.map((item, i) => {
                    return <TodoComponent title={item.title} isCompleted={item.completed}/>
                })}
            </div>
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
