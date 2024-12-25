// src/components/PrimarySidebarTasks.tsx
import React from 'react';
import { FaTasks } from "react-icons/fa";

interface PrimarySidebarTasksProps {
    onTaskButtonClick: (task: string) => void;
}

const PrimarySidebarTasks: React.FC<PrimarySidebarTasksProps> = ({ onTaskButtonClick }) => (
    <div className="primary-sidebar p-4 bg-gray-200">
        <div className='flex'>
            <FaTasks size={18} />
            <h2 className='mb-4 ml-2'>Tasks</h2>
        </div>
        <button
            onClick={() => onTaskButtonClick('task1')}
            className="mr-4 text-white bg-[#2E1C73] hover:bg-[#2E1C73] focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
            Task 1
        </button>
        <button
            onClick={() => onTaskButtonClick('task2')}
            className="text-white bg-[#2E1C73] hover:bg-[#2E1C73] focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
            Task 2
        </button>
    </div>
);

export default PrimarySidebarTasks;
