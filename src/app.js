import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotesList from 'notes/noteslist'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <NotesList />
        </Route>
      </Switch>
    </div>
  )
}

export default App
