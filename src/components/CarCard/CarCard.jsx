import './CarCard.scss'

export default function CarCard({ data }) {
  return (
    <div className='CarCard'>
      <img src={data.img} />
      <h5>{data.title}</h5>
      <p>{data.description}</p>
      <a href="#">{data.read} <span>&#xF285;</span> </a>
    </div>
  )
}
