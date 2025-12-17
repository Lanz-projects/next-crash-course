# DevEvent - A Next.js Event Hub

DevEvent is a full-stack web application built with Next.js that serves as a hub for developer events like hackathons, meetups, and conferences. This project was created as a learning exercise to explore the features of Next.js, including the App Router, API Routes, and server-side rendering.

## Features

*   **Event Listing:** Browse a list of developer events.
*   **Event Details:** View detailed information about each event.
*   **Event Creation:** Add new events to the platform (requires setup of backend services).
*   **Dynamic Visuals:** A dynamic light-ray effect on the homepage using WebGL.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) 16 (with React 19)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Image Management:** [Cloudinary](https://cloudinary.com/)
*   **Analytics:** [PostHog](https://posthog.com/)
*   **WebGL:** [ogl](https://oframe.github.io/ogl/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v20 or later)
*   npm, yarn, or pnpm
*   A MongoDB database instance (local or cloud-based)
*   A Cloudinary account

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your-username/next-crash-course.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Set up your environment variables. Create a `.env.local` file in the root of your project and add the following:
    ```
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    MONGODB_URI=<your_mongodb_uri>
    CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
    CLOUDINARY_API_KEY=<your_cloudinary_api_key>
    CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows the Next.js App Router structure:

*   `app/`: Contains all the routes, pages, and layouts.
*   `app/api/`: Contains the API routes for the application.
*   `components/`: Contains all the React components.
*   `database/`: Contains the database connection logic and data models.
*   `lib/`: Contains helper functions, actions, and other library code.
*   `public/`: Contains all the static assets like images and icons.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.