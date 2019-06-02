import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import ProgressBar from '../ProgressBar'

describe('ProgressBar', () => {
  it('should render properly', () => {
    const items = [
      { id: 1, detail: 'todo 1', done: false },
      { id: 2, detail: 'todo 2', done: true },
      { id: 3, detail: 'todo 3', done: false },
      { id: 4, detail: 'todo 4', done: false },
    ]

    const wrapperShowPercent = mount(<ProgressBar items={items} showPercent />)
    const wrapperNotShowPercent = mount(<ProgressBar items={items} showPercent={false} />)

    expect(wrapperShowPercent.find('.progress__text').text()).toBe('25%')
    expect(wrapperShowPercent.find('.progress__bar--active').props().style.width).toBe('25%')
    expect(toJson(wrapperShowPercent)).toMatchSnapshot()

    expect(wrapperNotShowPercent.find('.progress__text')).toHaveLength(0)
    expect(toJson(wrapperNotShowPercent)).toMatchSnapshot()
  })
})
