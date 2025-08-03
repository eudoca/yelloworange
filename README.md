# DataSing Website

This is a modern website for DataSing, a data and analytics consulting company in New Zealand.

## Features

- Responsive design for all devices
- Modern UI with animations and transitions
- Information about DataSing's services:
  - Delivery Services
  - Platform Services
  - AI Services
  - Managed Services
- Contact form for inquiries

## Tech Stack

- React 19
- TypeScript
- TailwindCSS
- Convex for backend
- React Router for navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

- `/src` - Frontend React code
  - `/pages` - Route-based page components
  - `/components` - Reusable UI components
  - `/lib` - Utility functions
- `/convex` - Backend Convex functions
  - `/contacts.ts` - Contact form submission handling
- `/public` - Static assets

## Customization

- Colors and design variables are in `/src/index.css`
- TailwindCSS configuration is in `tailwind.config.js`

## License

This project is proprietary and belongs to DataSing.