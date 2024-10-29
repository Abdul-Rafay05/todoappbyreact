import React from 'react'
import { useState } from 'react'
import { useTodo } from '../CreateContext/TodoContext'

function InputTodo() {
  const [todoMsg, settodoMsg] = useState("")
  const { addTodo } = useTodo()

  const AddTodo = (e) => {
    e.preventDefault();
    if (!todoMsg) return
    else {
      addTodo({ todoMsg: todoMsg, complete: false })
    }
    settodoMsg("");
  }

  return (
    <div className='rounded-lg'>
      <form onSubmit={AddTodo} className='flex'>
        <input type="text"
          placeholder='Enter Your Todos.....'
          className='w-full py-2 px-5 outline-none bg-[#455368] text-white rounded-l-lg'
          value={todoMsg}
          onChange={(e) => settodoMsg(e.target.value)}
        />
        <button type='submit' className='bg-[#16A34A] w-[100px] rounded-r-lg text-white'>Add</button>
      </form>
    </div>
  )
}

export default InputTodo