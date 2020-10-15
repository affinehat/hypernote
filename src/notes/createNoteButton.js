import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { createNote } from 'notes/notesSlice'

export const CreateNoteButton = props => {
  let { createNote, ...otherProps } = props
  let createNoteDefault = () => createNote('New Note')

  return (
    <FontAwesomeIcon
      {...otherProps}
      icon={faPlusCircle}
      onClick={createNoteDefault}
    />
  )
}

const mapDispatch = { createNote }

export default connect(null, mapDispatch)(CreateNoteButton)
