import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AdminContext from './Contexts/AdminContext'
import App from './App'
import Bootstrap from './utility/Bootstrap'

ReactDOM.render(
  <BrowserRouter>
    <AdminContext>
      <Bootstrap>
        <App />
      </Bootstrap>
    </AdminContext>
  </BrowserRouter>,
  document.getElementById('root')
);
