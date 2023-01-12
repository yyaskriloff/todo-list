import React from 'react';
import { TextField } from '@mui/material'
import useInputState from './hooks/useInputState'

function EditTodoForm({ id, task, editTodo, toggle }) {
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            editTodo(id, value)
            reset()
            toggle()
        }}>
            <TextField
                value={value}
                onChange={handleChange}
                margin='normal'
                fullWidth
            >
            </TextField>
        </form >

    )
}

export default EditTodoForm