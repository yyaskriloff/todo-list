import React from 'react';
import { Paper, List, Divider } from '@mui/material';
import Todo from './Todo'

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    <>
                        <Todo
                            task={todo.task}
                            id={todo.id}
                            key={todo.id}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                        {i < todos.length - 1 && <Divider />}
                    </>

                ))}
            </List>
        </Paper>
    )
}

export default TodoList