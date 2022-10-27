import React from 'react';
import BannerSlider from './Slider/BannerSlider';


const Home = () => {
    return (
        <div className='pt-8 pb-8'>
            <h1 className="text-6xl text-center font-extrabold font-mono mb-4">
             Popular Courses
             </h1>
            <BannerSlider></BannerSlider>
        </div>
    );
};

export default Home;