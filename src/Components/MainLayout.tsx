// src/components/MainLayout.tsx
import React, { useState } from 'react';
import Header from './Header';
import ActivityBar from './ActivityBar';
import PrimarySidebarTasks from './PrimarySidebarTasks';
import PrimarySidebarShare from './PrimarySidebarShare';
import PrimarySidebarSettings from './PrimarySidebarSettings';
import PrimarySidebarHelp from './PrimarySidebarHelp';
import EditorArea from './EditorArea';
import SecondarySidebar from './SecondarySidebar';
import Footer from './Footer';
import LoginModal from './LoginModal';

const MainLayout: React.FC = () => {
    const [selectedTool, setSelectedTool] = useState<string | null>(null);
    const [selectedTask, setSelectedTask] = useState<string | null>(null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleToolClick = (tool: string | null): void => {
        setSelectedTool(tool);
        setSelectedTask(null); // Reset task selection when a new tool is selected
    };

    const handleTaskButtonClick = (task: string) => {
        if (selectedTask === task) {
            setSelectedTask(null); // Close the secondary sidebar if the same task button is clicked again
        } else {
            setSelectedTask(task); // Open the secondary sidebar with the selected task
        }
    };

    const handleLoginClick = () => {
        setIsLoginModalOpen(true);
    };

    const handleCloseLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    return (
        <div className="main-layout min-h-screen flex flex-col">
            <Header onLoginClick={handleLoginClick} />
            <div className="main-content flex flex-1">
                <ActivityBar onToolClick={handleToolClick} />
                {selectedTool === 'tasks' && <PrimarySidebarTasks onTaskButtonClick={handleTaskButtonClick} />}
                {selectedTool === 'share' && <PrimarySidebarShare />}
                {selectedTool === 'settings' && <PrimarySidebarSettings />}
                {selectedTool === 'help' && <PrimarySidebarHelp />}
                <EditorArea />
                {selectedTask && <SecondarySidebar task={selectedTask} />}
            </div>
            <Footer />
            <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
        </div>
    );
};

export default MainLayout;
