import { memo } from "react"
import classes from './index.module.css'


const Download = () => <div className={classes.buttons}>
    <button 
    style={{backgroundColor:'green'}}><a href="http://localhost:5000/download" target="_blank">Download data</a></button>
  </div>


export default memo(Download)