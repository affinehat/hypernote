import React from 'react'

export const Input = props => {
  const { onChange, at } = props
  const changeAt = (e) => onChange({id: at, value: e.target.value})

  return (
    <input type="text" onChange={changeAt} className="bg-blue-500"></input>
  )
}

export default Input
