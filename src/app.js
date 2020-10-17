import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotesList from 'notes/noteslist'
import NoteEditor from 'notes/noteEditor'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/edit/:id" component={NoteEditor} />
        <Route path="/" component={NotesList} />
      </Switch>
    </div>
  )
}

export default App
