// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DashboardPage from './DashboardPage'; // Import DashboardPage
import "./style.scss";

const Layout = ({ toggleTheme }) => {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <DashboardPage /> }, // Route for DashboardPage
      { path: "/post/:id", element: <Single /> },
      { path: "/write", element: <Write /> },
      { path: "/register", element: <Register /> },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/single", element: <Single /> },
  { path: "/write", element: <Write /> },
]);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <RouterProvider router={router}>
          <Layout toggleTheme={toggleTheme} />
        </RouterProvider>
      </div>
    </div>
  );
}

export default App;
