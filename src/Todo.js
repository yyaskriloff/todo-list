import React from 'react';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';


function Todo({ id, task, completed, removeTodo, toggleTodo }) {
    return (
        <ListItem  >
            <Checkbox tabIndex={-1} checked={completed} onClick={() => { toggleTodo(id) }} />
            <ListItemText style={{ textDecoration: (completed ? "line-through" : "none") }}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={() => { removeTodo(id) }}>
                    <Delete aria-label="Delete" />
                </IconButton>
                <IconButton>
                    <Edit aria-label="Edit" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem >
    )
}

export default Todo