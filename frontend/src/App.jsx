import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Catalog from "./pages/Catalog/Catalog";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import "./styles/style.scss";
import Layout from "./components/Layout/layout";
import NotFound from "./pages/NotFound/NotFound";
import Discounts from "@pages/DiscountsPage/Discounts";

const App = () => {
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
          path: "/catalog",
          element: (
            <Catalog/>
          ),
        },
        {
          path: "/catalog/:category",
          element: (
            <Catalog/>
          ),
        },
        {
          path: "/discounts",
          element: (
            <Discounts/>
          ),
        },
        {
          path: "/discounts/:category",
          element: (
            <Discounts/>
          ),
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/product/:id",
          element: <Product />,
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
};

export default App;
