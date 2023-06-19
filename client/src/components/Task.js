import React from 'react';
import ThreeDots from '../assets/icons/ThreeDots';
import img1 from '../assets/images/Ellipse 12.png'
import img2 from '../assets/images/Ellipse 15.png'
import img3 from '../assets/images/Ellipse 13.png'
import CommentIcon from '../assets/icons/CommentIcon';
import FileIcon from '../assets/icons/FileIcon';
import img from '../assets/images/Plant Care App (Dribbble shot) 1.png'
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
    return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided, snapshot) => {
                return (
                <div className='w-full h-fit bg-white rounded-xl shadow-md p-4' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} isDragging={snapshot.isDragging}>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-center text-[#d58d49] px-1 bg-orange-100 text-[12px] font-medium'>{task.priority}</div>
                        <ThreeDots />
                    </div>

                    <div className='text-[22px] font-semibold text-[#0d062d] leading-[22px] my-2'>{task.title}</div>

                    <div className='flex'>
                        {task.imgList.map((img)=>{
                            <img src={img} alt='' />
                        })}
                    </div>

                    <div>
                        {task.content}
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
                    {provided.placeholder}
                </div>);

            }}
        </Draggable>
    );
};

export default Task;