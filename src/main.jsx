import React from 'react';
// import { FirebaseProvider } from "./Context/Firebase"
import RegisterPage from './Pages/Register.jsx';
import LoginPage from './Pages/Login.jsx';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';

import Contact from './Components/Contact/Contact.jsx';
import Layout from './Layout.jsx';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/Login" element={<LoginPage />} />
    </Route>
  )
);

const root = document.getElementById('root');
const rootInstance = createRoot(root);

rootInstance.render(
  <RouterProvider router={router}>
    <React.StrictMode>
      {/* <FirebaseProvider> */}
        <App />
      {/* </FirebaseProvider> */}
    </React.StrictMode>
  </RouterProvider>
);
