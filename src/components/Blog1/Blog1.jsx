import CarCard from '../CarCard/CarCard'
import './Blog1.scss'

export default function Blog1() {
  const carsData = [
    {
      id: 1,
      title: 'Open Car Transport',
      description: 'The most popular method of auto',
      read: 'Read More',
      img: '/car1.png'
    },
    {
      id: 2,
      title: 'Enclosed Car Transport',
      description: 'Enclosed car shipping is reserved for exotic or luxury automobiles.',
      read: 'Read More',
      img: '/car2.png'
    },
    {
      id: 3,
      title: 'Expedited Shipping',
      description: 'Expedited car shipping ensures your beloved car avoids any possible damage.',
      read: 'Read More',
      img: '/car3.png'
    },
    {
      id: 4,
      title: 'Door to Door Car Transport',
      description: 'Long Island Car Transport standard shipping option is the door to door option. ',
      read: 'Read More',
      img: '/car4.png'
    },
  ]
  return (
    <div className="Blog1 padding-m">
      {
        carsData.map(car => {
          return <CarCard key={car.id} data={car} />
        })
      }
    </div>
  )
}
