import React, { useState } from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import TodoList from './TodoList.js';
function TodoApp() {
    const initTodos = [
        { id: 1, task: "Clean Fishtank", completed: false },
        { id: 2, task: "Wash Car", completed: false },
        { id: 3, task: "Grow Beard", completed: false }
    ]
    const [todos, setTodos] = useState(initTodos)
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
            <TodoList todos={todos} />
        </Paper >
    )
}

export default TodoApp