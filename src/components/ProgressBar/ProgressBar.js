import React from 'react'
import { arrayOf, shape, number, string, bool } from 'prop-types'
import './style.scss'

const ProgressBar = ({ items, showPercent }) => {
  const calculateProgress = () => {
    const itemCount = items.length
    if (itemCount === 0) {
      return 0
    }

    return 100 - Math.floor((100 * items.filter(item => !item.done).length) / itemCount)
  }
  const progress = calculateProgress()

  return (
    <div className="progress">
      {showPercent && <div className="progress__text">{progress}%</div>}
      <div className="progress__bar">
        <div className="progress__bar--active" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  items: arrayOf(
    shape({
      id: number,
      title: string,
      done: bool,
    }),
  ).isRequired,
  showPercent: bool,
}

ProgressBar.defaultProps = {
  showPercent: false,
}

export default ProgressBar
