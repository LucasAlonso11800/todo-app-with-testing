import React, { useState } from "react";
import "./App.css";

export default function App() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");

    const handleChange = (e) => setText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.length) return;

        const newItem = {
            text,
            id: Date.now(),
            completed: false
        };

        setText("");
        setItems(items.concat(newItem));
    };

    const handleRemove = (item) => setItems(items.filter(i => i.id !== item.id));
    const handleClickOnComplete = (item) => {
        if (item.completed) setItems([{ ...item, completed: false }].concat(items.filter(i => i.id !== item.id)));
        if (!item.completed) setItems(items.filter(i => i.id !== item.id).concat({ ...item, completed: true }))
    };

    return (
        <div >
            <h1 className="title">TODOS</h1>

            <ul className="todo-list">
                {items.map((item) => (
                    <li className={`todo ${item.completed ? 'completed' : 'toComplete'}`} key={item.id}>{item.text}
                        <span onClick={() => handleClickOnComplete(item)}>{item.completed ? 'O' : 'X'}</span>
                        <span onClick={() => handleRemove(item)}><button>Remove</button></span>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <label htmlFor="new-todo">What needs to be done?</label>
                <br />
                <input id="new-todo" value={text} onChange={handleChange} />
                <button disabled={text === ''}>Add #{items.length + 1}</button>
            </form>
        </div>
    );
};

