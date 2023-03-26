import React,{useState} from 'react'
import {Button} from '../../components'
import './navbar.css'
import logo from '../../assets/logo/logo.svg'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

type Props = {}
const Navbar = (props: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  }
  const handleClose = () => {
    setToggleMenu(false);
  }
  const location = useLocation();
  let currentPath = location.pathname;

  return (
    <nav className="cod__navbar">
      <div className="cod__navbar-container">
        <div className="cod__navbar-logo-wrapper">
          <div className="cod__navbar-logo">
            <div className="cod__navbar-logo-container">
              <div className='cod__navbar-logo__img'>
               <div className="">
                <Link  to='/'>
                  <a>
                    <img width={240} height={212} src={logo} alt="" />
                  </a>
                </Link>
               </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cod__navbar-menu">
          <div className="cod__navbar-menu-container">
            <div className="cod__navbar-hamburger-menu">
              <div className="cod__navbar-widget-menu">
                <div className="cod__navbar-responsive-menu">
                  <button onClick={handleToggle} className='cod__hamburger-btn' >
                    <span className='cod__hamburger-btn__span'></span>
                    <span className='cod__hamburger-btn__span'></span>
                    <span className='cod__hamburger-btn__span'></span>
                  </button>
                  <div className={toggleMenu ? `cod__navbar-menu-links cod__open` : `cod__navbar-menu-links` }>
                    <ul className='cod__navbar-menu-links__ul'>
                      <li><Link to='/'><a className={currentPath === "/" ?`red`: ``} href="">HOME</a></Link></li>
                      <li><Link to='/story'><a className={currentPath === "/story" ?`red`: ``} href="">STORY</a></Link></li>
                      <li><Link to='/rules'><a className={currentPath === "/rules" ?`red`: ``} href="">RULES</a></Link></li>
                    </ul>
                    <div className="cod__navbar-identity-panel">
                      <div className="cod__navbar-panel-title">
                        <a className='cod__navbar-panel__logo' href=""></a>
                      </div>
                      <button onClick={handleClose} className='cod__navbar-close-btn'>X</button>
                    </div>
                  </div>
                  <div className={toggleMenu ? `cod__navbar-menu-overlay cod__open` : `cod__navbar-menu-overlay`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cod__navbar-btn">
          <div className="cod__navbar-btn-container">
            <Button 
               buttonName="PLAY"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

