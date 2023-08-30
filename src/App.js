import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './Routes/postRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <RouterProvider router={route}/>
    </>
  );
}

export default App;
