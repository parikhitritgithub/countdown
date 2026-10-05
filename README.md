# GATE 2027 — Countdown Dashboard

A personal countdown dashboard for GATE 2027 preparation. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Live Countdown** — Real-time countdown to February 1, 2027 (days, hours, minutes, seconds)
- **Progress Tracker** — Visual progress bar from October 5, 2026 → February 1, 2027
- **Daily Mission** — Checkbox that persists via localStorage and resets at midnight
- **Motivational Quotes** — Rotating motivational messages
- **Day Counter** — Today's date, days completed, and days remaining
- **Target Date Display** — Clear display of the GATE 2027 date
- **Completion State** — Special message when the countdown reaches zero
- **Fully Responsive** — Works on desktop, tablet, and mobile

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [React](https://react.dev/) — UI library

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Run Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deploy to Vercel

### Option 1: Deploy via Git

1. Push this repository to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click **"Add New Project"**
4. Import your repository
5. Vercel will auto-detect Next.js and configure the build settings
6. Click **"Deploy"**

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow the prompts to link your project and deploy.

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/count)

Replace `YOUR_USERNAME` with your GitHub username after pushing the repo.

## Project Structure

```
app/
├── components/
│   ├── Header.tsx          # GATE 2027 heading
│   ├── Countdown.tsx       # Live countdown timer
│   ├── Progress.tsx        # Progress bar and day stats
│   ├── DailyMission.tsx    # Daily mission checkbox
│   ├── Motivation.tsx      # Rotating quotes
│   └── TargetDate.tsx      # Target date display
├── hooks/
│   └── useCountdown.ts     # Custom countdown hook
├── lib/
│   └── constants.ts        # Dates, quotes, config
├── globals.css             # Global styles
├── layout.tsx              # Root layout
└── page.tsx                # Main page
```

## Configuration

All dates and configuration are centralized in `app/lib/constants.ts`:

- **START_DATE** — October 5, 2026
- **TARGET_DATE** — February 1, 2027
- **MOTIVATIONAL_QUOTES** — Array of motivational messages

## License

Private project. Not intended for redistribution.
