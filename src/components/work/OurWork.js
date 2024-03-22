import React, { useEffect, useRef } from 'react'
import './OurWork.css'
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);


const OurWork = () => {


    useGSAP(() => {

        gsap.set(document.querySelector('.fphotos').querySelectorAll(':not(:first-child)'), { opacity: 0, scale: 0.5 })
        gsap.to(document.querySelector('.fphotos').querySelectorAll(':not(:first-child)'), {
            scrollTrigger:{
                trigger: '.fimages',
                start: 'top top',
                end: 'bottom bottom',
                endTrigger: '.last',
                scrub: 1,
            },
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 1
        })


        gsap.to('.fleftelme', {
            scrollTrigger: {
                trigger: '.fimages',
                pin: true,
                start: 'top top',
                end: 'bottom bottom',
                endTrigger: '.last',
                scrub: 1,
            },
            y: '-300%',
            ease: Power1,
        })


    })




    return <>

        <div className="fimages">
            <div className="fleft">
                <div className="fleftelme">
                    <h1 className='box'>our work1</h1>
                    <h5>Empowering Your Service Experience</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum</p>
                </div>
                <div className="fleftelme ">
                    <h1 className='box'>our work2</h1>
                    <h5>Empowering Your Service Experience</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum</p>
                </div>
                <div className="fleftelme ">
                    <h1 className='box'>our work3</h1>
                    <h5>Empowering Your Service Experience</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum</p>
                </div>
                <div className="fleftelme last ">
                    <h1 className='box'>our work4</h1>
                    <h5>Empowering Your Service Experience</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum</p>
                </div>

            </div>
            <div className="fright">
                <div className="fphotos">
                    <img className='fphoto' src="https://cdn.pixabay.com/photo/2023/04/29/06/33/color-7957847_960_720.jpg" alt="slide-1" />
                    <img className='fphoto ' src="https://cdn.pixabay.com/photo/2023/04/29/06/33/color-7957849_1280.jpg" alt="slide-2" />
                    <img className='fphoto ' src="https://cdn.pixabay.com/photo/2016/03/28/09/50/firework-1285261_1280.jpg" alt="slide-3" />
                    <img className='fphoto' src="https://cdn.pixabay.com/photo/2016/03/28/09/50/firework-1285261_1280.jpg" alt="slide-3" />
                </div>

            </div>
        </div>
    </>

}

export default OurWork
