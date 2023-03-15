import React from 'react'
import { Button, Subheading } from '../../components';
import './mainlayout.css'
type Props = {}

const MainLayout = (props: Props) => {
  return (
    <div className='cod__main-layout'>
        <section className='cod__hero' >
            <div className="cod__hero-video">
                <video className='cod__hero-video__src' src="https://cardsofdragon.com//wp-content//uploads//2023//02//dragonmainpage.mp4" autoPlay loop muted></video>
                <div className="cod__hero-content">
                    <div className="cod__hero-txt">
                        <Subheading 
                        isFirst={true}
                        subheadTitle={'CARDS OF DRAGON'}
                        subheadDesc={"THE PRICELESS TREASURE FROM THE DRAGON'S CAVE: FIND THE EGG, ESCAPE FROM THE DRAGON"} 
                        />
                        <div className="cod__hero-btns d-flex">
                            <Button buttonName={'WITHDRAW'} />
                            <Button buttonName={'DEPOSIT'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="cod__intro">
            <div className="cod__intro-background-overlay bg-overlay"></div>
            <div className="cod__intro-content">
                <Subheading  
                subheadTitle={'MOST PRECIOUS TREASURE'}
                subheadDesc={"A THRILLING ADVENTURE FILLED WITH DANGER AND EXCITEMENT TO FIND THE DRAGON'S EGG"}
                />
            </div>
        </section>
        <section className="cod__parallax">
            <div className="cod__parallax-background-overlay">
                <div className="cod__parallax-content">
                    <div className="cod__parallax-wrapper">
                        <div className='cod__parallax-container '>
                            <div className="cod__parallax-img">
                                <img width={2121} height={550} src="https://i0.wp.com/cardsofdragon.com/wp-content/uploads/2023/02/egg.png?resize=1024%2C266&ssl=1" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="cod__story">
            <div className="cod__story-dragon-img">
                <img src="https://cardsofdragon.com/wp-content/uploads/2023/02/flying_dragon.webp" alt="" />
            </div>
            <div className="cod__story-bg-overlay bg-overlay"></div>
            <div className="cod__story-container">
                <div className="cod__story-content-wrap">
                    <div className="cod__story-content">
                        <Subheading
                        subheadTitle={'THE TERRIBLE DRAGON OF THE MOUNTAIN TOPS'}
                        subheadDesc={`IN A CAVE HIGH ATOP THE MOUNTAINS LIVED A FEARSOME 
                        DRAGON. THE DRAGON WOULD OFTEN FLY TO THE NEARBY VILLAGE AND 
                        BREATHE FIRE, BURNING HOMES AND CAUSING GREAT HARM TO CROPS AND PEOPLE. 
                        THE VILLAGERS WERE AFRAID OF THE DRAGON AND DECIDED TO TAKE ACTION BY 
                        FORMING A GROUP OF BRAVE WARRIORS AND SETTING OUT TO STEAL ITS EGGS IN 
                        THE HOPES OF STOPPING ITS ATTACKS.`}
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MainLayout