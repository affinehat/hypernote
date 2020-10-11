import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import store from './store'
import { Provider } from 'react-redux'
import './css/tailwind.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('react-root')
)
