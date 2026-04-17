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
            {/* sorting dropsown  */}
            <div className="dropdown dropdown-bottom mt-2">
  <div tabIndex={0} role="button" className="btn m-1">Filter Timeline ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Call</a></li>
                    <li><a>Text</a></li>
                    <li><a >Video</a></li>
  </ul>
            </div>
            
           <div className="space-y-4 my-4">
  
  {timelineLogs.length === 0 ? (
    <div className="w-full h-[60vh] p-6 justify-center bg-white rounded-lg shadow-sm flex items-center">
      <p className="text-gray-500 ">
        No timeline logs yet 
      </p>
    </div>
  ) : (
    timelineLogs.map((timelineLog, index) => {
      const icon =
        timelineLog.label === "Text"
          ? "💬"
          : timelineLog.label === "Call"
          ? "📞"
          : timelineLog.label === "Video"
          ? "🎥"
          : "";

      return (
        <div
          className="w-full flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm"
          key={index}
        >
          <div className="text-2xl">{icon}</div>

          <div className="space-y-2">
            <p className="text-base text-gray-800">
              <span className="font-semibold">
                {timelineLog.label}
              </span>{" "}
              with {timelineLog.specificFriend.name}
            </p>

            <p className="text-xs text-gray-500">
              {timelineLog.time}
            </p>
          </div>
        </div>
      );
    })
  )}

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