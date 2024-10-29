import React, { useState } from 'react'
import { useTodo } from '../CreateContext/TodoContext'

function TodoItems({ todo }) {
  const [IsEditableTodo, setIsEditableTodo] = useState(false)
  const [todoText, settodoText] = useState(todo.todoMsg)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }
  const editabletodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoText })
    setIsEditableTodo(false)
  }
  return (
    <div className={`TodosItmes w-full bg-[#CCBED7] shadow rounded-md px-2 py-1 duration-200 ${todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
      <div className={`items flex w-full justify-between items-center`}>
        <input type="checkbox"
          className='w-[20px] h-[20px]'
          checked={todo.complete}
          onChange={toggleCompleted}
        />
        <input
          className={`w-3/4 bg-transparent font-bold outline-none p-1.5 rounded-xl border-black cursor-auto ${IsEditableTodo ? "border-2" : "border-0"} ${todo.complete ? "line-through" : ""}`}
          type="text"
          value={todoText}
          onChange={(e) => settodoText(e.target.value)}
          readOnly={!IsEditableTodo}
        />
        <div className="update_portions flex gap-3">
          <button
            className='bg-white p-2 rounded-lg hover:bg-slate-100 duration-200'
            onClick={() => {
              if (todo.complete) return

              if (IsEditableTodo) {
                editabletodo()
              } else {
                setIsEditableTodo((prev) => !prev)
              }
            }
            }
            disabled={todo.complete}
          >
            {
              IsEditableTodo ? "📁" : "✏️"}
          </button>

          <button className='bg-white p-2 rounded-lg hover:bg-slate-100 duration-200'
            onClick={() => deleteTodo(todo.id)}
          >❌</button>
        </div>
      </div>
    </div >
  )
}

export default TodoItems