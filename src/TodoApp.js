import React, { useState, useEffect } from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import useTodoState from './hooks/useTodoState.js';
import { v4 } from 'uuid'


function TodoApp() {
    const initTodos = JSON.parse(window.localStorage.getItem("todos") || JSON.stringify([{ id: v4(), task: "Start todo list.", completed: false }]))
    const { todos, addTodo, removeTodo, editTodo, toggleTodo } = useTodoState(initTodos)

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

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