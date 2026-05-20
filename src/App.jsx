import { useState, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./modules/components/Navbar";
import Landing from "./modules/pages/Landing";
import Footer from "./modules/components/Footer";
import ErrorPage from "./modules/pages/ErrorPage";
import Club from "./modules/pages/Club";
import ScrollToTop from "./modules/components/ScrollToTop";
import WIP from "./modules/pages/WIP";
import Shop from "./modules/pages/Shop";
import Team from "./modules/pages/Team";
import Events from "./modules/pages/Events";
import Contact from "./modules/pages/Contact";
import AssociazioneSapienzaU from "./modules/components/AssociazioneSapienzaU";

import "./App.css";
import ShopItem from "./modules/pages/ShopItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingManager />,
    errorElement: (
      <>
        <Navbar />
        <ErrorPage />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/club",
        element: <Club />,
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/shop/:item",
        element: <ShopItem />,
      },
      { path: "/events", element: <Events /> },
      { path: "/team", element: <Team /> },
      { path: "/contact", element: <AssociazioneSapienzaU />, },
      { path: "/join-us", element: <Contact /> },
    ],
  },
]);

function LandingManager() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Outlet context={[windowSize, setWindowSize]} />
      <Footer />
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
