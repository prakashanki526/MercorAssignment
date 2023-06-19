import React from 'react';
import Calender from '../assets/icons/Calender';
import Question from '../assets/icons/Question';
import BellIcon from '../assets/icons/BellIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';
import profileImg from '../assets/images/image 1.png';
import SearchIcon from '../assets/icons/SearchIcon';

const Topbar = () => {
    return (
        <div className='h-[4.5rem] px-3 md:px-6 lg:px-12 border-b-[1px] items-center flex justify-between w-full'>
            <div className='relative'>
                <input type='text' className='h-[44px] text-[14px] pl-10 pr-4 w-[200px] lg:w-[417px] rounded-[6px] bg-[#f5f5f5] outline-none tracking-wide' placeholder='Search for anything...' />
                <div className='absolute h-full flex items-center justify-center left-0 top-0 px-2'>
                    <SearchIcon />
                </div>

            </div>

            <div className='flex items-center space-x-8 lg:space-x-12'>
                <div className='flex space-x-3 lg:space-x-6'>
                    <div className='cursor-pointer hover:scale-110 transition-all'>
                    <Calender />
                    </div>
                    <div className='cursor-pointer hover:scale-110 transition-all'>
                    <Question />
                        
                    </div>
                    <div className='cursor-pointer hover:scale-110 transition-all'>
                    <BellIcon />
                        
                    </div>
                </div>

                <div className='flex space-x-4'>
                    <div className='hidden lg:flex flex-col'>
                        <div className='text-[16px] font-normal leading-[19.36px] text-right text-[#0d062d]'>Anima Agrawal</div>
                        <div className='text-[14px] font-normal leading-[16.94px] text-right text-[#787486]'>U.P, India</div>
                    </div>
                    <div className='flex space-x-2 items-center cursor-pointer'>
                        <div className='rounded-full overflow-hidden'>
                            <img src={profileImg} alt='' />
                        </div>
                        <ProfileIcon />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Topbar;