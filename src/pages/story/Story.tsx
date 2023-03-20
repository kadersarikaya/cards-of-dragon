import React from 'react'
import { Footer, Navbar} from '../../components'
import './story.css'
import '../../components/subheading/subheading.css'
type Props = {}

const Story = (props: Props) => {
  return (
  <>
    <Navbar />
    <section className='cod__story'>
      <div className="cod__story-overlay"></div>
      <div className="cod__story-container">
        <div className="cod__story-wrapper">
          <div className="cod__subheading">
            <div className="cod__subheading-title">
              <div className="cod__subheading-title-container">
                <h3 className='cod__subheading-title__big'>STORY</h3>
              </div>
            </div>
            <div className="cod__subheading-divider">
              <div className="cod__subheading-divider-container">
                <div className="cod__subheading-divider-wrapper">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="cod__story-navigation">
            <div className="cod__story-links">
              <a href="/">
                HOME  
              </a> 
              <b></b> / STORY
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    <section className="cod__story-list">
      <div className="cod__story-list-container">
        <div className="cod__story-list-wrapper">
          <div className="cod__subheading">
            <div className="cod__subheading-title">
              <div className="cod__subheading-title-container">
                <h3 className='cod__subheading-title__base'>
                  THE FEARSOME DRAGON AND THE BRAVE WARRIORS
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
            <div className="cod__story-desc">
              <div className="cod__story-desc-container">
                <p className='cod__story-paragraph'>
                <span className='cod__story-desc__span'>
                  Once upon a time, there 
                    was a fearsome dragon that lived in a cave high up in the mountains. 
                   The dragon would often fly down to the nearby village and breathe fire, 
                  burning houses and crops, and causing great harm to the people. 
                </span>
                </p>
                <p className='cod__story-paragraph'>
                  <span className='cod__story-desc__span'>
                    The villagers were terrified of the dragon and decided to take action. 
                    They formed a group of brave warriors and set out to the dragon’s cave
                    to steal its eggs, in hopes that this would stop the dragon from harming 
                    them any further. 
                  </span>
                </p>
                <p className='cod__story-paragraph'>
                  <span className='cod__story-desc__span'>
                    The warriors climbed to the top of the mountain 
                    and entered the dragon’s cave. They were met with 
                    a fierce battle, as the dragon fiercely defended its 
                    eggs. But the warriors were determined and managed to 
                    steal one of the eggs. 
                  </span>
                </p>
                <p className='cod__story-paragraph'>
                  <span className='cod__story-desc__span'>
                    The dragon was furious and flew down to the 
                    village, determined to get its egg back. The 
                    villagers, now armed with the stolen egg, used 
                    it as a bargaining chip and made a deal with the 
                    dragon. They promised to return the egg if the dragon
                     would promise never to harm the village again.  
                  </span>
                </p>
                <p className='cod__story-paragraph'>
                  <span className='cod__story-desc__span'>
                    The dragon agreed to the deal and the egg was 
                    returned. From that day on, the dragon kept its 
                    promise and never harmed the village again. The 
                    villagers lived in peace and prosperity, and the 
                    dragon’s egg hatched into a beautiful dragonling 
                    that eventually took its place as the guardian of 
                    the village.  
                  </span>
                </p>
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

export default Story