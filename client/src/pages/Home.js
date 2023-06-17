import React from 'react';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div className='h-screen flex'>
            <div className='sidebarContainer w-[16vw] h-full'>
                <Sidebar />
            </div>

            <div className='w-[84vw] h-full border border-red-500'>

            </div>
        </div>
    );
};

export default Home;