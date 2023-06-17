import React from 'react';
import SideIcon from '../assets/icons/SideIcon';
import Sidewrap from '../assets/icons/Sidewrap';
import HomeIcon from '../assets/icons/HomeIcon';
import MessageIcon from '../assets/icons/MessageIcon';
import TasksIcon from '../assets/icons/TasksIcon';
import MembersIcon from '../assets/icons/MembersIcon';
import SettingIcon from '../assets/icons/SettingIcon';
import AddIcon from '../assets/icons/AddIcon';
import Greendot from '../assets/icons/Greendot';
import ThreeDots from '../assets/icons/ThreeDots';
import Orangedot from '../assets/icons/Orangedot';
import Greydot from '../assets/icons/Greydot';
import Bluedot from '../assets/icons/Bluedot';
import BulbIcon from '../assets/icons/BulbIcon';
// import LightShade from '../assets/icons/LightShade';

const Sidebar = () => {
    return (
        <div className='h-full w-full relative'>
            <div className='flex justify-between items-center px-7 h-[4.5rem] border-b-[1px]'>
                <div className='flex items-center space-x-2'>
                    <SideIcon />
                    <div className='text-black text-[20px] font-semibold'>Project M.</div>
                </div>
                <Sidewrap />
            </div>

            <div className='px-3'>
                <div className='mt-3'>
                    <div className='flex space-x-3 items-center px-4 py-2'>
                        <div className=''>
                            <HomeIcon />
                        </div>
                        <div className='flex justify-center'>Home</div>
                    </div>

                    <div className='flex space-x-3 items-center px-4 py-2'>
                        <div className=''>
                            <MessageIcon />
                        </div>
                        <div className='flex justify-center'>Messages</div>
                    </div>

                    <div className='flex space-x-3 items-center px-4 py-2'>
                        <div className=''>
                            <TasksIcon />
                        </div>
                        <div className='flex justify-center'>Tasks</div>
                    </div>

                    <div className='flex space-x-3 items-center px-4 py-2'>
                        <div className=''>
                            <MembersIcon />
                        </div>
                        <div className='flex justify-center'>Members</div>
                    </div>

                    <div className='flex space-x-3 items-center px-4 py-2'>
                        <div className=''>
                            <SettingIcon />
                        </div>
                        <div className='flex justify-center'>Settings</div>
                    </div>
                </div>

                <div className='border my-3'></div>

                <div className='mt-3'>
                    <div className='flex items-center justify-between py-2 px-4'>
                        <div className='text-[#787486] text-[12px] uppercase font-semibold'>my projects</div>
                        <div className=''>
                            <AddIcon />
                        </div>
                    </div>

                        <div className='flex justify-between items-center px-4 py-2 bg-slate-100 rounded-lg'>
                            <div className='flex space-x-3 items-center'>
                                <div className=''>
                                    <Greendot />
                                </div>
                                <div className='flex justify-center font-semibold text-black'>Mobile App</div>
                            </div>

                            <div className=''>
                                <ThreeDots />
                            </div>
                        </div>

                        <div className='flex space-x-3 items-center px-4 py-2'>
                        <div className=''>
                            <Orangedot />
                        </div>
                        <div className='flex justify-center'>Web Redesign</div>
                    </div>

                    <div className='flex space-x-3 items-center px-4 py-2'>
                        <div className=''>
                            <Greydot />
                        </div>
                        <div className='flex justify-center'>Design Systems</div>
                    </div>

                    <div className='flex space-x-3 items-center px-4 py-2'>
                        <div className=''>
                            <Bluedot />
                        </div>
                        <div className='flex justify-center'>Wireframes</div>
                    </div>
                </div>

                <div className='flex w-full justify-center absolute bottom-8 left-0'>
                    <div className='w-[206px] flex flex-col items-center bg-slate-100 h-[200px] relative rounded-2xl px-5'>
                        <div className='h-[3rem] w-[3rem] -mt-[1.5rem] rounded-full overflow-hidden flex justify-center items-center bg-slate-100'>
                            <div className=''>
                                <BulbIcon />
                            </div>
                        </div>

                        <div className='text-center text-black font-medium my-2 text-[14px]'>Thoughts Time</div>

                        <div className='text-center text-[12px] leading-[14.52px] my-1'>We don’t have any notice for you, till then you can share your thoughts with your peers.</div>

                        <div className='my-2 h-[40px] w-full bg-white rounded-[4px] flex items-center justify-center text-center text-black text-[14px] font-medium'>Write a message</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;