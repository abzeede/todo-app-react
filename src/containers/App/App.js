import React from 'react'
import TodoForm from 'components/TodoForm'

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

  render() {
    const todoItems = this.getTodoItemsByStatus({ done: false })
    const doneItems = this.getTodoItemsByStatus({ done: true })

    return (
      <div>
        <TodoForm onSubmit={this.onCreateTodo} placeholder="Add a to-do..." />
        <div>ProgressBar</div>
        <div>todo</div>
        <ul>
          {todoItems.map(item => (
            <li key={item.id} onClick={() => this.onToggleDone(item.id)}>
              {item.detail} <button onClick={() => this.onDelete(item.id)}>delete</button>
            </li>
          ))}
        </ul>
        <div>done</div>
        <ul>
          {doneItems.map(item => (
            <li key={item.id} onClick={() => this.onToggleDone(item.id)}>
              {item.detail} <button onClick={() => this.onDelete(item.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
