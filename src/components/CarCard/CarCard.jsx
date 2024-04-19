import { useState } from 'react'
import './CarCard.scss'

export default function CarCard({ data }) {

  const [hidden, setHidden] = useState(true)
  return (
    <div className='CarCard'>
      <img src={data.img} />
      <h5>{data.title}</h5>
      <p onClick={() => setHidden(!hidden)} className={hidden ? 'hidden' : ''}>{data.description}</p>
      <a href="#">{data.read} <span>&#xF285;</span> </a>
    </div>
  )
}
