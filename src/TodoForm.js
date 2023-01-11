import React from 'react';
import { TextField, Paper } from '@mui/material'
import useInputState from './hooks/useInputState'

function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("")
    return (
        <Paper>
            <form onSubmit={e => { e.preventDefault(); addTodo(value); reset() }}>
                <TextField value={value} onChange={handleChange} />

            </form>
        </Paper>

    )
}

export default TodoForm