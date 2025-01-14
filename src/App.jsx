
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/HomePage/Home';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}



export default App;
