import React, { Component } from 'react'
import Note from 'notes/note'

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <Note text="hello world" />
        </ul>
      </div>
    )
  }
}

export default App
