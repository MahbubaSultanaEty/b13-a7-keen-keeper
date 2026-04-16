import React from 'react';
import Image from 'next/image';

const FriendCard = ({ friend }) => {
    
    const statusStyles = {
        "on-track": "text-white bg-green-500",
        "almost due": "text-white bg-yellow-500",
        "overdue" : "text-white bg-red-600"
    }
    return (
        <div>
            <div className="bg-white rounded-xl shadow p-4 space-y-3 flex flex-col items-center justify-center ">

          {/* Image */}
          <div className='rounded-full h-[100px] w-[100] bg-amber-300 flex items-center gap-3 p-2 relative '>
             <Image
                    src={friend.image}
                    alt='friends profile image' 
                    fill
              loading="eager"
              className='rounded-full object-cover'
                />
          </div>
               
      {/* Name */}
      <h2 className="text-lg font-semibold">{friend.name}</h2>

      {/* Days since contact */}
      <p className="text-sm text-gray-500">
        {friend.days_since_contact} days ago
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs font-semibold badge text-green-800 bg-green-100 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status */}
      <div
        className={`text-sm px-3 py-1 rounded-full inline-block ${statusStyles[friend.status]
        }`}
      >
        {friend.status}
      </div>
    </div>
        </div>
    );
};

export default FriendCard;