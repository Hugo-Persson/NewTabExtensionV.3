import React from 'react'

export default function ToDoTask(props) {
    return props.tasks.map((task)=>(
        <div className="task">
            <span>{task.title}</span>
        </div>
    ))
}
