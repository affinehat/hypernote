import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import { deleteNote } from 'notes/notesSlice'

export const DeleteNoteButton = props => {
  let { deleteNote, at, ...otherProps } = props
  let deleteNoteAt = () => deleteNote(at)

  return (
    <FontAwesomeIcon
      {...otherProps}
      icon={faTimesCircle}
      onClick={deleteNoteAt}
    />
  )
}

const mapDispatch = { deleteNote }

export default connect(null, mapDispatch)(DeleteNoteButton)
