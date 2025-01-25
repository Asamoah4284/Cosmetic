import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  
  },

]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // default duration for animations
      once: true, // whether animation should happen only once while scrolling down
      easing: 'ease-in-out', // default easing for animations
    });
  }, []);

  return (
    <RouterProvider router={router} />
  );
}



export default App;
