import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import TodoForm from '../TodoForm'

describe('TodoFrom', () => {
  it('should render properly', () => {
    const wrapper = mount(<TodoForm onSubmit={() => {}} placeholder="add a todo" />)
    const input = wrapper.find('input')

    expect(input.prop('placeholder')).toEqual('add a todo')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should return value when create todo', () => {
    const onSubmit = jest.fn(value => value)
    const wrapper = mount(<TodoForm onSubmit={onSubmit} placeholder="test" />)
    const input = wrapper.find('input')
    const form = wrapper.find('form')

    input.simulate('change', { target: { value: 'I have something to do.' } })
    form.simulate('submit')

    expect(onSubmit).toHaveBeenCalledWith('I have something to do.')
    expect(wrapper.state().value).toBe('')
  })
})
