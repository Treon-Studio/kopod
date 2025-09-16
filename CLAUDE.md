# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kopod is a Windows 95-inspired portfolio website built with React and Vite. It's a complex interactive desktop simulation featuring draggable windows, file management, live chat, games, and various Windows 95 applications recreated in the browser.

## Development Commands

### Build and Development
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint with React rules (max 0 warnings)

### Deployment
- `npm run predeploy` - Automatically runs build before deploy
- `npm run deploy` - Deploy to GitHub Pages using gh-pages

## Architecture Overview

### Core Structure
- **App.jsx** - Main application component containing all state management and window orchestration
- **Context.js** - Simple React context for global state sharing
- **icon.json** - Central configuration file defining all desktop icons, their positions, types, and folder assignments

### State Management Pattern
The app uses a complex useState-based architecture in App.jsx with:
- Icon positioning and sorting (`sortedIcon`, `setSortedIcon`)
- Window z-index management (`maxZindexRef`)
- Folder navigation (`inFolder`, `setInFolder`)
- Right-click context menus (`rightClickIcon`, `rightClickDefault`, `rightClickBin`)
- Recycle bin functionality (`binRestoreArr`, `setBinRestoreArr`)
- Drag and drop state management

### Component Architecture
**22 React components** organized into functional groups:

**Window Components**: Each app (Winamp, MyComputer, Calculator, etc.) is a separate draggable window component

**Utility Components**:
- `Dragdrop.jsx` - Handles all drag and drop functionality
- `Footer.jsx` - Bottom taskbar with time, start menu, notifications
- `RightClickWindows.jsx` - Context menu system

**Folder/File System Components**:
- `MyComputer.jsx`, `EmptyFolder.jsx`, `NoteFolder.jsx` - File system simulation
- `ResumeFile.jsx`, `ResumeFolder.jsx` - Document handling

**Special Features**:
- `Notification.jsx` - System notifications
- `WebampPlayer.jsx` - Winamp music player integration
- `Shutdown.jsx`, `WindowsShutdown.jsx` - System shutdown simulation

### Utility Functions
Located in `src/components/function/AppFunctions.js`:
- Icon sizing functions (`iconContainerSize`, `iconImgSize`, `iconTextSize`)
- Double-click handlers for desktop and mobile
- Image mapping and style utilities
- Photo opening functionality

### Icon System
Icons are defined in `icon.json` with properties:
- `name` - Display name
- `pic` - Image reference
- `folderId` - Parent folder ("Desktop", "MyComputer", etc.)
- `size` - File size simulation
- `type` - File type (.exe, .txt, etc.)
- `x`, `y` - Desktop position coordinates

### Styling Approach
- **No external UI library** - Everything built from scratch
- Custom CSS in `index.css` and component-specific CSS files
- Windows 95 authentic styling with pixel-perfect recreation
- Responsive design for both desktop and mobile

### Real-time Features
- **Live Chat (MSN)** - WebSocket connection to backend for real-time messaging
- **Bitcoin Price Tracking** - Real-time BTC price via Coinbase WebSocket
- **Weather Data** - Location-based weather with real-time updates
- **News Feed** - Connected to backend API for latest news

### External Integrations
- **WebAmp Library** - For authentic Winamp player experience
- **EmailJS** - For contact form functionality
- **Bad Words Filter** - Chat moderation
- **React Calendar** - Calendar functionality
- **React Color** - Color picker for customization
- **Framer Motion** - Smooth animations

### Local Storage Usage
- Icon positions are persisted in localStorage
- Recycle bin contents stored locally
- User preferences and settings

### Mobile Considerations
- Touch events converted to mouse events for drag/drop
- Long press handling for right-click simulation
- Responsive icon sizing
- Mobile-specific double-tap handling

## Development Notes

### Adding New Desktop Icons
1. Add entry to `icon.json` with appropriate properties
2. Import and handle in App.jsx switch statement
3. Create corresponding component if it's an application
4. Add image asset to `src/assets/`

### Window Management
All windows use the `maxZindexRef` system for proper layering. New windows should:
- Increment the z-index reference
- Handle minimize/maximize states
- Support drag functionality via react-draggable

### Right-Click Context System
The right-click system supports:
- Desktop background (`rightClickDefault`)
- Individual icons (`rightClickIcon`)
- Recycle bin items (`rightClickBin`)

Each context menu type has specific actions defined in the respective components.

### File System Simulation
The folder system uses `inFolder` state to track navigation:
- "Desktop" - Main desktop view
- "MyComputer" - Computer contents
- "RecycleBin" - Deleted items
- Custom folder names for specific applications

### GitHub Workflows
The project includes a Discord notification system that triggers on pushes to the develop branch, sending detailed commit information to a Discord webhook.