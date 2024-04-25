import { Link } from 'react-router-dom'
import './BlogCard.scss'

export default function BlogCard({ data }) {
  return (
    <div className='BlogCard'>
      <div className="BlogCard__img">
        <img src={data.img} />
      </div>
      <div className="BlogCard__content">
        <h3><img src="/calendar.svg" /> {data.date} <span>{data.category}</span> </h3>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
      <div className="BlogCard__btns">
        <a className='readMore' href="#">Read More <span>&#xF285;</span> </a>
        <Link className='viewMore' to={data.route}>View All</Link>
      </div>
    </div>
  )
}
