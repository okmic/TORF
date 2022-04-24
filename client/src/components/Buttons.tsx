import { memo } from "react"
import styles from './index.module.css'

type PropsType = {
    int: boolean
    generateState: (i: string) => void
}

const Buttons: React.FC<PropsType> = ({int, generateState}) => <div className={styles.wrapperButtons + " " + styles.center}>
    <button 
    className={int ? styles.buttonsActive : ''}
    onClick={() => generateState('start')}>Start</button>
    <button 
    className={!int ? styles.buttonsStoped : ''}
    onClick={() => generateState('stop')}>Stop</button>
  </div>

export default memo(Buttons)