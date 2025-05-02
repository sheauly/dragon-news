import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={60} className='flex gap-4'>
                <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, molestias quis? Quam, quibusdam vel. Explicabo optio illum id veritatis saepe?</p>
                <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, molestias quis? Quam, quibusdam vel. Explicabo optio illum id veritatis saepe?</p>
                <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, molestias quis? Quam, quibusdam vel. Explicabo optio illum id veritatis saepe?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
