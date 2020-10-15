import React from 'react'
import { connect } from 'react-redux'

import Note from 'notes/note'
import CreateNoteButton from 'notes/createNoteButton'
import List from 'components/list'

export const NotesList = props => {
  return (
    <>
      <List>
        {props.notes.map(n => (
          <>
            <Note>{n.text}</Note>
            <CreateNoteButton pull="right"></CreateNoteButton>
          </>
        ))}
      </List>

      <CreateNoteButton></CreateNoteButton>
    </>
  )
}


const mapState = state => ({
  notes: state.notes
})

export default connect(mapState)(NotesList)
