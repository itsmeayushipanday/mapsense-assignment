// src/components/EditorArea.tsx
import React from 'react';
import { FaEdit } from "react-icons/fa";


const EditorArea: React.FC = () => (
    <div className="flex justify-center items-center editor-area flex-1 p-4 bg-white">
        <FaEdit size={18} />
        <p className='ml-4'>Editor Area</p>
    </div>
);

export default EditorArea;