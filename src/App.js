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
    const [todoItems, setTodoItems] = useState(TODO_ITEMS);
    const [hideInput, setHideInput] = useState(true);
    const [inputValue, setInputValue] = useState('');

    const addTodoItem = (title) => {
        const newList = [...todoItems, new TodoItem(title, false)];
        setTodoItems(newList);
        setInputValue('');
    };

    const addItemButton = () => {
        if (inputValue.length > 0) {
            addTodoItem(inputValue);
        }
        setHideInput(!hideInput);
    }

    return (
        <div>
            <div className='flex flex-row justify-center'>
                <div className="flex flex-col gap-1 max-w-md">
                    {todoItems.map((item, i) => {
                        return <TodoComponent title={item.title} isCompleted={item.completed}/>
                    })}
                    <input 
                        className="border-2 pt-4 pb-4"
                        type="text"
                        hidden={hideInput}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}>
                    </input>
                    <div class="flex flex-row justify-end">
                        <button className="pl-4 pt-2 pb-2 pr-4 rounded-none bg-green-200 max-w-xs border-2" onClick={addItemButton}>Add</button>
                    </div>
                </div>
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
