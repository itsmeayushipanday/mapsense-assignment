Project Overview-
A web-based application designed with the following layout (using React and TailwindCSS or AntD):

1. Created a web page with the following layout:

    Header: Includes a left side logo area, a center search area, and a right-side login button.
    Activity Bar: Includes a couple of tools.
    Primary Sidebar: Only layout with heading required, nothing else.
    Editor Area: No tabs or anything fancy required.
    Secondary Sidebar: Contextual, meaning it should open when some action is taken on the View or any item on the primary sidebar.

2. Design Specifications:

    The page will have a white background.
    Used Open Sans font.

3. Interaction:

    The primary sidebar opens when the respective tool button icon is clicked.
    The secondary bar is contextual; it opens when some action is taken on the 
    View or any item on the primary sidebar. To simulate the secondary bar, you 
    can put a dummy item on the primary sidebar, and on clicking it, the secondary 
    sidebar opens.

Features-
    Header: Contains logo, search bar, and login button.
    Activity Bar: Provides quick access to tools such as Tasks, Share, Settings, and Help.
    Primary Sidebar: Displays relevant options based on the selected tool.
    Editor Area: Main content area for displaying detailed information.
    Secondary Sidebar: Contextual sidebar that opens based on actions taken on the Primary Sidebar.
    Login Modal: Overlay login form that appears when the login button is clicked.
    Footer: Displays additional information such as current line and column in the editor, encoding type, etc.

Tech Stack-
    React: Frontend framework for building user interfaces.
    TypeScript: Static type checking for JavaScript.
    Tailwind CSS / Ant Design: CSS frameworks for styling the application.
    React Icons: Icon library for adding icons to the application.

Installation-   
    git clone "url"
    cd project-name
    npm install
    npm run dev

Project Structure:
hybrid-farm-support/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ActivityBar.tsx
│   │   ├── EditorArea.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── LoginModal.tsx
│   │   ├── MainLayout.tsx
│   │   ├── PrimarySidebarHelp.tsx
│   │   ├── PrimarySidebarSettings.tsx
│   │   ├── PrimarySidebarShare.tsx
│   │   ├── PrimarySidebarTasks.tsx
│   │   ├── SecondarySidebar.tsx
│   ├── index.css
│   ├── index.tsx
├── tailwind.config.js
├── package.json
├── package-lock.json