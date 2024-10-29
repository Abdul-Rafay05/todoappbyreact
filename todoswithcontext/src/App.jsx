import { useEffect, useState } from "react"
import { TodoProvider } from "./Context"

function App() {
  const [Todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  const updateTodo = (id, todo) => {
    setTodos(
      (prev) => prev.map((eachele) => (eachele.id === id ? todo : eachele))
    )
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const completeToggleTodo = (id) => {
    setTodos((prev) => prev.map((prevtodo) => (prevtodo === id ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) setTodos(todos);
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos))
  }, [Todos])

  return (
    <TodoProvider value={{
      Todos, addTodo, updateTodo, deleteTodo, completeToggleTodo
    }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App