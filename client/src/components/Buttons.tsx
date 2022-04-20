import { memo } from "react"
import classes from './index.module.css'

type PropsType = {
    int: boolean
    generateState: (i: string) => void
}

const Buttons: React.FC<PropsType> = ({int, generateState}) => <div className={classes.buttons}>
    <button 
    style={{backgroundColor: int ? 'green' : 'white'}}
    onClick={() => generateState('start')}>Start</button>
    <button 
    style={{backgroundColor: !int ? 'red' : 'white'}}
    onClick={() => generateState('stop')}>Stop</button>
  </div>

export default memo(Buttons)