# TheSportsHub

A modern sports information web application built with React, TypeScript, and Vite. Explore team details, live scores, and comprehensive sports data.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TheSportsHub
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_API_BASE_URL=https://www.thesportsdb.com/api/v1/json/3/
```

This is required for the application to fetch sports data from the API.
