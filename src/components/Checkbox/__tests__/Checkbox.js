import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Checkbox from '../Checkbox'

describe('Checkbox', () => {
  it('should render properly', () => {
    const checkedCheckbox = mount(<Checkbox onClick={() => {}} checked />)
    const unCheckedCheckbox = mount(<Checkbox onClick={() => {}} checked={false} />)

    expect(checkedCheckbox.find('.checkbox')).toHaveLength(1)
    expect(checkedCheckbox.find('.checkbox--checked')).toHaveLength(1)
    expect(toJson(checkedCheckbox)).toMatchSnapshot()

    expect(unCheckedCheckbox.find('.checkbox')).toHaveLength(1)
    expect(unCheckedCheckbox.find('.checkbox--checked')).toHaveLength(0)
    expect(toJson(unCheckedCheckbox)).toMatchSnapshot()
  })

  it(`should change call function onClick when it's clicked`, () => {
    const onClick = jest.fn(() => {})
    const checkedCheckbox = mount(<Checkbox onClick={onClick} checked />)

    checkedCheckbox.find('.checkbox').simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
