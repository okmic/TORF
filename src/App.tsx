import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart';

export type DataType = Array<ObjData>
type ObjData = {
  date: Date
  name: number
  uv: number
  pv: number
}

function App() {

  const [data, setData] = useState<DataType>([] as DataType)
  const [warningData, setWarningData] = useState([] as DataType)
  const [lastNum, setLanstNum] = useState([0, 0])
  const [int, setInt] = useState<boolean>()

  useEffect(() => {
    if (int === true) {
      const interval = setInterval(() => {
        setData([...data, {
          date: new Date(),
          name: data.length,
          uv: Math.floor(Math.random() * 100),
          pv: Math.floor(Math.random() * 100)
        }])
    }, 3000)
    return () => clearInterval(interval)
    } else if (int === false) {
      console.log('stop')
    }
  }, [int, data])

  const generateState = (order: string) => {
    if (order === "stop") {
      setInt(false)
  } else {
    setInt(true)
  }
}
  

  useEffect(() => {
    console.log(data)
    /* (temp > 35 || vlag < 40) */
    if(data) {
      data.forEach((item, index) => {    
      
      if(index === data.length -1) {
          setLanstNum([item.uv, item.pv])
          if (item.uv > 90 || item.pv < 10) {
            alert("Температура: " + item.uv + " Влажность: " + item.pv)
            setWarningData([...warningData, {...item}])
          }

        } else return
      })
    }  
  }, [data]) 

  
  useEffect(() => {
    console.log(warningData)
  }, [warningData])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => generateState('start')}>start</button>
        <button onClick={() => generateState('stop')}>stop</button>
         <Chart data={data} lastNum={lastNum} /> 
         {warningData && warningData.map(item => <div key={item.name}>
          <ul style={{textDecoration: "none", listStyleType: 'none'}}>
            <li>Дата: {String(item.date)}</li>
            <li>Номер по порядку: {item.name}</li>
            <li>Температура: {item.uv}</li>
            <li>Влажность: {item.pv}</li>
          </ul>
        </div>)}
      </header>
      
    </div>
  );
}

export default App
