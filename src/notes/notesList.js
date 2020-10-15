import React from 'react'
import { connect } from 'react-redux'

import Note from 'notes/note'
import AddNoteButton from 'notes/addNoteButton'
import List from 'components/list'

export const NotesList = props => {
  return (
    <>
      <List>
        {props.notes.map(n => (
          <>
            <Note>{n.text}</Note>
            <AddNoteButton pull="right"></AddNoteButton>
          </>
        ))}
      </List>

      <AddNoteButton></AddNoteButton>
    </>
  )
}


const mapState = state => ({
  notes: state.notes
})

export default connect(mapState)(NotesList)
