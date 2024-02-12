# Job Search Web Application Frontend

This repository contains the frontend for the job search web application built with Next.js.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- React Hook Form
- SWR
- js-cookie
- wretch

## Features

- User Authentication (Sign up and Log in)
- Job Search with an input field for job titles
- Display job search results in a table
- Logout functionality

## Requirements

- Node.js (version 14 or later)
- npm or yarn

## Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/devshoaibsarwar/job-hunter.git
cd job-hunter-frontend
```

### Step 2: Install Dependencies

- Install the necessary Node.js packages using npm or yarn.

- Using npm

```bash
npm install
```

- Using yarn

```bash
yarn install
```

### Step 3: Configure Environment Variables

- Create a .env.local file in the root of the project and add the following environment variables:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api  # Replace with your actual backend API URL
```

### Step 4: Run the Development Server

- Start the Next.js development server:

```bash
npm run dev
```
or
```bash
yarn dev
```

- The frontend server should now be running at http://localhost:3000.


## Available Scripts

- In the project directory, you can run:

```bash
npm run dev or yarn dev
```
Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

```bash
npm run build or yarn build
```
Builds the app for production to the out folder.

```bash
npm run start or yarn start
```
 Starts the application in production mode.

```bash
npm run lint or yarn lint
```
Runs ESLint to check for linting errors.

## Pages Description

### Login Page (/login)
- URL: /login
- Description: Allows users to log in with their email and password.

### Register Page (/register)
- URL: /register
- Description: Allows users to sign up with their email and password.

### Dashboard Page (/dashboard)
- URL: /dashboard
- Description:
   Contains an input box for the job title.
- Displays job search results in a table with job name and company name.
- Includes a button below the table to log out.

### Using Tailwind CSS
- This project uses Tailwind CSS for styling. The configuration is set up in the tailwind.config.js file, and global styles can be found in styles/globals.css.

## Additional Notes
- Ensure your backend server is running and accessible at the URL specified in the NEXT_PUBLIC_API_URL environment variable.
- Use environment variables for sensitive data and configuration settings.
