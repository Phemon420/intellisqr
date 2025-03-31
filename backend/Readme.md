# Backend API - Node.js, Express, TypeScript, Prisma, PostgreSQL

## 🚀 Overview
This is the backend for a full-stack application built using **Node.js**, **Express**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**. It provides a RESTful API for Login Authentication and Error State Management.

## 🛠️ Tech Stack
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Typed JavaScript for better maintainability
- **Prisma ORM** - Database management
- **PostgreSQL** - Relational database

## 📦 Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/Phemon420/intellisqr.git
cd intellisqr
```

### 2️⃣ Install dependencies
```sh
yarn install
# or
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the root directory and add:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/db_name
PORT=3000
```

### 4️⃣ Migrate the database
```sh
npx prisma migrate dev --user init
```

### 5️⃣ Start the database connection
```sh
npx prisma studio
```

### 6️⃣ Start the server
```sh
node --loader ts-node/esm app.ts
```

The API will be running on `http://localhost:3000`

## 📂 Project Structure
```
/backend
├── controllers   # API logic
├── routes        # API routes
├── prisma        # Prisma client setup
|── DB
├── Route         # Utility functions
├── app.ts        # Express app setup
│── prisma
│   ├── schema.prisma # Prisma schema
│── .env              # Environment variables
│── package.json      # Dependencies & scripts
│── tsconfig.json     # TypeScript config
```

## 🛠️ API Endpoints
### 🚀 Authentication
| Method | Endpoint       | Description          |
|--------|--------------|----------------------|
| POST   | /login  | Login a user        |


## 🔐 Authentication & Security
- **Input validation** with Zod to ensure data integrity.
- **CORS enabled** for cross-origin requests.

## 🛠️ Development & Debugging
- Use `npm dev` to run the server in watch mode.
- Use `npx prisma studio` to inspect the database.
- Debug using `console.log()` or VS Code debugger.

## 🛠️ Useful Commands
```sh
npx prisma generate   # Generate Prisma client
npx prisma studio     # Open Prisma Studio
npx prisma migrate dev --name init  # Apply migrations
```

## 📌 Future Enhancements
- Implement role-based access control (RBAC)
- Add unit tests with Jest
- Deploy using Docker & CI/CD

---

💡 **Contributions are welcome!** Open an issue or submit a pull request.

