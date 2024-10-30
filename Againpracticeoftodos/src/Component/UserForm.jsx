import React, { useState } from 'react'
import { useTodo } from '../context/Contexttodo'


function UserForm() {
    const [UserText, setUserText] = useState("")
    const { AddTodo } = useTodo()

    const addTodo = (e) => {
        e.preventDefault()
        if (!UserText) return
        else {
            AddTodo({ todoText: UserText, complete: false })
        }
        setUserText("")
    }
    return (
        <div>
            <div onSubmit={addTodo} className='rounded-lg'>
                <form className='flex'>
                    <input type="text"
                        placeholder='Enter Your Todos.....'
                        className='w-full py-2 px-5 outline-none bg-[#455368] text-white rounded-l-lg'
                        value={UserText}
                        onChange={(e) => setUserText(e.target.value)}
                    />
                    <button type='submit' className='bg-[#16A34A] w-[100px] rounded-r-lg text-white'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default UserForm