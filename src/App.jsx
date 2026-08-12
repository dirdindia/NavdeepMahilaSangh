import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SiteHeader from "./components/Header";
import SiteFooter from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Gallery from "./pages/Gallery";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";

const Layout = () => (
  <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
    <SiteHeader />
    <main className="flex-grow">
      <Outlet />
    </main>
    <SiteFooter />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/programs", element: <Programs /> },
      { path: "/impact", element: <Impact /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/get-involved", element: <GetInvolved /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
