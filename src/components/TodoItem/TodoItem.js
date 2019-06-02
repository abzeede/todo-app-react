import React from 'react'
import { number, string, bool, func } from 'prop-types'
import './style.scss'

const TodoItem = ({ id, detail, done, onDelete, onToggleDone, onEdit }) => {
  const onChange = e => {
    onEdit(id, e.target.value)
  }

  return (
    <li className="todo-item">
      <span className="todo-item__checkbox">
        <input type="checkbox" onClick={() => onToggleDone(id)} checked={done} />
      </span>
      <input
        className={`todo-item__input ${done ? 'todo-item__input--done' : ''}`}
        onChange={onChange}
        value={detail}
      />
      <button className="todo-item__remove-btn" onClick={() => onDelete(id)}>
        <i className="fa fa-trash" />
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  id: number,
  detail: string,
  done: bool,
  onToggleDone: func,
  onDone: func,
  onEdit: func,
}

export default TodoItem
