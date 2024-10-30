import { createContext, useContext } from "react";


export const ContextTodo = createContext({
    AllTodos: [
        {
            id: 1,
            todoText: "User Text",
            complete: false
        }
    ],
    AddTodo: (text) => { },
    UpdateTodo: (text, id) => { },
    Delete: (id) => { },
    TodoComplete: (id) => { },
})
export function useTodo() {
    return useContext(ContextTodo)
}
export const ContextProvider = ContextTodo.Provider