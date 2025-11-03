import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {Toaster} from  "./components/ui/toaster.jsx"


import Layout from "./layout.jsx";

import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Project from "./pages/Project.jsx";
import Skill from "./pages/Skill.jsx";
import {Aboutsection} from "./pages/Aboutsection.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* ✅ Routes with layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />} />
        <Route path="skill" element={<Skill />} />
        <Route path="about" element={<Aboutsection />} />
      </Route>

      {/* 🚫 NotFound route without layout */}
      <Route path="*" element={<NotFound />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>
);
