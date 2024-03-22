import React from 'react'
import './Services.css'

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

const Services = () => {
    return <>
        <div className="services">
            <h1>services we provide</h1>
            <h5>Empowering Your Service Experience</h5>
            <div className="cards">
                <img src="https://cdn.pixabay.com/photo/2023/04/29/06/33/color-7957847_960_720.jpg" alt="slide-1" />
                <img src="https://cdn.pixabay.com/photo/2016/03/28/09/50/firework-1285261_1280.jpg" alt="slide-3" />
                <img src="https://cdn.pixabay.com/photo/2023/04/29/06/33/color-7957849_1280.jpg" alt="slide-2" />
            </div>
        </div>
    </>

}

export default Services
