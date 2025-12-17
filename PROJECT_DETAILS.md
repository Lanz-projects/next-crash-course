# Project Details: DevEvent

This document provides a more in-depth look at the architecture and components of the DevEvent application.

## Architecture Overview

The application is built using Next.js and follows a modern full-stack architecture.

*   **Frontend:** The frontend is built with React and rendered by Next.js. The App Router is used for routing, allowing for a mix of server-rendered and client-rendered components. Tailwind CSS is used for styling.
*   **Backend:** The backend is implemented using Next.js API Routes. These are serverless functions that handle API requests. The backend is responsible for interacting with the database and other external services like Cloudinary.
*   **Database:** MongoDB is used as the database. Mongoose is used as an Object Data Modeling (ODM) library to define schemas and interact with the database in a more structured way.

## Key Components

*   **`app/page.tsx`**: The homepage of the application. It fetches the list of events from the API and renders them using the `EventCard` component.
*   **`app/events/[slug]/page.tsx`**: The event detail page. It fetches the details of a single event and displays them.
*   **`components/EventCard.tsx`**: A reusable component that displays a summary of an event and links to the event detail page.
*   **`components/LightRays.jsx`**: A component that uses the `ogl` WebGL library to create a dynamic light-rays effect. This is a good example of integrating WebGL with React for visual flair.
*   **`app/api/events/route.ts`**: The API endpoint for events.
    *   `GET`: Fetches all events from the database.
    *   `POST`: Creates a new event, uploads an image to Cloudinary, and saves the event to the database.
*   **`database/event.model.ts`**: Defines the Mongoose schema for the `Event` collection. It includes fields for all the event details and a pre-save hook to generate a slug and normalize data.
*   **`database/booking.models.ts`**: Defines the Mongoose schema for the `Booking` collection. This suggests that a booking functionality is either implemented or planned.
*   **`lib/actions/event.actions.ts`**: This file likely contains server-side functions (Next.js Actions) for interacting with the `Event` model. This is a modern Next.js pattern for handling form submissions and data mutations.

## API Endpoints

The main API endpoint is `/api/events`.

### `GET /api/events`

*   **Description:** Fetches all events from the database.
*   **Response:** A JSON object containing an array of events.

### `POST /api/events`

*   **Description:** Creates a new event.
*   **Request Body:** `multipart/form-data` containing the event details and an image file.
*   **Response:** A JSON object with a success message and the created event.

## Database Models

### Event Model (`database/event.model.ts`)

The `Event` model has the following fields:

*   `title` (String)
*   `slug` (String, unique)
*   `description` (String)
*   `overview` (String)
*   `image` (String, URL from Cloudinary)
*   `venue` (String)
*   `location` (String)
*   `date` (String)
*   `time` (String)
*   `mode` (String: 'online', 'offline', or 'hybrid')
*   `audience` (String)
*   `agenda` (Array of Strings)
*   `organizer` (String)
*   `tags` (Array of Strings)
*   `createdAt` (Date)
*   `updatedAt` (Date)

### Booking Model (`database/booking.models.ts`)

The presence of this file suggests a booking system with its own data model.

## WebGL Effect

The `LightRays.jsx` component is a standalone visual component that uses `ogl` to create an animated light-ray effect. It's a great example of how to use WebGL in a React application to create high-performance animations. The component is self-contained and can be customized through props.
