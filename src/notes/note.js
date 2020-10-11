import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      children: [],
    }

    this.addItem = this.addItem.bind(this)
  }

  addItem() {
    this.setState(state => {
      children: state.children.push(new Note({}))
    })
    console.log(this.state)
  }

  edit(s) {
    this.setState(state => {
      text: s
    })
  }

  render() {
    return (
      <li>
        {this.state.text}
        <FontAwesomeIcon
          icon={faPlusCircle}
          pull="right"
          onClick={this.addItem}
        />
      </li>
    )
  }
}

export default Note
