import React from 'react'
import TodoForm from 'components/TodoForm'
import TodoItemList from 'components/TodoItemList'
import ProgressBar from 'components/ProgressBar'

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
        <ProgressBar items={this.state.items} showPercent />
        <TodoItemList
          items={todoItems}
          onDelete={this.onDelete}
          onToggleDone={this.onToggleDone}
          onEdit={this.onEdit}
        />
        <div>done</div>
        <TodoItemList items={doneItems} onDelete={this.onDelete} onToggleDone={this.onToggleDone} />
      </div>
    )
  }
}

export default App
