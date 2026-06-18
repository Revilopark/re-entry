# Re-Entre

An AI companion for people reentering society after incarceration. Built on the IAM (Inkwell Awareness Model) architecture.

## About

Re-Entre is a person-owned, always-on AI companion that walks with individuals from pre-release through long-term reintegration. It is not a corrections tool — it is a dignity-first companion for rebuilding life.

**Pilot:** Tennessee  
**Vision:** National scale

## Tech Stack

- React 18 + Tailwind CSS
- Lucide React icons
- Google Cloud Platform (aiinkwell project)

## Development

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Deploy to GCP

```bash
# Build first
npm run build

# Deploy to App Engine
gcloud app deploy app.yaml --project=aiinkwell
```

## Project Structure

- `src/App.jsx` - Main application with all views
- `src/index.js` - Entry point
- `public/index.html` - HTML shell

## Views

- **Home** - Welcome, stats, quick actions, featured community
- **Community** - Reentry service provider directory (TN-focused)
- **Resources** - Knowledge library by life domain
- **My Journey** - Personal progress dashboard
- **Me** - User profile with dimensions
- **Chat** - Simulated Re-Entre conversation interface

## License

Proprietary - AI Inkwell
