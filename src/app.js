import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotesList from 'notes/noteslist'
import NoteEditor from 'notes/noteEditor'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={NotesList}>
        </Route>
        <Route path="/edit/:id" component={NoteEditor}>
        </Route>
      </Switch>
    </div>
  )
}

export default App
