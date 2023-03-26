import React from 'react'
import {FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import './footer.css';
import logo from '../../assets/logo/logo.svg';
import { Link } from 'react-router-dom';
type Props = {}

const Footer = (props: Props) => {
  return (
    <>
    <section className='cod__footer'>
      <div className="cod__footer-overlay cod__bg-overlay"></div>
        <div className="cod__footer-container">
          <div className="cod__footer-wrapper">
            <div className="cod__footer-content">
              <section className="cod__footer-layout">
                <div className="cod__footer-layout-items">
                  <div className="cod__footer-item">
                    <div className="cod__footer-logo">
                      <div className="cod__footer-logo-img">
                        <div className="cod__footer-logo-img__overlay">
                          <Link to='/'><a><img src={logo} alt="" /></a></Link>
                         </div>
                        </div>
                        <div className="cod__footer-item__btm">
                          <div className="cod__footer-item__title">
                            <h5>A BATTLE TO FIND THE DRAGON'S EGG</h5>
                          </div>
                        </div>
                    </div>
                  </div>
                <div className="cod__footer-layout-items__links">
                  <div className="cod__footer-navigation">
                     <div className="cod__footer-navigation-title">
                        <h5>NAVIGATION</h5>
                     </div>
                      <div className="cod__footer-navigation-link">
                        <div className="cod__footer__link">
                         <a href='cardsofdragon.com/' ><h5>HOME</h5></a>
                        </div>
                      </div>
                      <div className="cod__footer-navigation-link">
                        <div className="cod__footer__link">
                          <a href='cardsofdragon.com/story'><h5>STORY</h5></a>
                        </div>
                       </div>
                        <div className="cod__footer-navigation-link">
                         <div className="cod__footer__link">
                           <a href="cardsofdragon.com/rules"><h5>RULES</h5></a>
                          </div>
                         </div>
                        </div>
                    </div>
                    <div className="cod__footer-social">
                      <div className="cod__footer-social-container">
                         <div className="cod__footer-social-title">
                           <h5>SOCIAL</h5>
                          </div>
                        <div className="cod__footer-social-icons">
                          <ul className='cod__footer-social-icons-list'>
                            <li><a target="blank" href="https://twitter.com/cardsofdragon"><FaTwitter size={24} /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
            </div>
          </div>
      </div>
    </section>
    <section className='cod__copyright' > 
      <div className="cod__copyright-container">
        <div className="cod__copyright-wrapper">
          <div className="cod__copyright-content">
            <div className="cod__copyright-content__text">
              <div className="cod__copyright-content__text__title">
                <div className="cod__copyright-content__text__title__overlay">
                  <h6 className='cod__copyright__h6' >
                    Copyright ©
                    <span>
                    <span>Cards of Dragon</span>
                    </span>
                    . All Right Reserved.
                   </h6>
                </div>
              </div>
            </div>
           </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer;