import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo , setTodo] = useState('');
    const {addTodo} = useTodo();
    const add = (e) =>{
        e.preventDefault();
        if(!todo) return;

        addTodo({todo , completed : false});
        setTodo("");
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Add Your Todos..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-3 text-3xl font-sans"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg font-sans text-3xl px-3 py-1 bg-green-600 text-white shrink-0">
                ADD
            </button>
        </form>
    );
}

export default TodoForm;


