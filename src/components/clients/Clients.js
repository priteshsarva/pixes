import React from 'react'
import './Clients.css'
const Clients = () => {
    return <>
        <div className="clients">
            <h1>praise from our clients</h1>
            <h5>Empowering Your Service Experience</h5>
            <div className="clientsreview">
                <div className="clientsreviewImage">

                    <div className="clientsreviewImageLeft">

                        <img className='siteimage ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gYBXTJ8JB4rE0a_XaWa0-nntgZ0F9Al9YQ&usqp=CAU" alt="" />

                        <div className="bubble">
                            <div className="bubbleImage">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gYBXTJ8JB4rE0a_XaWa0-nntgZ0F9Al9YQ&usqp=CAU" alt="" />
                            </div>
                            <div className="bubbletext"><span>Tita arora</span>
                                <span>founder</span></div>
                        </div>
                    </div>
                </div>
                <div className="clientsreviewText">
                    <p>The Pixel team is in the top 5% of product dev shops that I have worked
                        with. They are proactive communicators and have got strong product
                        intuition. If you need something to be done quickly and do not want to
                        worry about the details, work with Pixel.The Pixel team is in the top 5%
                        of product dev shops that I have worked with. They are proactive
                        communicators and have got strong product intuition. If you need
                        something to be done quickly and do not want to worry about the
                        details, work with Pixel.</p>
                </div>
            </div>
        </div>

    </>
}

export default Clients
