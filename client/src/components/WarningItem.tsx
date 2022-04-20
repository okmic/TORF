import React, { memo } from "react"

type PropsType = {
    date: string
    name: number
    uv: number
    pv: number
}

const WarningItem: React.FC<PropsType> = ({date, name, pv, uv}) => <div>
<ul style={{textDecoration: "none", listStyleType: 'none'}}>
  <li>Дата: {date}</li>
  <li>Номер по порядку: {name}</li>
  <li>Температура: {uv}</li>
  <li>Влажность: {pv}</li>
</ul>
</div>

export default memo(WarningItem)