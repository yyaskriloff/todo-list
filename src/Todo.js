import React from 'react';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './editTodoForm';


function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState()
    const todoDisplay = (
        <>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => { toggleTodo(id) }} />
            <ListItemText style={{ textDecoration: (completed ? "line-through" : "none") }}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={() => { removeTodo(id) }}>
                    <Delete aria-label="Delete" />
                </IconButton>
                <IconButton>
                    <Edit aria-label="Edit" onClick={toggle} />
                </IconButton>
            </ListItemSecondaryAction>
        </>
    )

    const todoEdit = <EditTodoForm id={id} task={task} editTodo={editTodo} toggle={toggle} />
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? todoEdit : todoDisplay}
        </ListItem >
    )
}

export default Todo