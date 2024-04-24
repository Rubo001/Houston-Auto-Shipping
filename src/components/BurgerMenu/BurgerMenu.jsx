import { useEffect, useState } from "react";
import './BurgerMenu.scss'

export default function BurgerMenu({ menuLinks }) {

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)


  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  useEffect(() => {
    const handleClick = (e) => {
      const menu = document.querySelector('.menu');
      const menuIcon = document.querySelector('.burger-menu');
      const burgerBars = document.querySelectorAll('.burger-bar');


      if (
        !menu.contains(e.target) &&
        isMenuClicked &&
        e.target !== menuIcon &&
        !Array.from(burgerBars).some(bar => bar.contains(e.target))
      ) {
        updateMenu();
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isMenuClicked]);


  return (
    <div className="BurgerMenu">
      <nav>
        <a href="#">
          <img src="/Logo.png" />
        </a>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
        </div>
      </nav>

      <div className={menu_class}>
        <a href="#">
          <img src="/Logo.png" />
          <span onClick={updateMenu}>&#10005;</span>
        </a>
        <ul className="bLinks">
          {
            menuLinks.map(link => {
              return <li key={link.id}>
                {link.title}
                <ul className='bSublinks'>
                  {
                    link.submenu.map((sub, index) => {
                      return <li key={index}>{sub}</li>
                    })
                  }
                </ul>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}
