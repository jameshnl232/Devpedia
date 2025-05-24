import About from "@/pages/About";
import Home from "@/pages/Home";
import Root from "@/Root";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
    ],
  },
]);

export default router;
