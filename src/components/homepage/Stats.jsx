'use client'
import React from 'react';
import useFriends from '../hooks/useFriends';



const Stats = () => {
    const { friends = []} = useFriends();
    console.log(friends);
    
    
const onTrack = friends.filter(friend => friend.status === "on-track");

    const needAttention = friends.filter(friend => friend.status === "almost due" || friend.status === 'overdue');

    console.log(onTrack, needAttention);
   
    return (
       <div className=" mx-auto stats stats-vertical grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 my-4">
            <div className=' bg-white mx-auto flex  flex-col items-center justify-center h-30 w-50  rounded-lg gap-2'>
                <h3 className='text-bold text-5xl text-[#3d5217]'>{friends.length}</h3>
                <p className='text-lg font-semibold text-gray-600'>Total Friends</p>
 </div>
            <div className=' bg-white mx-auto flex  flex-col items-center justify-center h-30 w-50 gap-2  rounded-lg'>
                <h3 className='text-bold text-5xl text-[#3d5217]'>{onTrack.length}</h3>
                <p className='text-lg font-semibold text-gray-600'>On Track</p>
 </div>
            <div className=' bg-white mx-auto flex  flex-col items-center justify-center  h-30 w-50  gap-2  rounded-lg shadow-xl'>
                <h3 className='text-bold text-5xl text-[#3d5217]'>{needAttention.length}</h3>
                <p className='text-lg font-semibold text-gray-600'>Need Attention</p>
 </div>
            <div className=' bg-white mx-auto flex  flex-col items-center justify-center h-30 w-50  gap-2  rounded-lg shadow-xl'>
                <h3 className='text-bold text-5xl text-[#3d5217]'>{friends.length}</h3>
                <p className='text-lg font-semibold text-gray-600'>Total Friends</p>
 </div>
</div>
    );
};

export default Stats;