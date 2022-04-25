import { memo } from "react"
import styles from './index.module.css'


const Download = () => <div className={styles.wrapperButtons + " " + styles.center}>
    <button 
    className={styles.buttonsActive}>
    <a href="http://localhost:5000/download" rel="noreferrer" target="_blank">Download data</a>
    </button>
  </div>


export default memo(Download)