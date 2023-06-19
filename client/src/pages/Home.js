import React, { useEffect, useState } from 'react';
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
// import Card1 from '../components/Card1';
import Bluedot from '../assets/icons/Bluedot';
import Greendot from '../assets/icons/Greendot';
import Orangedot from '../assets/icons/Orangedot';
// import Card2 from '../components/Card2';
// import Card3 from '../components/Card3';
// import Card4 from '../components/Card4';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Task from '../components/Task';

const Home = () => {
    const [todo, setTodo] = useState([
        {
            priority: "Low",
            content: "ahv shah avh shvh",
            imgList: [],
            id: '1',
            title: "Title"
        },
        {
            priority: "Low",
            content: "shah avh shvh",
            imgList: [],
            id: '2',
            title: "Title 2"
        }
    ])
    const [inProgress, setInProgress] = useState([])
    const [completed, setCompleted] = useState([])

    // const td = [
    //     {
    //         priority: "Low",
    //         content: "ahv shah avh shvh",
    //         imgList: [],
    //         id: '1',
    //         title: "Title"
    //     },
    //     {
    //         priority: "Low",
    //         content: "shah avh shvh",
    //         imgList: [],
    //         id: '2',
    //         title: "Title 2"
    //     }
    // ]

    useEffect(() => {
        // setTodo(td);
    }, [])

    function removeItemById(id, array) {
        return array.filter((item) => item.id != id)
    }

    function findItemById(id, array) {
        return array.find((item) => item.id == id)
    }

    function handleDragEnd(result) {
        const { destination, source, draggableId } = result;

        if (!destination?.droppableId || source.droppableId == destination?.droppableId) return;

        if (source.droppableId == 1) {
            setTodo(removeItemById(draggableId, todo));
            // console.log('a');
        } else if (source.droppableId == 2) {
            setInProgress(removeItemById(draggableId, inProgress));
            // console.log('b');
        } else {
            setCompleted(removeItemById(draggableId, completed));
            // console.log('c');
        }

        const task = findItemById(draggableId, [...todo, ...inProgress, ...completed])

        if (destination.droppableId == 1) {
            setTodo([{ ...task }, ...todo]);
        } else if (destination.droppableId == 2) {
            setInProgress([{ ...task }, ...inProgress]);
        } else{
            setCompleted([{ ...task }, ...completed]);
        }
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
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
                        <div className='w-[30%] rounded-xl bg-[#f5f5f5] p-4 flex flex-col'>
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3 items-center'>
                                    <Bluedot />
                                    <div className='text-[#0d062d] font-medium'>To do</div>
                                    <div className='h-[20px] w-[20px] text-[#625f6d] text-[12px] flex justify-center items-center bg-slate-200 rounded-full'>{todo.length}</div>
                                </div>
                                <AddInvite />
                            </div>
                            <div className='mt-4 mb-2 w-full h-1 bg-[#5030e5]'></div>

                            <Droppable droppableId="1">
                                {(provided, snapshot) => {
                                    return (
                                    <div className='mt-6 w-full space-y-3 grow overflow-auto h-full' ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver} provided={provided}>

                                        {todo.map((task, index) => {
                                           return (<Task task={task} index={index} />);
                                        })}
                                        {provided.placeholder}
                                    </div>);
                                }}
                            </Droppable>
                        </div>


                        <div className='w-[30%] rounded-t-xl bg-[#f5f5f5] p-4 flex flex-col'>
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3 items-center'>
                                    <Orangedot />
                                    <div className='text-[rgb(13,6,45)] font-medium'>On Progress</div>
                                    <div className='h-[20px] w-[20px] text-[#625f6d] text-[12px] flex justify-center items-center bg-slate-200 rounded-full'>{inProgress.length}</div>
                                </div>
                            </div>
                            <div className='mt-4 mb-2 w-full h-1 bg-[#ffa500]'>
                            </div>

                            <Droppable droppableId="2">
                                {(provided, snapshot) => {
                                    return (
                                    <div className='mt-6 w-full space-y-3 grow overflow-auto h-full' ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver} provided={provided}>
                                        {inProgress.map((task, index) => {
                                           return (<Task task={task} index={index} />);
                                        })}

                                        {provided.placeholder}

                                    </div>);
                                }}
                            </Droppable>
                        </div>

                        <div className='w-[30%] rounded-t-xl bg-[#f5f5f5] p-4 overflow-hidden flex flex-col'>
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3 items-center'>
                                    <Greendot />
                                    <div className='text-[#0d062d] font-medium'>Done</div>
                                    <div className='h-[20px] w-[20px] text-[#625f6d] text-[12px] flex justify-center items-center bg-slate-200 rounded-full'>{completed.length}</div>
                                </div>
                            </div>
                            <div className='mt-4 mb-2 w-full h-1 bg-[#8bc48a]'></div>

                            <Droppable droppableId="3">
                                {(provided, snapshot) => {
                                    return (
                                    <div className='mt-6 w-full space-y-3 grow overflow-auto h-full' ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver} provided={provided}>
                                        {completed.map((task, index) => {
                                           return (<Task task={task} index={index} />);
                                        })}

                                        {provided.placeholder}
                                    </div>);
                                }}
                            </Droppable>
                        </div>
                    </div>
                </div>
            </div>
        </DragDropContext>
    );
};

export default Home;