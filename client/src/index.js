import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Reboot from './components/utility/Reboot';
import App from './App';
import Animation from './components/contexts/Animation';

ReactDOM.render(
  <BrowserRouter>
    <Reboot>
      <Animation>
        <App />
      </Animation>
    </Reboot>
  </BrowserRouter>,
  document.getElementById('root')
);
