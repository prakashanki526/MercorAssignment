import React from 'react';
import ThreeDots from '../assets/icons/ThreeDots';
import img1 from '../assets/images/Ellipse 12.png'
import img2 from '../assets/images/Ellipse 15.png'
import img3 from '../assets/images/Ellipse 13.png'
import CommentIcon from '../assets/icons/CommentIcon';
import FileIcon from '../assets/icons/FileIcon';
import cardImg1 from '../assets/images/unsplash_BS_1XGRkIH4.png'
import cardImg2 from '../assets/images/unsplash_KIqJfzbII9w.png'

const Card3 = () => {
    return (
        <div className='w-full h-fit bg-white rounded-xl shadow-md p-4'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center justify-center text-[#d58d49] px-1 bg-orange-100 text-[12px] font-medium'>Low</div>
            <ThreeDots />
        </div>

        <div className='text-[22px] font-semibold text-[#0d062d] leading-[22px] my-2'>Moodboard</div>

        <div className='flex justify-between space-x-1'>
            <img src={cardImg1} alt='' />
            <img src={cardImg2} alt='' />
        </div>

        <div className='flex justify-between items-center mt-6'>
            <div className='flex items-center -space-x-1'>
                <img src={img1} className='h-6 object-cover' alt='' />
                <img src={img2} className='h-6 object-cover' alt='' />
                <img src={img3} className='h-6 object-cover' alt='' />
            </div>

            <div className='flex items-center space-x-3'>
                <div className='flex space-x-1 items-center'>
                    <CommentIcon />
                    <div className='text-[12px] font-medium'>10 Comments</div>
                </div>
                <div className='flex space-x-1 items-center'>
                    <FileIcon />
                    <div className='text-[12px] font-medium'>0 Files</div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Card3;