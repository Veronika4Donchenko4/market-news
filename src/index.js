import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {GlobalContext
} from './context/post-context';
import App from './App';
import './styles/globals.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
      <GlobalContext>
      <App />
          </GlobalContext>			
		</BrowserRouter>
	</React.StrictMode>
);