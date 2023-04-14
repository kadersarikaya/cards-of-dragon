import React  from 'react'
import { Button, Subheading } from '../../components';
import './mainlayout.css'
import '../../components/subheading/subheading.css'
import '../../components/button/button.css'
import {motion} from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Video from '../../assets/dragonmainpage.mp4'
import egg from '../../assets/egg.png'
import FlyingDragon from '../../assets/flying_dragon.png'
import DragonCard from '../../assets/dragoncards.png'
type Props = {}

const MainLayout = (props: Props) => {
  return (
    <div className='cod__main-layout'>
        <section className='cod__hero' >
            <div className="cod__hero-video">
                <video className='cod__hero-video__src' src={Video} autoPlay loop muted></video>
            </div>
            <div className="cod__hero-content">
                <motion.div 
                initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{duration: 1}}
                className="cod__hero-txt">
                   <div className="cod__subheading cs__important">
                        <div className="cod__subheading-title">
                            <div className="cod__subheading-title-container">
                            <h1 className='cod__subheading-title__first'>CARDS OF DRAGON</h1>
                            </div>
                        </div>
                        <div className="cod__subheading-divider">
                            <div className="cod__subheading-divider-container">
                            <div className="cod__subheading-divider-wrapper">
                                <span></span>
                            </div>
                            </div>
                        </div>
                        <div className="cod__subheading-desc">
                            <div className="cod__subheading-desc-container">
                                <h2>THE PRICELESS TREASURE FROM THE DRAGON'S CAVE: FIND THE EGG, ESCAPE FROM THE DRAGON</h2>
                            </div>
                        </div>
                        <div className="cod__iconic-btns">
                            <div className="cod__iconic-btn cod__btn-mt">
                            <div className="cod__iconic-btn-container">
                                <a href="/#" >WITHDRAW</a>
                            </div>
                        </div>
                        <div className="cod__iconic-btn cod__btn-mt">
                            <div className="cod__iconic-btn-container">
                                <a href="/#" >DEPOSIT</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
        {/* 1 */}
        <section className="cod__slogan-section cod__slogan__1">
            <div className="cod__bg-overlay bg-overlay-1"></div>
            <div className="cod__slogan-container">
                <motion.div className="cod__slogan-wrapper" 
                initial={{opacity:0, y: 100}}  
                 whileInView={{opacity:1, y:0}} transition={{duration: 1}}>
                    <Subheading 
                    subheadDesc="A THRILLING ADVENTURE FILLED WITH DANGER AND EXCITEMENT TO FIND THE DRAGON'S EGG" 
                    subheadTitle='MOST PRECIOUS TREASURE' />
                </motion.div>
            </div>
        </section>
        <section className='cod__dragon-egg'>
            <div className="cod__dragon-egg-container">
                <motion.div className="cod__dragon-egg-wrapper" 
                initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{duration: 1}}>
                    <div className="cod__dragon-egg-content">
                        <div className="cod__dragon-egg-layout">
                            <div className="cod__dragon-egg-img">
                                <img width={2121} height={550} src={egg} alt="" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
        {/* 2 */}
        <section className="cod__slogan-section cod__same">
            <div className="cod__slogan-dragon-img">
                <img src={FlyingDragon} alt="" />
            </div>
            <div className="cod__bg-overlay bg-overlay-2"></div>
            <div className="cod__slogan-container">
                <motion.div className="cod__slogan-wrapper"
                initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{duration: 1}}>
                    <Subheading
                    subheadTitle='THE TERRIBLE DRAGON OF THE MOUNTAIN TOPS'
                    subheadDesc="IN A CAVE HIGH ATOP THE MOUNTAINS LIVED A 
                    FEARSOME DRAGON. THE DRAGON WOULD OFTEN FLY TO THE NEARBY 
                    VILLAGE AND BREATHE FIRE, BURNING HOMES AND CAUSING GREAT 
                    HARM TO CROPS AND PEOPLE. THE VILLAGERS WERE AFRAID OF THE 
                    DRAGON AND DECIDED TO TAKE ACTION BY FORMING A GROUP OF BRAVE 
                    WARRIORS AND SETTING OUT TO STEAL ITS EGGS IN THE HOPES OF 
                    STOPPING ITS ATTACKS."
                    />
                </motion.div>
            </div>
        </section>
        {/* 3 */}
        <section className="cod__slogan-section cod__same">
            <div className="cod__bg-overlay bg-overlay-3"></div>
            <div className="cod__slogan-container">
                <motion.div initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{duration: 1}}
                className="cod__slogan-wrapper">
                    <Subheading
                    subheadTitle='THE FIRE-BREATHING DRAGON THREATENING THE VILLAGE'
                    subheadDesc="A DRAGON USED TO FLY FREQUENTLY TO THE NEARBY VILLAGE, 
                    WHERE IT WOULD UNLEASH FIRE AND BURN DOWN HOUSES AND CROPS, CAUSING
                     GREAT HARM TO PEOPLE AND THE LAND. THE VILLAGERS WERE ALARMED BY 
                     THIS DANGEROUS SITUATION AND DECIDED TO TAKE ACTION TO FIND A 
                     SOLUTION."
                    />
                </motion.div>
            </div>
        </section>
        {/* 4 */}
        <section className="cod__slogan-section cod__same">
            <div className="cod__bg-overlay bg-overlay-4"></div>
            <div className="cod__slogan-container">
                <motion.div className="cod__slogan-wrapper"
                initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{duration: 1}}>
                    <Subheading
                    subheadTitle="BRAVE WARRIORS SET OUT TO STEAL DRAGON'S EGGS"
                    subheadDesc="THE VILLAGERS FORMED A GROUP OF BRAVE WARRIORS AND 
                    EMBARKED ON A JOURNEY TO THE DRAGON'S CAVE WITH THE GOAL OF STEALING 
                    ITS EGGS. THEY HOPED THAT BY TAKING THE EGGS, THEY WOULD BE ABLE TO PUT 
                    A STOP TO THE DRAGON'S DESTRUCTIVE ACTIONS AND ENSURE THE SAFETY OF THEIR VILLAGE."
                    />
                </motion.div>
            </div>
        </section>
        {/* 5 */}
        <section className="cod__slogan-section cod__same">
            <div className="cod__bg-overlay bg-overlay-5"></div>
            <div className="cod__slogan-container">
                <motion.div className="cod__slogan-wrapper" 
                initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{duration: 1}}>
                    <Subheading
                    subheadTitle="WIN OR LOSE"
                    subheadDesc="FIND THE CARD HIDING EGG AND HAVE THE PROSPERITY OR LOSE BY FINDING THE DRAGON CARD."
                    />
                </motion.div>
            </div>
        </section>
        {/* 6 */}
        <section className="cod__slogan-section cod__slogan__6">
            <div className="cod__bg-overlay bg-overlay-6"></div>
            <div className="cod__slogan-container">
                <motion.div className="cod__slogan-wrapper"
                initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{duration: 1}}>
                    <Subheading
                    subheadTitle="CHALLENGE YOUR LIMITS AND WIN: CARDS OF DRAGON"
                    subheadDesc='THE STAKES ARE HIGH, BUT THE REWARDS ARE EVEN GREATER. WILL YOU RISE TO THE CHALLENGE AND CLAIM VICTORY? FIND OUT BY PLAYING "CARDS OF DRAGON" TODAY!'
                    />
                    <div className="mt-20">
                        <Button buttonName="PLAY" />
                    </div>
                </motion.div>
            </div>
        </section>
        <section className="cod__mouse-based-layout">
            <div className="cod-mouse-based-layout__container">
                <div className="cod-mouse-based-layout__wrapper">
                    <div className="cod-mouse-based-layout__content">
                        <div className="cod-mouse-based-layout__layout">
                            <div className="cod-mouse-based-layout__img">
                                <Tilt transitionSpeed={5500}>
                                    <img width={1577} height={"1444"} src={DragonCard} alt="" />
                                </Tilt>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MainLayout