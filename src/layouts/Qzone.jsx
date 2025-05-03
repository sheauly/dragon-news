import React from 'react';
import swimmingImage from "../../src/assets/swimming.png";
import classImage from "../../src/assets/class.png";
import playImage from "../../src/assets/playground.png"
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-bold mb-5'>Qzone</h1>
            <div className='space-y-3 justify-center items-center'>
                <img src={swimmingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;