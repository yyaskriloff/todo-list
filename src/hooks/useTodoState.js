import { useState } from 'react'
import { v4 } from 'uuid'
// eslint-disable-next-line import/no-anonymous-default-export
export default initTodos => {
    const [todos, setTodos] = useState(initTodos)
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: v4(), task: newTodoText, completed: false }])
        },
        removeTodo: todoId => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId)
            setTodos(updatedTodos)
        },
        toggleTodo: todoId => {
            const updatedTodo = todos.map(todo =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
            setTodos(updatedTodo)
        },
        editTodo: (todoId, newTask) => {
            const updatedTodo = todos.map(todo =>
                todo.id === todoId ? { ...todo, task: newTask } : todo
            )
            setTodos(updatedTodo)
        }
    }
}