# Frontend - React, TypeScript, Vite, Tailwind CSS

## 🚀 Overview
This is the frontend for a full-stack application built using **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **React Hook Form**, **Zod**, and **React Query**. It provides a seamless UI for user authentication and data interaction with the backend.

## 🛠️ Tech Stack
- **React** - Frontend library
- **Vite** - Fast build tool for React apps
- **TypeScript** - Strongly typed JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **React Query** - Data fetching and caching

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
VITE_API_URL=http://localhost:4000
```

### 4️⃣ Start the development server
```sh
yarn dev
# or
npm run dev
```
The frontend will be running on `http://localhost:5173`

## 📂 Project Structure
```
/frontend
│── src
│   ├── components      # Reusable UI components
│   ├── utils           # Utility function
│   ├── assets          # Application images
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Entry point
│── public              # Static assets
│── .env                # Environment variables
│── package.json        # Dependencies & scripts
│── tailwind.config.js  # Tailwind configuration
│── tsconfig.json       # TypeScript configuration
```

## 🎨 Tailwind CSS Setup
Tailwind is preconfigured in the project. If needed, update the `tailwind.config.js` file:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


## 🚀 API Integration
All API requests are handled using **React Query** for better caching and state management. Example:
```tsx
import axios from "axios"
import type { LoginFormValues, LoginResponse } from "./type"

// API function for login using Axios

const Url : string = import.meta.env.VITE_API_URL || "http://localhost:4000";
export async function loginUser(data: LoginFormValues): Promise<LoginResponse> {
  const response = await axios.post<LoginResponse>(Url+"/login", data)
  console.log(response)
  return response.data
}

```

## 🔥 Future Enhancements
- Implement role-based access control (RBAC)
- Add unit tests with Jest
- Improve UI with animations
- Deploy using Vercel or Netlify

---

💡 **Contributions are welcome!** Open an issue or submit a pull request.

