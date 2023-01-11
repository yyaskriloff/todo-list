import React from 'react';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';


function Todo({ task, completed }) {
    return (
        <ListItem  >
            <Checkbox tabIndex={-1} checked={completed} />
            <ListItemText style={{ textDecoration: (completed ? "line-through" : "none") }}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
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