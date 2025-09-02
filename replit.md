# FlyQupon - Coupon App Landing Page

## Overview

FlyQupon is a modern, mobile-first coupon application with a dedicated landing page designed to attract users to join a waitlist. The project is built as a full-stack web application featuring a React-based frontend with a Node.js/Express backend. The landing page showcases the app's value proposition through engaging sections including hero, features, app mockups, testimonials, and waitlist signup functionality. The design emphasizes a fun, energetic aesthetic with a foodie-inspired theme focused on popular restaurant chains like McDonald's, Tim Hortons, and A&W.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using **React 18** with **TypeScript** and follows a component-based architecture. Key architectural decisions include:

- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **ShadCN/UI** component library providing consistent, accessible UI components built on Radix UI primitives
- **Tailwind CSS** for styling with custom CSS variables for theming
- **TanStack Query** for server state management and API communication
- **React Hook Form** with **Zod validation** for form handling and validation

The frontend follows a pages/components structure with reusable UI components, custom hooks, and section-based page organization.

### Backend Architecture
The backend uses **Express.js** with TypeScript in a RESTful API pattern:

- **Express** server with custom middleware for logging and error handling
- **Modular route registration** system for clean API organization
- **Storage abstraction layer** with interface-based design allowing for different storage implementations (currently in-memory, designed for future database integration)
- **Zod schemas** shared between frontend and backend for consistent data validation
- **Development/production environment** handling with Vite integration for development

### Data Storage Solutions
The application uses a **dual-storage approach**:

- **PostgreSQL** configured via Drizzle ORM for production data persistence
- **Neon Database** as the PostgreSQL provider (based on connection string pattern)
- **In-memory storage** implementation for development/testing
- **Drizzle Kit** for database migrations and schema management

The database schema includes user management and waitlist email collection with proper indexing and constraints.

### Authentication and Authorization
Currently implements a **basic user system** with:

- User registration/login capability (infrastructure present but not actively used in landing page)
- **Session-based authentication** preparation
- **Password storage** (hashed passwords expected in production)

The landing page focuses on waitlist collection rather than authenticated user experiences.

### Component and Styling Architecture
The UI architecture leverages:

- **Design system approach** with consistent color palette (green primary, yellow accent)
- **Responsive design** with mobile-first principles
- **Accessibility features** through Radix UI primitives
- **Custom animations** and hover effects for enhanced user experience
- **Modular component structure** allowing for easy maintenance and extension

## External Dependencies

### Core Framework Dependencies
- **React 18** - Frontend framework with concurrent features
- **Express.js** - Backend web framework
- **TypeScript** - Type safety across the entire stack
- **Vite** - Build tool and development server

### Database and ORM
- **Drizzle ORM** - Type-safe database ORM with PostgreSQL dialect
- **Drizzle Kit** - Database migration and introspection tool
- **@neondatabase/serverless** - Serverless PostgreSQL driver for Neon Database
- **Neon Database** - Serverless PostgreSQL hosting service

### UI and Styling
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN/UI** - Component library built on Radix UI
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Icon library
- **class-variance-authority** - Utility for creating CSS class variants

### Form and Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation library
- **@hookform/resolvers** - Validation resolvers for React Hook Form

### State Management and Data Fetching
- **TanStack Query (React Query)** - Server state management
- **Wouter** - Lightweight routing library

### Development Tools
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling

### Additional Utilities
- **date-fns** - Date manipulation library
- **clsx** - Conditional className utility
- **nanoid** - Unique ID generation
- **embla-carousel-react** - Carousel component functionality