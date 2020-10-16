import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

export const NoteEditor = props => {
  return (
    <div className="grid grid-cols-2">
      <div>{props.note.text}</div>
      <div>"output"</div>
    </div>
  )
}

const mapState = (state, {match}) => {
  const id = match.params.id
  return {
    note: state.notes[id]
  }
}

export default connect(mapState)(NoteEditor)
