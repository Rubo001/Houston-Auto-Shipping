import { useState } from "react";
import './BurgerMenu.scss'

export default function BurgerMenu() {

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
        <ul>
          <li>Home</li>
          <li>Free Quote</li>
          <li>About US  <i className="bi bi-chevron-down"></i></li>
          <li>Why Choose Our Services<i className="bi bi-chevron-down"></i></li>
          <li>Services <i className="bi bi-chevron-down"></i></li>
          <li>Useful Tips <i className="bi bi-chevron-down"></i></li>
        </ul>
      </div>
    </div>
  )
}
