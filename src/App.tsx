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
  const [warrningData, setWarrningData] = useState([] as DataType)
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
      setWarrningData([...warrningData, {...item}])
        
      if(index === data.length -1) {
          setLanstNum([item.uv, item.pv])
          if (item.uv > 90 || item.pv < 10) {
            alert("Температура: " + item.uv + " Влажность: " + item.pv)
          }

        } else return
      })
    }


/*         if(data.length <= 1) {
          if (data[data.length - 1].uv > 90 || data[data.length - 1].pv < 10) {
            alert("Температура: " + data[data.length - 1].uv + " Влажность: " + data[0].pv)
          }
        } else return */
    
  }, [data]) 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => generateState('start')}>start</button>
        <button onClick={() => generateState('stop')}>stop</button>
         <Chart data={data} lastNum={lastNum} /> 
        {warrningData.length >= 2 && warrningData.map(item => <div key={item.name}>
          <span>{item.date}</span>
          <span>{item.name}</span>
          <span>{item.uv}</span>
          <span>{item.pv}</span>
        </div>)} 
      </header>
    </div>
  );
}

export default App;
