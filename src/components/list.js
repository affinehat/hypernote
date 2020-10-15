import React from 'react'

export const List = (props) => {
  return (
    <ul>
      {React.Children.map(props.children, item =>
        <li>{item}</li>
      )}
    </ul>
  )
}

export default List
