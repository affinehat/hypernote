import React from 'react'
import { connect } from 'react-redux'

import Note from 'notes/note'
import CreateNoteButton from 'notes/createNoteButton'
import DeleteNoteButton from 'notes/deleteNoteButton'
import EditNoteButton from 'notes/editNoteButton'
import EditTitleButton from 'notes/editTitleButton'
import List from 'components/list'
import Input from 'components/input'
import { updateTitle } from 'notes/notesSlice'

export const NotesList = props => {
  return (
    <>
      <List>
        {props.notes.map(n => (
          <React.Fragment key={n.id}>
            {!n.editing ? (
              <div className="grid grid-cols-2">
                <Note>{n.title}</Note>
                  {/* renders in reverse order */}
                <span>
                  <CreateNoteButton at={n.id} pull="right"></CreateNoteButton>
                  <EditNoteButton at={n.id} pull="right">></EditNoteButton>
                  <EditTitleButton at={n.id} pull="right">></EditTitleButton>
                  <DeleteNoteButton at={n.id} pull="right">></DeleteNoteButton>
                </span>
              </div>
            ) : (
              <>
                <Input onChange={props.updateTitle} at={n.id}/>
                <EditTitleButton at={n.id} pull="right"></EditTitleButton>
              </>
            )}
          </React.Fragment>
        ))}
      </List>

      <CreateNoteButton></CreateNoteButton>
    </>
  )
}

const mapDispatch = { updateTitle }

const mapState = state => ({
  notes: Object.values(state.notes)
})

export default connect(mapState, mapDispatch)(NotesList)
