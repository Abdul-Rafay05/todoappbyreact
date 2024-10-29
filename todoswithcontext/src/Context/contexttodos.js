import { createContext, useContext } from "react";

export const ContextTodo = createContext({
    todos: [{
        id: 1,
        todo: "msg",
        completed: false
    }
    ],
    addTodo: (todos) => { },
    updateTodo: (id, todos) => { },
    deleteTodo: (id) => { },
    completeToggleTodo: (id) => { },
});

export function useTodo() {
    return useContext(ContextTodo)
}
export const TodoProvider = ContextTodo.Provider