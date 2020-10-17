import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown/with-html'
import Frame from 'react-frame-component'

export const NoteEditor = props => {
  const testSource = '# Hello World'
  return (
    <div className="grid grid-cols-2">
      <div id="editor-panel">{ props.note.text || testSource }</div>
      <div id="result-panel" className="bg-white">
        <Frame className="min-h-screen min-w-full" head={
          <link type='text/css' rel='stylesheet'
            href='https://www.gitcdn.xyz/repo/markdowncss/splendor/master/css/splendor.min.css' />
        }>
          <ReactMarkdown source={testSource} escapeHtml={false} />
        </Frame>
      </div>
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
