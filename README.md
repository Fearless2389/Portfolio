# Futuristic Developer Portfolio

A highly creative, interactive developer portfolio website with a futuristic "command center" HUD aesthetic. 

## Features
- **Neon Command Center Aesthetics:** Dynamic glow effects, chromatic offsets, and layered stacking for a premium futuristic feel.
- **Interactive UI:** Custom crosshair cursor, hover animations, and dynamic transitions.
- **Easy Content Management:** All portfolio content (projects, skills, about me) is managed centrally in a single `src/data/portfolio.ts` file for effortless updates.
- **Modern Tech Stack:** Built with React 19, TypeScript, Tailwind CSS, and Framer Motion, served by Vite for lightning-fast hmr.

## Accessing the Live Site

Right now, your GitHub repository only hosts and stores the **code**. If you want a live link to view the portfolio as an actual website and share it with others, you will need to **deploy** it. 

### Recommended Deployment Method (Vercel)

Vercel is the easiest and fastest way to deploy a Vite React app directly from GitHub for free:

1. Go to [Vercel.com](https://vercel.com/) and sign up using your GitHub account.
2. From your Vercel dashboard, click **Add New** > **Project**.
3. Find your Portfolio repository in the list and click **Import**.
4. Vercel will automatically detect that it's a Vite project. You don't need to change any build settings.
5. Click **Deploy**.
6. Give it a minute to build. Once complete, Vercel will provide you with a live, shareable URL (e.g., `https://your-portfolio.vercel.app`).

*(Alternatively, you can deploy to Netlify using the exact same steps, or configure GitHub Pages—though Vercel provides the easiest zero-config experience).*

## Local Development Setup

To run this project on your local machine:

1. Make sure you have Node.js installed.
2. Clone your GitHub repository to your local machine.
3. Open a terminal in the project directory and run:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Click the local link provided in the terminal (usually `http://localhost:5173/`) to view the application.

## Customizing Your Content

To update your portfolio's information, simply edit the `src/data/portfolio.ts` file. 
- You can add or modify your projects, skills, email, and social links here. 
- The entire website is built to dynamically read from this single file!
