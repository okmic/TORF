import React from "react"
import styles from '../index.module.css'

type PropsType = {
  hum: boolean
  temp: boolean
  setTemp: (t: any) => void
  setHum: (h: any) => void
  int: boolean
}

export const ChartControlerButtons: React.FC<PropsType> = ({ int, hum, temp, setHum, setTemp }) => {
  return <div className={styles.wrapperButtons}>
    <button
      disabled={!int}
      className={int ? temp ? styles.buttonsActive : styles.buttonsStoped : ''}
      onClick={() => {
        setTemp(true)
        setHum(false)
      }}>temp</button>
    <button
      disabled={!int}
      className={int ? hum ? styles.buttonsActive : styles.buttonsStoped : ''}
      onClick={() => {
        setTemp(false)
        setHum(true)
      }}>hum</button>
    {(!hum || !temp) && <button
      className={temp && hum ? styles.buttonsActive : styles.buttonsStoped}
      onClick={() => {
        setTemp(true)
        setHum(true)
      }}>defoult</button>}
  </div>
}