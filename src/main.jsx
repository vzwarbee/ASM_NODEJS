import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './component/lab5/reducers'
import './example.js'

const store = createStore(rootReducer);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
