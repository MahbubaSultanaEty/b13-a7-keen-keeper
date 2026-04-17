

import React from 'react';
import Image from 'next/image';
import { AlarmClockOff, Archive, Delete, DeleteIcon, LucideDelete } from 'lucide-react';


const friendsPromise = async () => {
    const res = await fetch("http://localhost:3000/friends.json");
    const data = res.json();

    return data
}

const FriendsDetailsPage = async ({params}) => {
   
   console.log(params);
    const { friendId } = await params;
    const friends = await friendsPromise();
    console.log(friends, friendId);
    
    const specificFriend = friends.find(friend => friend.id === Number(friendId));

    console.log(specificFriend);

    const { name, image, email, days_since_contact, status, tags, bio, goal, next_due_date } = specificFriend;
    
      const btnStyle = {
            width: "100%",
            backgroundColor: "white",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            padding: "10px",
            fontSize: "14px"
    };
     const statusStyles = {
        "on-track": "text-white bg-green-500",
        "almost due": "text-white bg-yellow-500",
        "overdue" : "text-white bg-red-600"
    }
    
    return (
        <div className="p-6  bg-gray-100 min-h-screen container mx-auto">
            <div className=" grid grid-cols-1 md:grid-cols-6 gap-4">
                 
                         {/* Left Part */}
                         <div className='flex flex-col gap-2 my-4 md:col-span-2'>
                             {/* prifile card */}
                          <div className="bg-white rounded-xl p-4 shadow col-span-1 text-center">
                   <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden">
                     <Image
                       src={image}
                       alt="profile"
                       fill
                       className="object-cover"
                     />
                   </div>
         
                             <h2 className="mt-3 font-semibold">{name}</h2>
         
                   <span className={`inline-block mt-1 text-xs   py-1 rounded mr-2 ${statusStyles[status]} p-2`}>
                     {status}
                   </span>
         
                   <div className="mt-2 text-xs bg-green-100 text-green-600 px-2 py-1 inline-block rounded">
                     {tags[0]}
                   </div>
         
                   <p className="text-sm text-gray-500 mt-3 italic">
                    {bio}
                   </p>
         
                   <p className="text-xs text-gray-400 mt-1">
                     {email}
                   </p>
                             </div>
                              {/* buttons */}
                 <div className="  space-y-3">
                   <button style={btnStyle} className='btn'>
                    <AlarmClockOff/> Snooze 2 Weeks
                   </button>
                   <button style={btnStyle} className='btn'>
                    <Archive/> Archive
                   </button>
                   <button style={btnStyle} className="btn text-red-500">
                   <DeleteIcon/>  Delete 
                   </button>
                 </div>
                         </div>
               
         
                         {/* right part */}
                         <div className='md:col-span-4'>
                 {/* STATS */}
                         <div className='flex'>
                              <div className="bg-white rounded-xl p-4 shadow text-center">
                                 <h2 className="text-2xl font-bold">{ days_since_contact}</h2>
                   <p className="text-sm text-gray-500">Days Since Contact</p>
                 </div>
         
                 <div className="bg-white rounded-xl p-4 shadow text-center">
                   <h2 className="text-2xl font-bold">30</h2>
                   <p className="text-sm text-gray-500">Goal (Days)</p>
                 </div>
         
                 <div className="bg-white rounded-xl p-4 shadow text-center">
                   <h2 className="text-lg font-semibold">Feb 27, 2026</h2>
                   <p className="text-sm text-gray-500">Next Due</p>
                 </div>
                         </div>
         
                              {/* RELATIONSHIP GOAL */}
                 <div className="col-span-3 bg-white rounded-xl p-4 shadow flex justify-between items-center">
                   <div>
                     <h3 className="font-semibold">Relationship Goal</h3>
                     <p className="text-gray-500 text-sm">
                       Connect every <span className="font-bold">30 days</span>
                     </p>
                   </div>
                   <button className="text-sm px-3 py-1 border rounded">
                     Edit
                   </button>
                             </div>
                             
                             {/* QUICK CHECK-IN */}
                 <div className="col-span-3 bg-white rounded-xl p-4 shadow">
                   <h3 className="mb-3 font-semibold">Quick Check-In</h3>
         
                   <div className="grid grid-cols-3 gap-4">
                     <button className="border rounded-lg py-4">📞 Call</button>
                     <button className="border rounded-lg py-4">💬 Text</button>
                     <button className="border rounded-lg py-4">🎥 Video</button>
                   </div>
                 </div>
                         </div>
                         
               </div>
      
    </div>
  
    );
};

export default FriendsDetailsPage;

