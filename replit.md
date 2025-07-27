# ForgeAlumni - Alumni Portal Platform

## Overview

ForgeAlumni is a comprehensive alumni networking platform designed to foster professional connections, career growth, and community engagement. The application serves as a landing page with demo request functionality, built as a foundation for a larger alumni management system. The platform combines modern web technologies with a focus on user experience and scalability.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for robust form handling
- **Animations**: Framer Motion for smooth, engaging user interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API structure with centralized route handling
- **Storage Layer**: Abstracted storage interface supporting both in-memory and database implementations

### Build System
- **Bundler**: Vite for fast development and optimized production builds
- **Development**: Hot Module Replacement (HMR) for rapid development cycles
- **Production**: esbuild for server bundling with ESM format

## Key Components

### Landing Page System
- **Hero Section**: Animated hero with call-to-action for demo requests
- **Features Showcase**: Interactive feature cards highlighting platform capabilities
- **Target Audience**: Segmented sections for different user types (alumni vs administrators)
- **Security Features**: Dedicated section emphasizing privacy and data protection
- **Technology Stack**: Visual representation of technical infrastructure

### Demo Request System
- **Form Validation**: Zod schema validation for data integrity
- **Storage**: Flexible storage interface supporting multiple backends
- **API Integration**: RESTful endpoints for form submission and data retrieval
- **User Feedback**: Toast notifications and success states for user experience

### UI Component Library
- **Design System**: shadcn/ui components with consistent theming
- **Accessibility**: WCAG-compliant components with proper ARIA attributes
- **Responsiveness**: Mobile-first responsive design across all components
- **Theme System**: CSS custom properties for consistent color schemes

## Data Flow

### Demo Request Flow
1. User fills out demo request form with personal and organizational information
2. Client-side validation using Zod schema ensures data quality
3. Form data is submitted via POST request to `/api/demo-request`
4. Server validates data again and stores using abstracted storage interface
5. Success response triggers user notification and form reset
6. Admin can retrieve requests via GET `/api/demo-requests` endpoint

### Content Management
- Static content is managed through React components for easy maintenance
- Dynamic content flows through the React Query cache for optimal performance
- Form state is managed locally with React Hook Form for responsive UX

## External Dependencies

### Database Infrastructure
- **ORM**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Database**: PostgreSQL with Neon serverless database provider
- **Migrations**: Drizzle Kit for database schema management

### UI Dependencies
- **Radix UI**: Headless components for accessibility and functionality
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel components

### Development Tools
- **TypeScript**: Full-stack type safety and developer experience
- **ESLint**: Code quality and consistency enforcement
- **PostCSS**: CSS processing with Tailwind CSS integration

## Deployment Strategy

### Development Environment
- Vite development server with HMR for frontend development
- Express server with tsx for TypeScript execution
- Environment-based configuration for database connections

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Single-command deployment with `npm run build` and `npm start`

### Database Management
- Schema definitions in `shared/schema.ts` for cross-platform consistency
- Database migrations through Drizzle Kit with `npm run db:push`
- Environment variable configuration for database URLs

### Hosting Considerations
- Static asset serving through Express in production
- Database hosted on Neon with connection pooling
- Environment variables for secure configuration management

The architecture supports both development and production scenarios with minimal configuration changes, enabling smooth transitions between environments while maintaining type safety and performance optimization throughout the stack.