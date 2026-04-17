'use client'
import React, { useContext } from 'react';
import { TimelineLogsContext } from '../context/TimelineLogsContextProvider';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const StatsPage = () => {

    const { timelineLogs } = useContext(TimelineLogsContext);

    const calls = timelineLogs.filter(log => log.label == "Call")
    const callsLength = calls.length;
    
    const text = timelineLogs.filter(log => log.label == "Text")
    const textLength = text.length;

    
    const video = timelineLogs.filter(log => log.label == "Video")
    const videoLength = video.length;
   
    console.log(callsLength, videoLength, textLength);
    
    const data = [
        { name: "Calls", value: callsLength, fill : "purple" },
        { name: "Text", value: textLength , fill: "green"},
        {name : "Video", value : videoLength , fill: "olive"}
    ]
    return (
        <div className='w-11/12 md:w-8/12 mx-auto my-12'>
            <h2 className="font-bold text-3xl">Friendship Analytics</h2>
            <div className="bg=white  border-t-2 shadow-lg   p-8 rounded-xl my-4 ">
                <p className=' font-semibold md:text-lg text-[#40681c]'>By Interaction Type</p>
                <div className='flex items center justify-center'>
  <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
              >
             <Legend></Legend>  
      </Pie>
      <Tooltip></Tooltip>
            </PieChart>
                </div>
               
                               
           </div>
            
        </div>
    );
};

export default StatsPage;
<h2 className="text-center font-bold text-center">Stats PAge</h2>