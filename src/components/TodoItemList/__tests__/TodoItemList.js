import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import TodoItemList from '../TodoItemList'

describe('TodoItemList', () => {
  it('should render properly', () => {
    const items = [
      { id: 1, detail: 'todo 1', done: false },
      { id: 2, detail: 'todo 2', done: false },
      { id: 3, detail: 'todo 3', done: false },
    ]
    const wrapper = mount(<TodoItemList items={items} onDelete={() => {}} onToggleDone={() => {}} />)
    expect(wrapper.find('.todo-item')).toHaveLength(3)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
