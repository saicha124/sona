# Gestion Hôtellerie - SONATRACH

## Overview

A hotel management system built for SONATRACH (Algerian oil/gas company). The application provides user authentication and a dashboard interface for managing hotel operations. Built as a full-stack TypeScript application with React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom corporate theme (SONATRACH branding with blue primary and gold/orange accent colors)
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Build Tool**: Vite with path aliases (`@/` for client/src, `@shared/` for shared)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Authentication**: Passport.js with Local Strategy, session-based auth using express-session
- **Password Hashing**: scrypt with random salt
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Development**: tsx for TypeScript execution, Vite middleware for HMR

### Data Storage
- **Database**: PostgreSQL via node-postgres (pg) driver
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` - shared between frontend and backend
- **Migrations**: Drizzle Kit with push command (`db:push`)

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/ui/  # shadcn/ui components
│       ├── hooks/          # Custom React hooks (useAuth, useToast)
│       ├── lib/            # Utilities (queryClient, cn helper)
│       └── pages/          # Route components
├── server/           # Express backend
│   ├── auth.ts       # Passport authentication setup
│   ├── db.ts         # Database connection
│   ├── routes.ts     # API route registration
│   └── storage.ts    # Data access layer
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route type definitions with Zod
└── migrations/       # Database migrations (generated)
```

### Authentication Flow
- Session-based authentication with cookies (`credentials: "include"`)
- Login/logout endpoints at `/api/login` and `/api/logout`
- User session check via `/api/user` endpoint
- Auto-seeded admin user (username: admin, password: admin) on first run

### Build System
- **Development**: `npm run dev` - tsx + Vite with HMR
- **Production Build**: `npm run build` - esbuild for server, Vite for client
- **Output**: `dist/` directory with `index.cjs` (server) and `public/` (static assets)

## External Dependencies

### Database
- **PostgreSQL**: Required, connection via `DATABASE_URL` environment variable

### Key npm Packages
- **UI**: Radix UI primitives, Tailwind CSS, class-variance-authority
- **Data**: Drizzle ORM, TanStack React Query, Zod
- **Auth**: Passport.js, passport-local, express-session
- **Build**: Vite, esbuild, tsx

### Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (required)
- `SESSION_SECRET` - Session encryption key (defaults to "r3pl1t" in development)
- `NODE_ENV` - "development" or "production"