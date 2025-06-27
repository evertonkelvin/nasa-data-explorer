# NASA Data Explorer

## Prerequisites
- Node.js (v16 or higher)

---

## Backend Setup (Express)

1. Navigate to the backend folder:
```bash
cd backend
```

2. Copy the example environment file and install dependencies:
```bash
cp .env.example .env
npm install
```

3. Start the API server:
```bash
npm start
```
(This runs node --env-file .env server.js, as defined in the package.json.)

The backend will be available at http://localhost:3000.

---

## Frontend Setup (Vite + React)

1. Go to the frontend directory:
```bash
cd frontend
```

2. Copy the environment example file and install dependencies:
```bash
cp .env.example .env   # create the file if it doesn't exist
npm install
```

3. Launch the development server:
```bash
npm run dev
```
This uses Vite’s default scripts found in package.json.

The frontend should open at http://localhost:5173 and expects the API to be running on http://localhost:3000.
