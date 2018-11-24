import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Reboot from './components/utility/Reboot'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <Reboot>
      <App />
    </Reboot>
  </BrowserRouter>
  ,document.getElementById('root')
  )