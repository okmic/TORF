import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const test = ''
  const [state, setState] = useState(0)
  const [vlag, setVlag] = useState(0)
  const [int, setInt] = useState<boolean>()

  const generateState = (order: string) => {

    if (order === "stop") {
      setInt(false)
  } else {
    setInt(true)
  }
}
  useEffect(() => {
    if (int === true) {
      const interval = setInterval(() => {
        setState(Math.floor(Math.random() * 100))
        setVlag(Math.floor(Math.random() * 100))
    }, 300)
    return () => clearInterval(interval)
    } else if (int === false) {
      console.log('stop')
    }
  }, [int])

  useEffect(() => {
    console.log(state + " " + vlag)
    if (state > 90 && vlag > 90) {
      alert("Температура: " + state + " Влажность: " + vlag)
    }
  }, [state, vlag])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => generateState('start')}>start</button>
        <button onClick={() => generateState('stop')}>stop</button>
      </header>
    </div>
  );
}

export default App;
