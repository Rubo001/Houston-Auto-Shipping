import { useState } from 'react';
import './Questions.scss'

export default function Questions() {
  const cardInfo = [
    {
      id: 1,
      image: '/greenCar.svg',
      title: 'The size and weight of your vehicle'
    },
    {
      id: 2,
      image: '/greenlocation.svg',
      title: 'Distance between vehicle pickup and delivery'
    },
    {
      id: 3,
      image: '/greenTrack.svg',
      title: 'Choosing open or enclosed car transport'
    },
    {
      id: 4,
      image: '/greenAuto.svg',
      title: 'The condition of your vehicle'
    },
  ]
  const ulInfo = [
    {
      id: 1,
      title: 'Vehicle types transported?',
      answer: [
        'We transport a wide range of vehicles, including cars, trucks, SUVs, motorcycles, and vans.',
        'Our services cover both domestic and international transportation.',
        'Whether it’s a standard sedan or a specialized vehicle, we have the expertise to handle it safely.'
      ]
    },
    {
      id: 2,
      title: 'Estimated delivery time?',
      answer: [
        'Our estimated delivery time typically ranges from 5 to 10 business days.',
        'The actual delivery timeframe may vary depending on factors such as distance, route, and current transit conditions.',
        'For more precise delivery estimates, please contact our customer service team.'
      ]
    },
    {
      id: 3,
      title: 'Insurance coverage offered?',
      answer: [
        'We provide comprehensive insurance coverage for all vehicles during transit.',
        'Our insurance policy safeguards against damages, theft, and other unforeseen events.',
        'Customers can have peace of mind knowing that their vehicle is fully protected throughout the transportation process.'
      ]
    },
    {
      id: 4,
      title: 'Shipping options and differences?',
      answer: [
        'We offer a variety of shipping options to suit different needs and preferences.',
        'Our standard shipping option is open transport, which is cost-effective and suitable for most vehicles.',
        'For customers who require extra protection, we also provide enclosed transport for luxury or classic cars.'
      ]
    },
    {
      id: 5,
      title: 'Tracking vehicle during transit?',
      answer: [
        'We offer real-time tracking services for all vehicles in transit.',
        'Customers can monitor their vehicle’s location and status via our online tracking platform.',
        'Our tracking system provides updates throughout the transportation process, ensuring transparency and peace of mind.'
      ]
    },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (id) => {
    setSelectedQuestion(id === selectedQuestion ? null : id);
  };

  return (
    <div className="Questions padding-m">
      <h3> <img src="/calc.svg" /> How We <span>Calculated</span> your transport <span>Fee</span></h3>
      <div className="Questions__left">
        <div className="centerVector">
          <img src="/vector.svg" />
        </div>
        {
          cardInfo.map(elem => {
            return (
              <div key={elem.id} className="qBox">
                <img src={elem.image} />
                <p>{elem.title}</p>
              </div>
            )
          })
        }
      </div>
      <div className="Questions__right">
        <ul>
          {
            ulInfo.map(info => (
              <li key={info.id}>
                <img src="/square.svg" />{info.title}
                <span
                  className={selectedQuestion === info.id ? 'open' : ''}
                  onClick={() => handleQuestionClick(info.id)}> &#xF282;
                </span>

                <ul className={`answers ${selectedQuestion === info.id ? 'open' : ''}`}>
                  {info.answer.map((answer, index) => (
                    <li key={index}>{answer}</li>
                  ))}
                </ul>

              </li>
            ))
          }
        </ul>
        <a href="#">Read More <span>&#xF285;</span></a>
      </div>
    </div>
  )
}