import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [temp, setTemp] = useState(0)
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
        setTemp(Math.floor(Math.random() * 100))
        setVlag(Math.floor(Math.random() * 100))
    }, 1000)
    return () => clearInterval(interval)
    } else if (int === false) {
      console.log('stop')
    }
  }, [int])

  useEffect(() => {
    console.log(temp + " " + vlag)
    /* (temp > 35 || vlag < 40) */
    if (temp > 90 || vlag < 10) {
      alert("Температура: " + temp + " Влажность: " + vlag)
    }
  }, [temp, vlag])

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
