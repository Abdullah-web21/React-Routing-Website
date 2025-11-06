import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import  App from "./App.jsx"
import Home from "./Components/Home/Home.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Card from "./Components/Portfolio/Portfolio.jsx"
import About from "./Components/About/About.jsx"
import Service from "./Components/Service/Service.jsx"
import Team from "./Components/Teams/Team.jsx"
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Card />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route path="team" element={<Team />} />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
