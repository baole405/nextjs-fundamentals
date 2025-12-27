## Next.js Fundamentals - Issue Tracker

A modern issue tracking application built with Next.js 15, inspired by Linear. This project demonstrates best practices for building production-ready Next.js applications with authentication, database integration, and server actions.

## 🚀 Features

- **Authentication System**
  - User sign up and sign in with secure password hashing
  - Session management with encrypted cookies
  - Protected routes with middleware
- **Issue Management**

  - Create, read, update, and delete issues
  - Issue status tracking (Backlog, Todo, In Progress, Done)
  - Priority levels (Low, Medium, High)
  - Real-time issue filtering and sorting

- **Modern UI/UX**
  - Responsive design with Tailwind CSS
  - Dark mode support
  - Loading states and error handling
  - Optimistic UI updates

## 🛠 Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Drizzle ORM](https://orm.drizzle.team/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Validation:** [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/) + React Testing Library

## 📋 Prerequisites

- Node.js 18+ and npm/pnpm/yarn/bun
- PostgreSQL database (local or cloud like [Neon](https://neon.tech/))
- Git

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/baole405/nextjs-fundamentals.git
   cd nextjs-fundamentals/next.js-fundamentals
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
   SESSION_SECRET="your-secret-key-min-32-characters"
   ```

4. **Run database migrations**

   ```bash
   npm run db:push
   ```

5. **Seed the database (optional)**

   ```bash
   npm run db:seed
   ```

6. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── (auth)/              # Authentication pages (sign in, sign up)
│   ├── (marketing)/         # Public marketing pages
│   ├── actions/             # Server Actions
│   ├── api/                 # API routes
│   ├── components/          # Reusable UI components
│   ├── dashboard/           # Dashboard page
│   ├── issues/              # Issue-related pages
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── providers.tsx        # Client providers
├── db/                      # Database schema and config
├── lib/                     # Utility functions, auth, DAL
├── public/                  # Static assets
└── middleware.ts            # Next.js middleware for auth
```

## 🧪 Testing

Run tests with:

```bash
npm run test
# or
npm run test:ui  # Opens Vitest UI
```

## 🏗 Building for Production

```bash
npm run build
npm start
```

## 🔑 Key Concepts Demonstrated

- **App Router:** Leveraging Next.js 15 App Router features
- **Server Components:** Default server-side rendering
- **Server Actions:** Form submissions without API routes
- **Middleware:** Route protection and authentication checks
- **Data Access Layer (DAL):** Centralized data fetching with caching
- **Type Safety:** Full TypeScript coverage with Zod validation
- **Progressive Enhancement:** Forms work without JavaScript

## 📚 Learning Resources

This project is part of the [Next.js Fundamentals, v4](https://frontendmasters.com/courses/next-js-v4/) course on Frontend Masters.

[![Frontend Masters](https://static.frontendmasters.com/assets/brand/logos/full.png)](https://frontendmasters.com/courses/next-js-v4/)

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**baole405**

- GitHub: [@baole405](https://github.com/baole405)
