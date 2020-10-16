import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

export const EditNoteButton = props => {
  let { at, ...otherProps } = props

  return (
    <Link to={`/edit/${at}`}>
      <FontAwesomeIcon
        {...otherProps}
        icon={ faExternalLinkSquareAlt }
      />
    </Link>
  )
}


export default EditNoteButton
