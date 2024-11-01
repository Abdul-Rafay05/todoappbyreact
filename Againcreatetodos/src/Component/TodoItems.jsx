
// import useTodo from '/Context/'
import React, { useState } from 'react'
import { useTodo } from "../context/TodoContext"

function TodoItems({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoText, setTodoText] = useState(todo.todo)
    // const [toggle, setToggle] = useState(todo.completed)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoText })
        // console.log(todo.id);
        setIsTodoEditable(false)
    }
    // console.log(todo.completed);

    return (
        <>
            <div
                className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
                <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={todo.toggleComplete}
                    onChange={toggleCompleted}
                />
                <input
                    type="text"
                    className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}
                    ${todo.completed ? "line-through" : ""}`}
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    readOnly={!isTodoEditable}
                />
                {/* Edit, Save Button */}
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                    onClick={() => {
                        if (todo.completed) return;
                        // console.log(todo);

                        if (isTodoEditable) {
                            editTodo();
                            // console.log(isTodoEditable);
                        } else setIsTodoEditable((prev) => !prev);
                    }}
                    disabled={todo.completed}
                >
                    {isTodoEditable ? "📁" : "✏️"}
                </button>
                {/* Delete Todo Button */}
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                    onClick={() => deleteTodo(todo.id)}
                >
                    ❌
                </button>
            </div>
        </>
    )
}

export default TodoItems