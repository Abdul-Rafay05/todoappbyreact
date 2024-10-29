import { useEffect, useState } from 'react'
import InputTodo from './Component/InputTodo'
import TodoItems from './Component/TodoItems'
import { TodoProvider } from "./CreateContext/Index"

function App() {
  const [todos, setTodo] = useState([])
  const addTodo = (todo) => {
    setTodo((previous) => [{ id: Date.now(), ...todo }, ...previous])
  }
  const updateTodo = (id, todo) => {
    setTodo((previous) => previous.map((PreviousTodo) => (PreviousTodo.id === id ? todo : PreviousTodo)))
  }
  const deleteTodo = (id) => {
    setTodo((previous) => previous.filter((previousTodo) => previousTodo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodo((previous) => previous.map((eachTodo) => eachTodo.id === id ? { ...eachTodo, complete: !eachTodo.complete } : eachTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodo(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className='container min-w-full min-h-screen bg-[#3B1E54] flex justify-center'>
        <div className="subContainer w-full m-2 md:w-3/4 xl:w-3/6 mt-16 flex flex-col gap-5 h-fit p-5 rounded-lg shadow-2xl">
          <div className="heading">
            <h1 className='text-center text-white uppercase text-3xl tracking-wider font-bold my-4'>Todo list App</h1>
          </div>
          <div>
            <InputTodo />
          </div>
          <div className='flex flex-col gap-2'>
            {
              todos.map((todo) =>
                <div className='w-full' key={todo.id}>
                  <TodoItems todo={todo} />
                </div>)
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
