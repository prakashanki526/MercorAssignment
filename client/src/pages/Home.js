import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import PencilIcon from '../assets/icons/PencilIcon';
import LinkIcon from '../assets/icons/LinkIcon';
import AddInvite from '../assets/icons/AddInvite';
import inviteImg1 from '../assets/images/Ellipse 12.png'
import inviteImg2 from '../assets/images/Ellipse 13.png'
import inviteImg3 from '../assets/images/Ellipse 14.png'
import inviteImg4 from '../assets/images/Ellipse 15.png'
import FilterIcon from '../assets/icons/FilterIcon';
import DownArrow from '../assets/icons/DownArrow';
import TodayIcon from '../assets/icons/TodayIcon';
import ShareIcon from '../assets/icons/ShareIcon';
import ListIcon from '../assets/icons/ListIcon';
import GridIcon from '../assets/icons/GridIcon';
import Card1 from '../components/Card1';
import Bluedot from '../assets/icons/Bluedot';
import Greendot from '../assets/icons/Greendot';
import Orangedot from '../assets/icons/Orangedot';

const Home = () => {

    return (
        <div className='h-screen flex'>
            <div className='sidebarContainer w-[16vw] h-full'>
                <Sidebar />
            </div>

            <div className='w-[84vw] flex flex-col h-screen border-l-[1px]'>
                <div className='topbarContainer w-full'>
                    <Topbar />
                </div>
                <div className='w-full px-12'>
                    <div className='w-full flex justify-between items-center my-10'>
                        <div className='flex items-center space-x-3'>
                            <div className='text-[46px] leading-[55.67px] font-semibold text-black'>Mobile App</div>
                            <PencilIcon />
                            <LinkIcon />
                        </div>

                        <div className='flex items-center space-x-3'>
                            <div className='flex items-center space-x-1'>
                                <AddInvite />
                                <div className='text-[#5030e5] font-medium'>Invite</div>
                            </div>
                            <div className='flex -space-x-2'>
                                <img src={inviteImg1} alt='' className='' />
                                <img src={inviteImg2} alt='' className='' />
                                <img src={inviteImg3} alt='' className='' />
                                <img src={inviteImg4} alt='' className='' />
                                <div className='flex items-center justify-center h-[38px] w-[38px] text-[15px] font-medium text-[#d25b68] bg-[#f4d7da] rounded-full border border-white'>+2</div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex justify-between'>
                        <div className='flex space-x-3'>
                            <div className='h-[40px] w-[122px] border-2 border-gray-400 rounded-[6px] flex items-center justify-between px-4'>
                                <FilterIcon />
                                <div className=''>Filter</div>
                                <DownArrow />
                            </div>

                            <div className='h-[40px] w-[122px] border-2 border-gray-400 rounded-[6px] flex items-center px-4 space-x-2'>
                                <TodayIcon />
                                <div className=''>Today</div>
                                <DownArrow />
                            </div>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <div className='h-[40px] w-[97px] border-2 border-gray-400 rounded-[6px] flex items-center px-4 space-x-2'>
                                <ShareIcon />
                                <div className=''>Share</div>
                            </div>

                            <div className='h-[90%] border-r border-gray-400'></div>

                            <div className=''>
                                <ListIcon />
                            </div>
                            <div className=''>
                                <GridIcon />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full px-12 flex justify-between gap-6 mt-10 box'>
                    <div className='w-[30%] rounded-t-xl h-96 bg-slate-100 p-4'>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-3 items-center'>
                                <Bluedot />
                                <div className='text-[#0d062d] font-medium'>To do</div>
                                <div className='h-[20px] w-[20px] text-[#625f6d] text-[12px] flex justify-center items-center bg-slate-200 rounded-full'>3</div>
                            </div>
                            <AddInvite />
                        </div>
                        <div className='mt-4 mb-2 w-full h-1 bg-[#5030e5]'></div>
                        <div className='mt-6 w-full'>
                            <Card1 />
                        </div>
                    </div>

                    <div className='w-[30%] rounded-t-xl h-96 bg-slate-100 p-4'>
                    <div className='flex justify-between items-center'>
                            <div className='flex space-x-3 items-center'>
                                <Orangedot />
                                <div className='text-[rgb(13,6,45)] font-medium'>On Progress</div>
                                <div className='h-[20px] w-[20px] text-[#625f6d] text-[12px] flex justify-center items-center bg-slate-200 rounded-full'>3</div>
                            </div>
                        </div>
                        <div className='mt-4 mb-2 w-full h-1 bg-[#ffa500]'></div>
                    </div>

                    <div className='w-[30%] rounded-t-xl bg-slate-100 p-4'>
                    <div className='flex justify-between items-center'>
                            <div className='flex space-x-3 items-center'>
                                <Greendot />
                                <div className='text-[#0d062d] font-medium'>Done</div>
                                <div className='h-[20px] w-[20px] text-[#625f6d] text-[12px] flex justify-center items-center bg-slate-200 rounded-full'>3</div>
                            </div>
                        </div>
                        <div className='mt-4 mb-2 w-full h-1 bg-[#8bc48a]'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;