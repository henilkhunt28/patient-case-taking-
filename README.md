# Patient Case-Taking Software — SIH26047

A React + TypeScript + Vite web application for digital patient registration, case-taking, case history, dashboard and SIH documentation.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown by Vite (normally `http://localhost:3000`).

## Production build

```bash
npm run build
npm run preview
```

## Check TypeScript

```bash
npm run lint
```

## Demo login

- Doctor: `doctor` / `doctor123`
- Staff: `staff` / `staff123`
- Administrator: `admin` / `admin123`

## Important

This version is a frontend/demo application. Patient, case and user data are stored in the browser's `localStorage`. That means data is persistent on the same browser/device, but it is **not** a real hospital database and should not be used with real patient information.

The project intentionally does not include `node_modules` or a generated `dist` folder. Run `npm install` on the target computer so npm installs the correct dependencies for that operating system.

## Main features

- Login and role-based UI
- Dashboard
- Patient registration and editing
- Patient list and details
- New case-taking form
- Case history
- User management
- SIH documentation/demo tour
- Local browser persistence
- Reset to demo data
