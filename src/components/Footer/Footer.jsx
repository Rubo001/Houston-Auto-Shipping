import './Footer.scss'

export default function Footer() {
  const footerData = [
    {
      id: 'links',
      title: 'Quick Links',
      subtitles: ['Blog', 'News', 'FAQs', 'FREE Quote', 'Our History', 'Clients', 'Brokers and carriers', 'Nationwide Shipping']
    },
    {
      id: 'cities',
      title: 'HOUSTON CITIES',
      subtitles: ['Sugar Land, TX', 'Missouri City, TX', 'Pearland, TX', 'League City, TX', 'Baytown, TX', 'Katy, TX', 'Pasadena, TX', 'Galveston, TX', 'Spring, TX', 'Conroe, TX', 'The Woodlands, TX']
    }
  ]
  return (
    <div className='Footer padding-m'>
      <div className="Footer__top">
        {
          footerData.map(elem => {
            return <div key={elem.id} className={elem.id}>
              <h3>{elem.title}</h3>
              <ul>
                {
                  elem.subtitles.map((sub, index) => {
                    return <li key={index}>{sub}</li>
                  })
                }
              </ul>
            </div>
          })
        }
        <div className="contact">
          <img src="Logo.png" />
          <h3>Contact Info</h3>
          <p> Phone: <span>( 346 ) 200 - 8494</span></p>
          <p> Email: <span> info@autoshippinghouston.com</span></p>
        </div>
      </div>
      <div className="Footer__bottom">
        <p>@2023-Houston Auto Shipping.All Rights Reserved</p>
        <p><a>Terms And Counditions</a> <a>Privacy Policy</a></p>
      </div>


    </div>
  )
}
