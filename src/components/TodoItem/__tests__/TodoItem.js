import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import TodoItem from 'components/TodoItem/TodoItem'

describe('TodoItem', () => {
  it('should render properly', () => {
    const doneItem = mount(<TodoItem id={1} detail="something" done />)
    const todoItem = mount(<TodoItem id={2} detail="something" done={false} />)

    expect(todoItem.find('input').props().value).toEqual('something')
    expect(toJson(doneItem)).toMatchSnapshot()
    expect(toJson(todoItem)).toMatchSnapshot()
  })

  it('should call onToggleDone when click on CheckBox', () => {
    const onToggleDone = jest.fn(value => value)
    const todoItem = mount(<TodoItem id={2} detail="something" done={false} onToggleDone={onToggleDone} />)
    todoItem.find('.checkbox').simulate('click')
    expect(onToggleDone).toHaveBeenCalledWith(2)
  })

  it('should call onToggleDone when click on CheckBox', () => {
    const onToggleDone = jest.fn(value => value)
    const todoItem = mount(<TodoItem id={2} detail="something" done={false} onToggleDone={onToggleDone} />)
    todoItem.find('.checkbox').simulate('click')
    expect(onToggleDone).toHaveBeenCalledWith(2)
  })

  it('should call onEdit when change input value', () => {
    const onEdit = jest.fn((id, value) => ({ id, value }))
    const wrapper = mount(<TodoItem id={2} detail="something" done={false} onEdit={onEdit} />)
    const input = wrapper.find('input')

    input.simulate('change', { target: { value: `I don't know what to do` } })
    expect(onEdit).toHaveBeenCalledWith(2, `I don't know what to do`)
  })

  it('should call onDelete when click Delete button', () => {
    const onDelete = jest.fn(id => id)
    const wrapper = mount(<TodoItem id={2} detail="something" done={false} onDelete={onDelete} />)
    wrapper.find('.todo-item__remove-btn').simulate('click')
    expect(onDelete).toHaveBeenCalledWith(2)
  })
})
