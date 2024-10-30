import React, { useState } from 'react'
import { useTodo } from '../context/Contexttodo'

function TodoItems({ todo }) {
    const [IsEditableTodo, setIsEditableTodo] = useState(false)
    const [todotext, settodotext] = useState(todo.todoText)
    // console.log(todo.id);
    const { UpdateTodo, Delete, TodoComplete } = useTodo()

    const edittodo = () => {
        UpdateTodo(todo.id, { ...todo, todo: todotext })
        // setIsEditableTodo(false)
    }
    const Togglecompleted = () => {
        TodoComplete(todo.id)
    }
    return (
        <div className={`TodosItmes w-full bg-[#CCBED7] shadow rounded-md px-2 py-1 duration-200 ${todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
            <div className={`items flex w-full justify-between items-center`}>
                <input type="checkbox"
                    className='w-[20px] h-[20px]'
                    checked={todo.complete}
                    onChange={Togglecompleted}
                />
                <input
                    className={`w-3/4 bg-transparent font-bold outline-none p-1.5 rounded-xl border-black cursor-auto 
                        ${IsEditableTodo ? "border-2" : "border-0"}
                        ${todo.complete ? "line-through" : ""}`}
                    type="text"
                    value={todotext}
                    onChange={(e) => settodotext(e.target.value)}
                    readOnly={!IsEditableTodo}
                />
                <div className="update_portions flex gap-3">
                    <button
                        className='bg-white p-2 rounded-lg hover:bg-slate-100 duration-200'
                        onClick={() => {
                            if (todo.complete) return
                            if (IsEditableTodo) {
                                edittodo()
                            } else {
                                setIsEditableTodo(((prev) => !prev))
                            }
                        }}
                        disabled={todo.complete}>
                        {
                            IsEditableTodo ? "📁" : "✏️"
                        }
                    </button>

                    <button className='bg-white p-2 rounded-lg hover:bg-slate-100 duration-200'
                        onClick={() => Delete(todo.id)}>❌</button>
                </div>
            </div>
        </div >
    )
}
// "📁" : "✏️"
export default TodoItems