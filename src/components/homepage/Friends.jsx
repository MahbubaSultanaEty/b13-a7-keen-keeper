'use client'
import React from 'react';
import useFriends from '../hooks/useFriends';
import FriendCard from '../ui/FriendCard';

const Friends = () => {

    const { friends = [] } = useFriends();
    console.log(friends);
    return (
        <div className='w-11/12 mx-auto'>
          <h2 className="text-2xl font-semibold">Your Friends</h2>  
            <div className='my-6 grid grid-cols-1  mx-auto md:grid-cols-2 lg:grid-cols-4 gap-4'>
                 {
                friends.map(friend => <FriendCard key={friend.id} friend={friend}/>)
            }
        </div>
           
        </div>
    );
};

export default Friends;