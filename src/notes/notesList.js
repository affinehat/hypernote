import React from 'react'
import { connect } from 'react-redux'

import Note from 'notes/note'
import CreateNoteButton from 'notes/createNoteButton'
import DeleteNoteButton from 'notes/deleteNoteButton'
import List from 'components/list'

export const NotesList = props => {
  return (
    <>
      <List>
        {props.notes.map(n => (
          <React.Fragment key={n.id}>
            <Note>{n.title}</Note>
              {/* renders in reverse order */}
            <CreateNoteButton at={n.id} pull="right"></CreateNoteButton>
            <DeleteNoteButton at={n.id} pull="right"></DeleteNoteButton>
          </React.Fragment>
        ))}
      </List>

      <CreateNoteButton></CreateNoteButton>
    </>
  )
}


const mapState = state => ({
  notes: Object.values(state.notes)
})

export default connect(mapState)(NotesList)
