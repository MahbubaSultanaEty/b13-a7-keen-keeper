'use client'
import React, { Children, createContext, useState } from 'react';

export const TimelineLogsContext = createContext();

const TimelineLogsContextProvider = ({children}) => {
    const [timelineLogs, setTimelineLogs] = useState([]);

    const data = {
        timelineLogs,
        setTimelineLogs
    }
    return (
        <TimelineLogsContext.Provider value={data}>
            {children}
       </TimelineLogsContext.Provider>
    );
};

export default TimelineLogsContextProvider;