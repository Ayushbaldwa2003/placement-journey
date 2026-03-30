npm create vite@latest my-app
cd my-app
npm install

npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss

create tailwind.config.js 
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

create postcss.config.js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}

add the following to index.css
@import "tailwindcss"; 

in main.jsx
import './index.css'