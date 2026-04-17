'use client'
import React, { useContext } from 'react';
import { AlarmClockOff, Archive, Delete, DeleteIcon, Icon, LucideDelete, MessageCircle, Phone, VideoIcon } from 'lucide-react';
import { TimelineLogsContext } from '@/app/context/TimelineLogsContextProvider';

const iconMap = {
    call: Phone,
    text: MessageCircle,
    video: VideoIcon,
}

const ActionBtnsForTimeline = ({ type, label, specificFriend }) => {
    // console.log(label, specificFriend);

    const { timelineLogs, setTimelineLogs } = useContext(TimelineLogsContext);
    const actionBtnStyle = `btn flex items-center  py-12`;

    const Icon = iconMap[type];
    
    
    const newLog = {
        specificFriend,       
        label,
        time: new Date().toLocaleString(),
    }
    
    const handleTimelineLogs = (specificFriend) => {
        setTimelineLogs([...timelineLogs, newLog]);
        
    }

    // console.log(timelineLogs);
    return (
        <button
            onClick={() => handleTimelineLogs(specificFriend)}
            className={actionBtnStyle}>
            <Icon/> Call
        </button>

                    
    );
};

export default ActionBtnsForTimeline;