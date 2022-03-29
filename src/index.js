import React from 'react'
import ReactDome from 'react-dom'
import App from './App'
import './main.css'

ReactDome.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
)
