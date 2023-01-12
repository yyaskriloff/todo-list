import React, { useState } from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import { v4 } from 'uuid'

function TodoApp() {
    const initTodos = [
        { id: 1, task: "Clean Fishtank", completed: false },
        { id: 2, task: "Wash Car", completed: true },
        { id: 3, task: "Grow Beard", completed: false }
    ]
    const [todos, setTodos] = useState(initTodos)
    const addTodo = newTodoText => {
        setTodos([...todos, { id: v4(), task: newTodoText, completed: false }])
    }
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos)
    }

    const toggleTodo = todoId => {
        const updatedTodo = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
        setTodos(updatedTodo)
    }
    const editTodo = (todoId, newTask) => {
        const updatedTodo = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo
        )
        setTodos(updatedTodo)
    }

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa",
            }}
            elevation={0}
        >
            <AppBar color="primary" position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">TODOS with hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper >
    )
}

export default TodoApp