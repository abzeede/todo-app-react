import React from 'react'
import { bool, func } from 'prop-types'
import './style.scss'

const Checkbox = ({ checked, onClick }) => {
  return <span className={`checkbox ${checked && 'checkbox--checked'}`} onClick={onClick} />
}

Checkbox.propTypes = {
  checked: bool.isRequired,
  onClick: func.isRequired,
}

export default Checkbox
