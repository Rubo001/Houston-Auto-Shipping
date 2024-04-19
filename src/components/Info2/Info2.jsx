import '../AboutUS/AboutUs.scss'

export default function Info2() {
  return (
    <div className="Info padding-m">
      <div className="Info__content">
        <h3>Full-coverage insurance</h3>
        <h4>Houston Auto Shipping</h4>
        <p>Houston Auto Shipping fully insures your vehicle during the whole shipment process. From the moment it gets loaded onto the truck, to the moment it is taken off, you get insurance. The carrier’s insurance covers $1,000,000 liability and $250,000 cargo. <br />
          Even though we have the highest rate of delivering the vehicle damage-free, the law requires to fully insure the vehicles.At pickup or delivery, we strongly encourage all our customer to inspect the vehicle with the driver against any damages.
        </p>
        <a href="#">Read More <span>&#xF285;</span></a>

      </div>
      <div className="Info__Image">
        <img src="/umbrella.png" />
      </div>
    </div>
  )
}
