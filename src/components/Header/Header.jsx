import { useEffect, useRef, useState } from 'react';
import './Header.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Link, NavLink } from 'react-router-dom';
import ROUTES from '../../routes';


export default function Header() {

  const menu = [
    {
      id: 1,
      title: <>Home</>,
      submenu: [],
    },
    {
      id: 2,
      title: <>FREE Quote</>,
      submenu: [],
    },
    {
      id: 3,
      title: <>About Us <i className="bi bi-chevron-down"></i></>,
      submenu: ['Our History', 'Our Headquarters', 'Contact Info'],
    },
    {
      id: 4,
      title: <>Why Choose Our Services <i className="bi bi-chevron-down"></i></>,
      submenu: ['Reason 1', 'Reason 2', 'Reason 3', 'Reason 4'],
    },
    {
      id: 5,
      title: <>Services <i className="bi bi-chevron-down"></i></>,
      submenu: ['Services 1', 'Services 2', 'Services 3', 'Services 4'],
    },
    {
      id: 6,
      title: <>Useful Tips <i className="bi bi-chevron-down"></i></>,
      submenu: ['Tip 1', 'Tip 2', 'Tip 3', 'Tip 4'],
    }
  ]

  const [sticky, setSticky] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false);

  const [openSubMenuId, setOpenSubMenuId] = useState(null);


  const toggleSubMenu = (id) => {
    setOpenSubMenuId(openSubMenuId === id ? null : id);
    setSearchOpen(false); // Close search input when opening submenu
  };

  const menuRef = useRef(null);



  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', isSticky);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenSubMenuId(null);
    }
  };

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 220 ? setSticky(true) : setSticky(false);
  };

  return (
    <>
      <BurgerMenu menuLinks={menu} />   {/*michev media-i tivy hasnely display: none;*/}

      <div className='header-container padding-m'>  {/* media-i tivy hasneluc heto display: none;*/}
        <div className="top-panel">
          <p> <i className="bi bi-headset"></i>  (346)200-8494</p>
          <nav>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
            <NavLink to={ROUTES.BLOG}>Blog</NavLink>
            <NavLink to={ROUTES.NEWS}>News</NavLink>
            <NavLink to={ROUTES.FAQ}>FAQs</NavLink>
            <NavLink to={ROUTES.CONTACT}>Contact Us</NavLink>
          </nav>
          <p> <i className="bi bi-envelope-fill"></i> info@autoshippinghouston.com</p>
        </div>

        <header className={`${sticky ? 'is-sticky padding-m' : ''}`}>
          <Link to={ROUTES.HOME}>
            <img src="/Logo.png" />
          </Link>
          <nav ref={menuRef}>
            <ul className='menu'>
              {menu.map(link => (
                <li key={link.id} onClick={() => toggleSubMenu(link.id)}>
                  {link.title}
                  <ul className={`${openSubMenuId === link.id ? 'opened' : ''} submenu`}>
                    {link.submenu.map((sub, index) => (
                      <li key={index}>{sub}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
          <div className='search'>
            <p onClick={() => setSearchOpen(!searchOpen)}><i className="bi bi-search"></i></p>
            <input className={searchOpen ? 'open' : ''} placeholder='Search...' type="search" name="search" id="search" />
          </div>
        </header>
      </div>
    </>
  )
}
