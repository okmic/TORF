
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import {DataType, ObjData} from '../pages/MainPage'
import { ChartControlerButtons } from "./ChartControlerButtons/ChartControlerButtons";

type PropsType = {
  int: boolean
  data: DataType
}

export default function Chart({int, data}: PropsType) {

    const [temp, setTemp] = useState(true)
    const [hum, setHum] = useState(true)
    const [controlerData, setData] = useState([] as DataType)

    useEffect(() => {
      if (!hum || !temp) {
        setData(JSON.parse(JSON.stringify(data)).map((item: ObjData) => {
        if(!temp) {
          return({
          data: item.date,
          name: item.name,
          uv: item.uv
        })
        } else if (!hum) {
          return({
            data: item.date,
            name: item.name,
            pv: item.pv
          })
        } 
    }))} else setData(data)
    }, [data, temp, hum])
    

    const windowOuterWidth = window.outerWidth - 30
  return <>
    <ChartControlerButtons 
    hum={hum} temp={temp} int={int}
    setHum={setHum} setTemp={setTemp}
    />
    <LineChart
      width={windowOuterWidth}
      height={300}
      data={controlerData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  </>
}
