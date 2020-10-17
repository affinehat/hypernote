import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import { editTitle } from 'notes/notesSlice'

export const EditTitleButton = props => {
  let { editTitle, at, ...otherProps } = props
  let editTitleAt = () => editTitle(at)

  return (
    <FontAwesomeIcon
      {...otherProps}
      icon={faEdit}
      onClick={editTitleAt}
    />
  )
}

const mapDispatch = { editTitle }

export default connect(null, mapDispatch)(EditTitleButton)
