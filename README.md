# F1 Motorsport

A responsive Formula 1 web app built with React, Vite, Framer Motion, and React Router. It includes drivers, teams, circuits, calendar data, F1 news, demo login, and user-specific favorite drivers.

## Features

- Formula 1 landing page with animated hero section
- Driver listing, search, profile pages, and favorites
- Team cards and team details
- Race calendar from the OpenF1 API
- Circuit directory and circuit detail pages
- Formula 1 news from GNews
- Demo login flow with per-user favorites stored in local storage
- Dark/light theme toggle
- Responsive navigation and layout

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a local `.env` file from the example:

```bash
copy .env.example .env
```

Then add your GNews API key:

```env
VITE_GNEWS_API=your_gnews_api_key_here
```

Do not commit your real `.env` file. For Vercel, add `VITE_GNEWS_API` in Project Settings > Environment Variables.

## Deploying To Vercel

1. Push this folder to GitHub.
2. Import the GitHub repo in Vercel.
3. Keep the framework preset as `Vite`.
4. Add `VITE_GNEWS_API` in Vercel environment variables.
5. Deploy.

The included `vercel.json` sends direct React Router links such as `/drivers`, `/teams/1`, and `/tracks/2` back to `index.html`.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```
