/* eslint-disable react-refresh/only-export-components */
import "./index.css";
import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
const Body = lazy(() => import("./components/Body.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Error = lazy(() => import("./components/Error.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
