// src/components/SecondarySidebar.tsx
import React from 'react';

interface SecondarySidebarProps {
    task: string;
}

const SecondarySidebar: React.FC<SecondarySidebarProps> = ({ task }) => (
    <div className="secondary-sidebar p-4 bg-gray-200 shadow-lg rounded-lg max-w-xs w-full">
        <h2 className="text-xl font-bold mb-4">{task === 'task1' ? 'Task 1' : 'Task 2'}</h2>
        {task === 'task1' && <p>I am task 1</p>}
        {task === 'task2' && <p>I am task 2</p>}
    </div>
);

export default SecondarySidebar;
