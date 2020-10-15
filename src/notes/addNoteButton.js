import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { addNote } from 'notes/notesSlice'

export const AddNoteButton = props => {
  let { addNote, ...otherProps } = props
  let addNoteDefault = () => addNote('New Note')

  return (
    <FontAwesomeIcon
      {...otherProps}
      icon={faPlusCircle}
      onClick={addNoteDefault}
    />
  )
}

const mapDispatch = { addNote }

export default connect(null, mapDispatch)(AddNoteButton)
