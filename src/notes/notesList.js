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
          <div key={n.id} className="grid grid-cols-3 mb-2 ml-2">
            {!n.editing ? (
              <>
                <Note>{n.title}</Note>
                  {/* renders in reverse order */}
                <span class="col-start-3">
                  <CreateNoteButton at={n.id} pull="right"></CreateNoteButton>
                  <EditNoteButton at={n.id} pull="right">></EditNoteButton>
                  <EditTitleButton at={n.id} pull="right">></EditTitleButton>
                  <DeleteNoteButton at={n.id} pull="right">></DeleteNoteButton>
                </span>
              </>
            ) : (
              <>
                <Input onChange={props.updateTitle} at={n.id}/>
                <span class="col-start-3">
                  <EditTitleButton at={n.id} pull="right"></EditTitleButton>
                </span>
              </>
            )}
          </div>
        ))}
      </List>

      <CreateNoteButton className="ml-2"></CreateNoteButton>
    </>
  )
}

const mapDispatch = { updateTitle }

const mapState = state => ({
  notes: Object.values(state.notes)
})

export default connect(mapState, mapDispatch)(NotesList)
