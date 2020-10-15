import React from 'react'

export const Note = props => {
  return (
    <div {...props}>
      { props.children }
    </div>
  )
}

export default Note
