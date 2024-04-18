import { useState } from 'react'
import Modal from '../Modal/Modal'
import './Services.scss'

export default function Services() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isOpen
        ? <Modal toggleModal={toggleModal} isOpen={isOpen}>
          <div className="VideoModal">
            <span onClick={toggleModal}>&#xF628;</span>
            <div className="VideoModal-content">
            <iframe width="750" height="415" src="https://www.youtube.com/embed/DJB3uj9Ls3E?si=C2A8SFVxmvgYhWoi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </Modal>
        : null
      }

      <div className="Services padding-m">
        <h3>Our Car Transport Services</h3>
        <div className="Services__left">
          <h3>Houston Auto Shipping</h3>
          <h2>Free Quoates and Affordable Price</h2>
          <p>Our services are not only high-quality but also affordable and competitive in the market. If you are looking for affordable and secure vehicle shipping options, you can <span>Contact US</span>. <br /> You can also request quotes online through filling in a simple form. Our approach to our job will give you peace-of-mind that the shipment of your car is in secure hands.
          </p>
        </div>
        <div className="Services__middle">
          <img onClick={toggleModal} src="/youtube.png" alt="" />
        </div>
        <div className="Services__right">
          <img src="/subscribe.png" alt="" />
        </div>
      </div>
    </>
  )
}