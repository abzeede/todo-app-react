import React from 'react'
import { shape, arrayOf, string, bool, number, func } from 'prop-types'
import TodoItem from 'components/TodoItem'
import './style.scss'

const TodoItemList = ({ items, ...props }) => {
  return (
    <ol className="todo-item-list">
      {items.map(item => (
        <TodoItem key={item.id} {...props} {...item} />
      ))}
    </ol>
  )
}

TodoItemList.propTypes = {
  items: arrayOf(
    shape({
      id: number,
      detail: string,
      done: bool,
    }),
  ).isRequired,
  onDelete: func.isRequired,
  onToggleDone: func.isRequired,
  onEdit: func,
}

TodoItemList.defaultProps = {
  items: [],
  onEdit: () => {},
}

export default TodoItemList
