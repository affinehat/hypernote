import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { createNote } from 'notes/notesSlice'

export const CreateNoteButton = props => {
  let { createNote, at, ...otherProps } = props
  let createNoteAt = () => createNote({text: 'New Note', parent: at })

  return (
    <FontAwesomeIcon
      {...otherProps}
      icon={faPlusCircle}
      onClick={createNoteAt}
    />
  )
}

const mapDispatch = { createNote }

export default connect(null, mapDispatch)(CreateNoteButton)
