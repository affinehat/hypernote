import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Controlled as CodeMirror } from 'react-codemirror2'
import ReactMarkdown from 'react-markdown/with-html'
import Frame from 'react-frame-component'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

import { editNote } from 'notes/notesSlice'

export const NoteEditor = props => {
  const initialSource = '### <-- Start typing on the left!\n\n'
    + '1. This is a *fully featured* markdown editor.\n\n'
    + '2. Check the [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet)\n\n'
    + '3. You can also insert your own html\n\n'
    + '  3a. <span style="background-color: yellow">This text is highlighted!</span>'
  const id = props.match.params.id
  const text = props.note.text || initialSource;
  let initial = true;

  return (
    <div className="grid grid-cols-2">
      <div id="editor-panel">
        <CodeMirror className="min-h-screen"
          value={text}
          onBeforeChange={(editor, data, value) => {
            if (!props.note.text && initial) {
              initial = false;
              value = data.text[0]
              editor.setValue(value)
            } else {
              initial = false;
              props.editNote({id, value})
            }
          }}
        />
      </div>
      <div id="result-panel" className="bg-white">
        <Frame className="min-h-screen min-w-full" head={
          <link type='text/css' rel='stylesheet'
            href='https://www.gitcdn.xyz/repo/markdowncss/splendor/master/css/splendor.min.css' />
        }>
          <ReactMarkdown
            source={text}
            escapeHtml={false}
            linkTarget="_blank" />
        </Frame>
      </div>
    </div>
  )
}

const mapDispatch = { editNote }

const mapState = (state, {match}) => {
  const id = match.params.id
  return {
    note: state.notes[id]
  }
}

export default connect(mapState, mapDispatch)(NoteEditor)
