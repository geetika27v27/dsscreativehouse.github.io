const fs = require('fs');
const path = require('path');

const rootName = 'smriti-lok';
const srcDir = path.join(rootName, 'src');
const pubDir = path.join(rootName, 'public');

// 1. Create Directories
if (!fs.existsSync(rootName)) fs.mkdirSync(rootName);
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir);
if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir);

console.log(`📂 Created folders: ${rootName}, src, public`);

// 2. Define File Contents

const packageJson = {
  "name": "smriti-lok",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.2.0"
  }
};

const viteConfig = `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
`;

const indexHtml = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Smriti Lok</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

const mainJsx = `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`;

const appCss = `
:root {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: dark;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  background-color: #000;
  overflow: hidden; 
}

.container {
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

section {
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* PAGE 1 */
.page-one {
  position: relative;
  color: white;
  text-align: center;
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.content-one {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.title-large {
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0;
  text-shadow: 0 4px 10px rgba(0,0,0,0.5);
}

.subtitle {
  font-size: 2.5rem;
  font-weight: 600;
  opacity: 0.9;
  margin-top: 10rem; 
}

.description {
  font-size: 1.1rem;
  font-weight: 300;
  opacity: 0.8;
  max-width: 600px;
}

.cta-button {
  margin-top: 2rem;
  padding: 1rem 2.5rem;
  background-color: #f1c40f; 
  color: #000;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s;
}

.cta-button:hover {
  transform: scale(1.05);
  background-color: #ffd700;
}

/* PAGE 2 */
.page-two {
  background: url('/moon-bg.jpg') no-repeat center center/cover;
  position: relative;
}

.rain {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.1));
  pointer-events: none;
}

.drop {
  position: absolute;
  bottom: 100%;
  width: 1px;
  height: 60px;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.25));
  animation: fall linear infinite;
}

@keyframes fall {
  to { transform: translateY(120vh); }
}

/* PAGE 3 */
.page-three {
  background-color: #000;
  position: relative;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle var(--duration) ease-in-out infinite;
  opacity: var(--opacity);
}

@keyframes twinkle {
  0% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.2; transform: scale(0.8); }
}

@media (max-width: 768px) {
  .title-large { font-size: 2.5rem; }
  .subtitle { font-size: 1.8rem; margin-top: 5rem; }
  .description { font-size: 0.9rem; padding: 0 20px; }
}
`;

const appJsx = `
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = 150;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: \`\${Math.random() * 100}%\`,
      top: \`\${Math.random() * 100}%\`,
      size: \`\${Math.random() * 2 + 1}px\`,
      duration: \`\${Math.random() * 3 + 2}s\`,
      opacity: Math.random(),
    }));
    setStars(newStars);
  }, []);

  const rainDrops = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: \`\${Math.random() * 100}%\`,
    delay: \`\${Math.random() * 2}s\`,
    duration: \`\${Math.random() * 0.5 + 0.5}s\`,
  }));

  return (
    <div className="container">
      
      {/* PAGE 1 */}
      <section className="page-one">
        <video 
          className="video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/landing-video.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content-one">
          <h1 className="title-large">Smriti Lok</h1>
          <h2 className="subtitle">Coming Soon</h2>
          <p className="description">
            A place to preserve, relive, and share your memories.
          </p>
          <button className="cta-button">Join Waitlist</button>
        </div>
      </section>

      {/* PAGE 2 */}
      <section className="page-two">
        <div className="rain">
          {rainDrops.map((drop) => (
            <div 
              key={drop.id} 
              className="drop" 
              style={{
                left: drop.left,
                animationDelay: drop.delay,
                animationDuration: drop.duration
              }}
            />
          ))}
        </div>
      </section>

      {/* PAGE 3 */}
      <section className="page-three">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              '--duration': star.duration,
              '--opacity': star.opacity
            }}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
`;

// 3. Write Files
fs.writeFileSync(path.join(rootName, 'package.json'), JSON.stringify(packageJson, null, 2));
fs.writeFileSync(path.join(rootName, 'vite.config.js'), viteConfig.trim());
fs.writeFileSync(path.join(rootName, 'index.html'), indexHtml.trim());
fs.writeFileSync(path.join(srcDir, 'main.jsx'), mainJsx.trim());
fs.writeFileSync(path.join(srcDir, 'App.jsx'), appJsx.trim());
fs.writeFileSync(path.join(srcDir, 'App.css'), appCss.trim());

console.log("✅ Project created successfully!");
console.log("👉 NEXT STEPS:");
console.log("1. Move your 'landing-video.mp4' and 'moon-bg.jpg' into the 'smriti-lok/public' folder.");
console.log("2. cd smriti-lok");
console.log("3. npm install");
console.log("4. npm run dev");