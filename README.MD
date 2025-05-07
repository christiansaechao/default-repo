# 🚀 Full-Stack Boilerplate – React + Node.js + Supabase (PostgreSQL) + Prisma + TypeScript

A modern full-stack template Vite-powered React frontend and a Node.js + Express + Prisma backend, connected to a Supabase-hosted PostgreSQL database.

---

## 🧰 Tech Stack

| Layer       | Tech                      | Purpose                                                   |
|-------------|---------------------------|-----------------------------------------------------------|
| Frontend    | React                     | UI library for building component-based interfaces        |
|             | Vite                      | Fast bundler and dev server for React                     |
|             | TypeScript                | Static typing for safer code                              |
|             | TailwindCSS               | Utility-first CSS for styling                             |
|             | React Router DOM          | Client-side routing                                       |
|             | React Hook Form           | Form handling and validation                              |
|             | Axios                     | API requests from frontend                                |
|             | Zustand / Redux Toolkit   | Global state management                                   |

| Backend     | Node.js                   | JavaScript runtime                                        |
|             | Express                   | Web framework for handling routes                         |
|             | TypeScript                | Typed server-side logic                                   |
|             | Zod                       | Runtime schema validation                                 |
|             | JWT                       | Authentication via tokens                                 |
|             | bcrypt                    | Secure password hashing                                   |
|             | dotenv                    | Environment variables support                             |
|             | Prisma                    | ORM for PostgreSQL (connected to Supabase)                |

| Dev Tools   | Husky                     | Git hooks (e.g. for linting, formatting)                  |
|             | ESLint + Prettier         | Code quality and formatting                               |
|             | ts-node-dev               | Auto-reload for backend dev                               |
|             | Prisma Studio             | Visual DB browser                                         |

| Database    | Supabase (PosgreSQL)     | Hosted PostgreSQL database with optional auth/storage      |

---

## 🛠 Setup Instructions

### 1. Clone the Repo & Install Dependencie

```bash
# Clone the repository
git clone https://github.com/your-username/your-project.git
cd your-project

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Start development servers
npm run dev  # for Vite client

# or if using concurrently, go back to root and run:
npm run dev