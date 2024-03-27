import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Catalog from "./pages/Catalog/Catalog";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Services from "./pages/Services/Services";
import "./styles/style.scss";
import Layout from "./components/Layout/layout";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/catalog",
          element: <Catalog />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
