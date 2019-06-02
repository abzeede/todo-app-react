import React from 'react'
import { func, string } from 'prop-types'
import './style.scss'

class TodoForm extends React.Component {
  state = {
    value: '',
  }

  handelInputChange = e => {
    this.setState({ value: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    if (this.state.value !== '') {
      this.props.onSubmit(this.state.value)
      this.setState({ value: '' })
    }
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.onSubmit}>
        <span className="todo-form__plus-icon">+</span>
        <input
          className="todo-form__input"
          onChange={this.handelInputChange}
          value={this.state.value}
          placeholder={this.props.placeholder}
        />
      </form>
    )
  }
}

TodoForm.propTypes = {
  onSubmit: func.isRequired,
  placeholder: string,
}

TodoForm.defaultProps = {
  placeholder: '',
}

export default TodoForm
