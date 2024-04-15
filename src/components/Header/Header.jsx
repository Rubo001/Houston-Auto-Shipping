import { useEffect, useState } from 'react';
import './Header.scss'


export default function Header() {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 220 ? setSticky(true) : setSticky(false);
  };

  return (
    <div className='header-container'>
      <div className="top-panel">
        <p> <i className="bi bi-headset"></i>  (346)200-8494</p>
        <nav>
          <span>Blog</span>
          <span>News</span>
          <span>FAQs</span>
          <span>Contact Us</span>
        </nav>
        <p> <i className="bi bi-envelope-fill"></i>  info@autoshippinghouston.com</p>
      </div>

      <header className={`${sticky ? 'is-sticky padding-m' : ''}`}>
        <a href="#">
          <img src="/Logo.png" />
        </a>
        <nav>
          <span>Home</span>
          <span>Free Quote</span>
          <span>About US  <i className="bi bi-chevron-down"></i></span>
          <span>Why Choose Our Services<i className="bi bi-chevron-down"></i></span>
          <span>Services <i className="bi bi-chevron-down"></i></span>
          <span>Useful Tips <i className="bi bi-chevron-down"></i></span>
        </nav>
        <p><i className="bi bi-search"></i></p>
      </header>
    </div>
  )
}
