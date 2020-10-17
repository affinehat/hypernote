import React from 'react'

export const Input = props => {
  const { onChange, at } = props
  const changeAt = (e) => onChange({id: at, value: e.target.value})

  return (
    <input autoFocus type="text"
      onChange={changeAt}
      className="rounded-sm bg-blue-600" />
  )
}

export default Input
