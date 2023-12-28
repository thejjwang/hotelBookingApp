import React from 'react';

// components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// pages
import Home from './pages/Home.jsx';
import RoomDetails from './pages/RoomDetails.jsx';

// react router
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/room/:id',
    element: <RoomDetails />,
  }
]);

const App = () => {
  return <div>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </div>;
};

export default App;
