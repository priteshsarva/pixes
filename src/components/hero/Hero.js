import React from 'react'
import './Hero.css'
import wave1 from '../../assets/images/wave-1.png'
import wave2 from '../../assets/images/wave-2.png'


const Hero = () => {
    return <>
        <span className='wave1' ><img src={wave1} alt="wave1" /></span>
        <span className='wave2' ><img src={wave2} alt="wave2" /></span>
        <div id="hero">
            <div className='backgroundpatch'></div>

            <div className="herocontent">
                <div id="heading">
                    <h1>Landing Page</h1>
                </div>
                <div id="desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum</p>
                </div>
                <a href='/'>know more</a>
            </div>



        </div>



    </>
}

export default Hero