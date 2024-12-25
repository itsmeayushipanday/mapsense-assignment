// src/components/ActivityBar.tsx
import React, { useState } from 'react';
import { FaTasks, FaShareAlt, FaCog, FaQuestionCircle } from 'react-icons/fa';

interface ActivityBarProps {
    onToolClick: (tool: string | null) => void;
}

const ActivityBar: React.FC<ActivityBarProps> = ({ onToolClick }) => {
    const [activeTool, setActiveTool] = useState<string | null>(null);

    const handleButtonClick = (tool: string): void => {
        if (activeTool === tool) {
            setActiveTool(null);
            onToolClick(null);
        } else {
            setActiveTool(tool);
            onToolClick(tool);
        }
    };

    return (
        <div className="activity-bar flex flex-col items-center p-2 bg-white h-full">
            <div className="flex flex-col items-center mt-4 space-y-4">
                <button onClick={() => handleButtonClick('tasks')} className={`flex flex-col items-center p-2 rounded h-16 w-16 ${activeTool === 'tasks' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}>
                    <FaTasks size={20} className="mb-1" />
                    <span className="text-xs">Tasks</span>
                </button>

                <button onClick={() => handleButtonClick('share')} className={`flex flex-col items-center p-2 rounded h-16 w-16 ${activeTool === 'share' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}>
                    <FaShareAlt size={20} className="mb-1" />
                    <span className="text-xs">Share</span>
                </button>

                <button onClick={() => handleButtonClick('settings')} className={`flex flex-col items-center p-2 rounded h-16 w-16 ${activeTool === 'settings' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}>
                    <FaCog size={20} className="mb-1" />
                    <span className="text-xs">Settings</span>
                </button>

                <button onClick={() => handleButtonClick('help')} className={`flex flex-col items-center p-2 rounded h-16 w-16 ${activeTool === 'help' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}>
                    <FaQuestionCircle size={20} className="mb-1" />
                    <span className="text-xs">Help</span>
                </button>

            </div>
        </div>
    );
};

export default ActivityBar;
