import React, { memo, useEffect, useState } from 'react';
import '../index.css';
import Chart from '../components/Chart'
import Buttons from '../components/Buttons'
import WarningItem from '../components/WarningItem'
import { useHttp } from '../hooks/http.hook';


export type DataType = Array<ObjData>
type ObjData = {
  date: Date
  name: number
  uv: number
  pv: number
}

function MainPage() {

  const {request} =  useHttp()
  const [data, setData] = useState<DataType>([] as DataType)
  const [warningData, setWarningData] = useState([] as DataType)
  const [lastNum, setLanstNum] = useState([0, 0, ''])
  const [int, setInt] = useState<boolean>(false)

  const sendData = async () => {
    try {
        await request('http://localhost:5000/send', 'POST', [...lastNum])
    } catch (e) {
        console.error(e)
    }
  }

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
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>TORF</h1>

        <Buttons int={int} generateState={generateState} />
        <Chart data={data} /> 

        <span>uv - Температура: <i><b>{lastNum[0]}</b></i></span>
        <span>pv - Влажность: <i><b>{lastNum[1]}</b></i></span>

        <br />
        <br />

         {warningData && warningData.map(item => <WarningItem key={item.name}
         date={String(item.date)}
         name={item.name}
         pv={item.pv}
         uv={item.uv}
         />)}

      </header>
      
    </div>
  );
}

export default memo(MainPage)
