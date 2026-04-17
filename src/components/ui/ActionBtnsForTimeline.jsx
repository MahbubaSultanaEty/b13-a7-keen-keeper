'use client'
import React from 'react';
import { AlarmClockOff, Archive, Delete, DeleteIcon, Icon, LucideDelete, MessageCircle, Phone, VideoIcon } from 'lucide-react';

const iconMap = {
    call: Phone,
    text: MessageCircle,
    video: VideoIcon,
}

const ActionBtnsForTimeline = ({ type, label, specificFriend }) => {
    console.log(label, specificFriend);

    const Icon = iconMap[type]
    const actionBtnStyle= `btn flex items-center  py-12`
    
    return (
        <button
            
            className={actionBtnStyle}>
            <Icon/> Call
        </button>

                    
    );
};

export default ActionBtnsForTimeline;