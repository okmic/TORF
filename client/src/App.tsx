import React, { useEffect, useState } from 'react';
import './App.css';
import Chart from './Chart';
import { useHttp } from './hooks/http.hook';

export type DataType = Array<ObjData>
type ObjData = {
  date: Date
  name: number
  uv: number
  pv: number
}

function App() {

  const {loading, error, request} =  useHttp()
  const [data, setData] = useState<DataType>([] as DataType)
  const [warningData, setWarningData] = useState([] as DataType)
  const [lastNum, setLanstNum] = useState([0, 0, ''])
  const [int, setInt] = useState<boolean>()

  const sendData = async () => {
    try {
        const data = await request('http://localhost:5000', 'POST', [...lastNum])
        console.log(data)
    } catch (e) {}
  }

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
          setLanstNum([item.uv, item.pv, String(item.date)])
          if (item.uv > 90 || item.pv < 10) {
            alert("Температура: " + item.uv + " Влажность: " + item.pv)
            setWarningData([...warningData, {...item}])
          }

        } else return
      })
    }  
  }, [data]) 

  useEffect(() => {
    if(lastNum[2]) {
      sendData()
    }
  }, [lastNum])
  
  useEffect(() => {
    console.log(warningData)
  }, [warningData])
  return (
    <div className="App">
      <header className="App-header">
        <h1>TORF</h1>

        <div className="buttons">
          <button 
          style={{backgroundColor: int ? 'green' : 'white'}}
          onClick={() => generateState('start')}>Start</button>
          <button 
          style={{backgroundColor: !int ? 'red' : 'white'}}
          onClick={() => generateState('stop')}>Stop</button>
        </div>
    
         <Chart data={data} /> 

        <span>uv - Температура: <i><b>{lastNum[0]}</b></i></span>
        <span>pv - Влажность: <i><b>{lastNum[1]}</b></i></span>
        <br />
        <br />

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
