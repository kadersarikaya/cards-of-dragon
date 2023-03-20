import React from 'react'
import './rules.css'
import { Footer, Navbar} from '../../components'
import '../../components/subheading/subheading.css'

type Props = {}

const Rules = (props: Props) => {
  return (
    <>
    <Navbar />
    <section className='cod__rules'>
      <div className="cod__rules-overlay"></div>
      <div className="cod__rules-container">
        <div className="cod__rules-wrapper">
          <div className="cod__subheading">
            <div className="cod__subheading-title">
              <div className="cod__subheading-title-container">
                <h3 className='cod__subheading-title__big'>RULES</h3>
              </div>
            </div>
            <div className="cod__subheading-divider">
              <div className="cod__subheading-divider-container">
                <div className="cod__subheading-divider-wrapper">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="cod__rules-navigation">
            <div className="cod__rules-links">
              <a href="">
                HOME 
              </a>
            <b></b>  / RULES
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    <section className="cod__rules-list">
      <div className="cod__rules-bg-overlay"></div>
      <div className="cod__rules-list-container">
        <div className="cod__rules-list-wrapper">
          <div className="cod__subheading">
            <div className="cod__subheading-title">
              <div className="cod__subheading-title-container">
                <h3 className='cod__subheading-title__base'>
                  CARDS OF DRAGON: RULES OF THE GAME
                </h3>
              </div>
            </div>
            <div className="cod__subheading-divider">
              <div className="cod__subheading-divider-container">
                <div className="cod__subheading-divider-wrapper">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="cod__rules-desc">
              <div className="cod__rules-desc-container">
                <ul className="cod__rules__ul">
                  <li className='cod__rules__list'>
                    Playable only by two.
                    <br />
                    <br />
                  </li>
                  <li className='cod__rules__list'>
                    Players need to connect to a Web3 wallet.
                    <br />
                    <br />
                  </li>
                  <li className='cod__rules__list'>
                    There are 40 cards in each game, where 1 card is 
                    hiding an egg and 1 card is hiding a dragon while 38 cards are empty.
                    <br />
                    <br />
                  </li>
                  <li className='cod__rules__list'>
                    Game continues until one of the players finds either a dragon or egg card.
                    <br />
                    <br />
                  </li>
                  <li className='cod__rules__list'>
                    When a player finds the egg card, the counterpart loses the total balance, and the 
                    finder receives 80% of the balance belonging to the counterpart.
                    <br />
                    <br />
                  </li>
                  <li className='cod__rules__list'>
                    When a player finds the dragon card, this player loses the total balance, and the 
                    counterpart receives 20% of the balance belonging to the finder.
                    <br />
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>      
        </div>
      </div>
    </section>
    <Footer/>
  </>
  )
}

export default Rules