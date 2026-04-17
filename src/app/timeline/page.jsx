"use client"
import React, { useContext, useState } from 'react';
import { TimelineLogsContext } from '../context/TimelineLogsContextProvider';
import useFriends from '@/components/hooks/useFriends';

const TimeLinePage = () => {
  const { timelineLogs } = useContext(TimelineLogsContext);

  const [filter, setFilter] = useState("all");

  const filteredLogs =
    filter === "all"
      ? timelineLogs
      : timelineLogs.filter(log => log.label === filter);

  return (
    <div className="w-11/12 mx-auto my-8">
      
      {/* Title */}
      <h2 className="text-5xl font-bold text-[#3e490a]">
        Timeline
      </h2>

      {/* Dropdown Filter */}
      <div className="dropdown dropdown-bottom mt-3">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter Timeline ⬇️
        </div>

        <ul
          tabIndex={-1}
          className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
        >
          <li><a onClick={() => setFilter("all")}>All</a></li>
          <li><a onClick={() => setFilter("Call")}>Call</a></li>
          <li><a onClick={() => setFilter("Text")}>Text</a></li>
          <li><a onClick={() => setFilter("Video")}>Video</a></li>
        </ul>
      </div>

      {/* Timeline */}
      <div className="space-y-4 my-4">

        {filteredLogs.length === 0 ? (
          <div className="w-full h-[60vh] flex items-center justify-center bg-white rounded-lg shadow-sm">
            <p className="text-gray-500">
              No timeline logs yet 
            </p>
          </div>
        ) : (
          filteredLogs.map((log, index) => {
            const icon =
              log.label === "Text"
                ? "💬"
                : log.label === "Call"
                ? "📞"
                : log.label === "Video"
                ? "🎥"
                : "";

            return (
              <div
                key={index}
                className="w-full flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm"
              >
                {/* Icon */}
                <div className="text-2xl">{icon}</div>

                {/* Content */}
                <div className="space-y-2">
                  <p className="text-base text-gray-800">
                    <span className="font-semibold">
                      {log.label}
                    </span>{" "}
                    with {log.specificFriend.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {log.time}
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