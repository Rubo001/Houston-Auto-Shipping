import './AboutUs.scss'

export default function AboutUs() {
  const list = [
    {
      id: 1,
      title: '12 years of professional experience in vehicle transportation across 50 states of the United States'
    },
    {
      id: 2,
      title: 'Military equipment transportation and corporate relocation'
    },
    {
      id: 3,
      title: 'Shipment of a car from an auction or dealership'
    },
    {
      id: 4,
      title: 'Full insurance coverage for the vehicle. With Houston Auto Shipping, you can be on the safe side that your car is fully insured against any incidents'
    },
    {
      id: 5,
      title: <>Variety of shipping method: <span>Door-to-Door</span> and <span>Expedited Car Shipping Services</span>, <span>Open</span> and <span>Enclosed Car Transport</span>. We offer you options based on your preference and other factors.</>
    },
    {
      id: 6,
      title: 'Flexible Fleet: we ship vehicles nationwide, including Alaska and Hawaii'
    },
    {
      id: 7,
      title: 'Friendly live agents who are always happy to help you'
    }
  ];


  return (
    <>
      <div className="AboutUs padding-m">
        <div className="AboutUs__content">
          <h3>About US</h3>
          <h4>Welcome to Houston Auto Shipping</h4>
          <h5>Your Number One Choice for Shipping Your Vehicle</h5>
          <p>Houston Auto Shipping is one of the leading vehicle shipping companies in the US. The company has been successfully operating in the market since 2006. The wide range of the services, as well as the professional team and facilities, position our company as trustworthy and reliable. The company has shipped over 100 000 vehicles nationwide since its establishment. We deliver efficient and professional service tailored to customer’s requirements. <br />
            Our industry-specific experts, as well as the facilities that comply with the quality standards ensure secure shipment of your vehicle. Our customer base includes mainly loyal, new and returning customers. We continue collaborating with our customers and delivering the best value.
          </p>

        </div>
        <div className="AboutUs__Image">
          <img src="/AboutUS.png" />
        </div>
      </div>

      <div className="AboutUs padding-m">
        <div className="AboutUs__Image">
          <img src="/Chilie.png" />
        </div>

        <div className="AboutUs__content">
          <h3>Houston Auto Shipping</h3>
          <h4>What Makes Houston Auto Shipping Different</h4>
          <h5>Your Number One Choice for Shipping Your Vehicle</h5>
          <ul>
            {
              list.map(elem => {
                return <li key={elem.id}>{elem.title}</li>
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}