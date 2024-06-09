import React from "react";
// import { FirebaseProvider } from "./Context/Firebase"
import RegisterPage from "./Pages/Register.jsx";
import LoginPage from "./Pages/Login.jsx";
import { createRoot } from "react-dom/client";
import { Navigate, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Layout from "./Layout.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./Context/AuthContext";

const ProtectedRoute = ({ element }) => {
  const { user } = useAuth();
  console.log(user);
  return user
    ? element
    : <Navigate to="/register" /> || <Navigate to="/login" />;
};


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="" element={<ProtectedRoute element={<Home />} />} />
    </Route>
  )
);

const root = document.getElementById("root");
const rootInstance = createRoot(root);

rootInstance.render(
  <AuthProvider>
    <RouterProvider router={router}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RouterProvider>
  </AuthProvider>
);
