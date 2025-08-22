# Photo Gallery Setup Guide

You're in: `C:\Users\hi\Documents\GitHub\exam_html-css-js-react-vue\photo-gallery\`

## Step 1: Update package.json with proper scripts and dependencies

Replace your current package.json with:

```json
{
  "name": "photo-gallery",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "zustand": "^5.0.0",
    "lucide-react": "^0.460.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.17",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.3",
    "typescript": "^5.7.2",
    "vite": "^6.0.7",
    "tailwindcss": "^3.4.15",
    "postcss": "^8.5.0",
    "autoprefixer": "^10.4.20"
  }
}
```

## Step 2: Install dependencies
```bash
npm install
```

## Step 3: Create the project structure
```
photo-gallery/
├── public/
├── src/
│   ├── components/
│   ├── store/
│   ├── services/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## Step 4: Run the development server
```bash
npm run dev
```

The project will be available at: http://localhost:5173