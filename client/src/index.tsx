import React, { memo } from 'react';
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css';
import MainPage from './pages/MainPage'

const App = memo(() => {
  return (
    <div className="App">
        <MainPage />
    </div>
  )
})

ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>,document.getElementById('root')
)

reportWebVitals()


