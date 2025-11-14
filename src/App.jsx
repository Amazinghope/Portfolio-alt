 import Hero from "./Pages/Hero";
import Projects from "./Pages/Project";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import ScrollProgress from "./components/ScrollBar";
import BackToTop from "./components/BackToTop";
import FloatingWhatsApp from "./components/WhatsAppFloat";
import Navbar from "./components/Nav";
import ThemeToggle from "./components/ThemeToggle";
import { projects } from "./data/projects";

// const projects = [
//   {
//     name: "Portfolio Website",
//     description: "Personal portfolio built with React and Tailwind CSS.",
//     image: "/images/portfolio.png",
//     live: "https://yourportfolio.vercel.app",
//     repo: "https://github.com/yourusername/portfolio",
//   },
//   {
//     name: "Todo App",
//     description: "A simple todo app using React and local storage.",
//     image: "/images/todo.png",
//     live: "https://yourtodo.vercel.app",
//     repo: "https://github.com/yourusername/todo-app",
//   },
//   {
//     name: "Weather App",
//     description: "A weather app that fetches data from an API.",
//     image: "/images/weather.png",
//     live: "https://yourweather.vercel.app",
//     repo: "https://github.com/yourusername/weather-app",
//   },
// ];

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900  dark:text-gray-100 min-h-screen transition-colors duration-500">
      <ScrollProgress />

      <header className="fixed top-14 right-4 z-50">
        <ThemeToggle />
      </header>
     <Navbar/>
      <Hero />
      <Projects projects={projects} />
      <About />
      <Skills />
      <Contact />

      <FloatingWhatsApp />
      <BackToTop />

      <footer className="text-center py-8 text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Idoteyin Ubaba. Made with ❤️ React & Tailwind
      </footer>
    </div>
  );
}

export default App;


// import Hero from "./Pages/Hero";
// import Projects from "./Pages/Project";
// import About from "./Pages/About";
// import Skills from "./Pages/Skills";
// import Contact from "./Pages/Contact";
// import ScrollProgress from "./components/ScrollBar";
// import BackToTop from "./components/BackToTop";
// import FloatingWhatsApp from "./components/WhatsAppFloat";
// import Navbar from "./components/Nav";

// import { projects } from "./data/projects";

// function App() {
//   return (
//     <div className="font-sans transition-colors duration-300">
//       <ScrollProgress />
//        <Navbar/>
//       <main className="max-w-6xl mx-auto px-4">
//         <Hero />
//         <Projects projects={projects} />
//         <About />
//         <Skills />
//         <Contact />
//       </main>

//       <FloatingWhatsApp />
//       <BackToTop />

//       <footer className="text-center text-sm py-6 text-gray-500 dark:text-gray-400">
//         © {new Date().getFullYear()} Your Name. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default App;


// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
