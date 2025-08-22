# Photo Gallery Application

## Overview

This is a modern React-based photo gallery application that fetches and displays random photos from the Picsum Photos API. The application demonstrates modern web development practices with a clean architecture, component-based design, and effective state management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend:

- **Frontend**: React 18 with TypeScript, using modern React patterns and hooks
- **Backend**: Express.js server with TypeScript support  
- **Database**: PostgreSQL with Drizzle ORM for data persistence
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for fast development and optimized production builds

## Key Components

### Frontend Architecture
- **Component Structure**: Organized into logical folders (layout, ui, pages)
- **State Management**: Zustand for global state management (photo store)
- **Routing**: Wouter for lightweight client-side routing
- **API Integration**: TanStack Query for server state management and caching
- **UI Components**: shadcn/ui provides accessible, customizable components

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Organization**: Centralized route registration system
- **Development Tools**: Hot reload with Vite integration in development

### Core Features
- **Photo Display**: Grid-based photo gallery with responsive design
- **API Integration**: Fetches photos from Picsum Photos API
- **Interactive Controls**: Fetch new photos, load more photos functionality
- **Visual Effects**: Grayscale toggle, hover effects, loading states
- **Statistics Tracking**: Displays photo count, API calls, and current mode

## Data Flow

1. **Photo Fetching**: Components trigger actions in the photo store
2. **API Calls**: Store makes HTTP requests to Picsum Photos API
3. **State Updates**: Store updates with new photo data and statistics
4. **UI Rendering**: Components re-render based on store state changes
5. **User Interactions**: Button clicks and toggles update store state

The application uses unidirectional data flow with clear separation between API layer, state management, and UI components.

## External Dependencies

### Core Framework Dependencies
- React 18 with TypeScript support
- Express.js for backend server
- Wouter for client-side routing
- TanStack Query for server state management

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI primitives for accessible components
- shadcn/ui component library
- Lucide React for icons

### Data and Storage
- Drizzle ORM for database operations
- Neon Database for PostgreSQL hosting
- Zustand for client-side state management
- Zod for schema validation

### Development Tools
- Vite for build tooling and development server
- TypeScript for type safety
- ESBuild for production bundling

## Deployment Strategy

The application is configured for deployment with the following approach:

- **Development**: Vite dev server with hot reload and Express backend
- **Build Process**: Vite builds frontend assets, ESBuild bundles backend
- **Production**: Single server serving both API routes and static assets
- **Database**: Uses environment variable for database connection
- **Assets**: Frontend builds to dist/public, backend builds to dist/

The build process creates optimized bundles for both client and server code, with the Express server configured to serve static assets in production while handling API routes under the `/api` prefix.