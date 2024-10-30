import { useEffect, useState } from "react"
import { ContextProvider } from "./context/Access"
import UserForm from "./Component/UserForm"
import TodoItems from "./Component/TodoItems"

function App() {
  const [AllTodos, seAllTodos] = useState([])

  const AddTodo = (text) => {
    seAllTodos((previousTodos) => [{ id: Math.floor(Math.random() * 20000), ...text }, ...previousTodos])
  }

  const UpdateTodo = (text, id) => {
    seAllTodos((previousTodos) => previousTodos.map((eachtodo) => eachtodo.id === id ? { ...text } : eachtodo))

  }

  const Delete = (id) => {
    seAllTodos((previousTodos) => previousTodos.filter((eachtodo) => eachtodo.id !== id))
  }

  const TodoComplete = (id) => {
    seAllTodos((previousTodos) => previousTodos.map((eachtodo) => eachtodo.id === id ? { ...eachtodo, complete: !eachtodo.complete } : eachtodo))
  }

  useEffect(() => {
    const AllTodos = JSON.parse(localStorage.getItem("AllTodos"))
    if (AllTodos && AllTodos.length > 0) {
      seAllTodos(AllTodos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("AllTodos", JSON.stringify(AllTodos))
  }, [AllTodos])

  return (
    <ContextProvider value={{
      AllTodos, AddTodo, UpdateTodo, Delete, TodoComplete
    }}>
      <div className='container min-w-full min-h-screen bg-[#3B1E54] flex justify-center'>
        <div className="subContainer w-full m-2 md:w-3/4 xl:w-3/6 mt-16 flex flex-col gap-5 h-fit p-5 rounded-lg shadow-2xl">
          <div className="heading">
            <h1 className='text-center text-white uppercase text-3xl tracking-wider font-bold my-4'>Todo list App</h1>
          </div>
          <div>
            <UserForm />
          </div>
          <div className='flex flex-col gap-2'>
            {
              AllTodos.map((todo) =>
                <div className="w-full" key={todo.id}>
                  <TodoItems todo={todo} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </ContextProvider >
  )
}

export default App
