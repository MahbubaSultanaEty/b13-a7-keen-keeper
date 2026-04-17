"use client"
import React, { useContext } from 'react';
import { TimelineLogsContext } from '../context/TimelineLogsContextProvider';
import useFriends from '@/components/hooks/useFriends';

const TimeLinePage = () => {
    const { friends = [] } = useFriends();
    const { timelineLogs  } = useContext(TimelineLogsContext);

    console.log(timelineLogs, "time line page");

    
    return (
        <div className='w-11/12 mx-auto my-8'>
            <h2 className=" text-5xl font-bold text-[#3e490a]">Timeline</h2>
            <div className='bg-white p-2'>sort </div>
            <div className='space-y-4 my-4'>
                {
                    timelineLogs.map((timelineLog, index) => {
                        const icon = timelineLog.label === "Text" ? "💬" :
                            timelineLog.label === "Call" ? "📞" :
                                timelineLog.label === "Video" ? "🎥" : '';
    
                        return <div className="w-full flex items-start gap-3 p-3  bg-white rounded-lg shadow-sm" key={index}>
                           
                            <div className="text-2xl">{icon}                       </div>

                             <div className="space-y-2">
        <p className="text-base text-gray-800">
         <span className='font-semibold'>{timelineLog.label}</span>  with {timelineLog.specificFriend.name}
                                </p>
                                  <p className="text-xs text-gray-500">
          {timelineLog.time}
        </p>
                         
      </div>
                        </div>
                    })
        }
            </div>
        </div>
    );
};

export default TimeLinePage;

// label
// : 
// "Text"
// specificFriend
// : 
// {id: 3, name: 'Tanvir Hasan', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200', email: 'tanvir.hasan@example.com', days_since_contact: 5, …}
// time
// : 
// "2026-04-17T14:29:29.009Z"