import React from 'react'
import TodoForm from 'components/TodoForm'
import TodoItemList from 'components/TodoItemList'
import ProgressBar from 'components/ProgressBar'
import './style.scss'

class App extends React.Component {
  state = {
    items: [],
  }

  generateUID = () => new Date().getTime()

  onCreateTodo = todo => {
    this.setState(state => ({
      items: [
        {
          id: this.generateUID(),
          detail: todo,
          done: false,
        },
        ...state.items,
      ],
    }))
  }

  onDelete = id => {
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id),
    }))
  }

  onToggleDone = id => {
    this.setState(state => ({
      items: state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          }
        }
        return item
      }),
    }))
  }

  getTodoItemsByStatus = ({ done }) => {
    return this.state.items.filter(item => item.done === done)
  }

  onEdit = (id, detail) => {
    this.setState(state => ({
      items: state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            detail: detail,
          }
        }
        return item
      }),
    }))
  }

  render() {
    const todoItems = this.getTodoItemsByStatus({ done: false })
    const doneItems = this.getTodoItemsByStatus({ done: true })

    return (
      <div className="app">
        <div className="app__todo-form">
          <TodoForm onSubmit={this.onCreateTodo} placeholder="Add a todo..." />
        </div>
        {todoItems.length !== 0 && (
          <>
            <div className="app__progress-bar">
              <ProgressBar items={this.state.items} showPercent />
            </div>
            <TodoItemList
              items={todoItems}
              onDelete={this.onDelete}
              onToggleDone={this.onToggleDone}
              onEdit={this.onEdit}
            />
          </>
        )}
        {doneItems.length !== 0 && (
          <>
            <h3 className="app__label">Done</h3>
            <TodoItemList items={doneItems} onDelete={this.onDelete} onToggleDone={this.onToggleDone} />
          </>
        )}
      </div>
    )
  }
}

export default App
