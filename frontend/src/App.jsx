import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Catalog from "./pages/Catalog/Catalog";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import "./styles/style.scss";
import Layout from "./components/Layout/layout";
import NotFound from "./pages/NotFound/NotFound";
import { useGetCategoriesQuery } from "@store/categories";

const App = () => {
  const { data, isLoading, error } = useGetCategoriesQuery();
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
            <Catalog
              categories={data}
              categoriesIsLoading={isLoading}
              categoriesError={error}
            />
          ),
        },
        {
          path: "/catalog/:category",
          element: (
            <Catalog
              categories={data}
              categoriesIsLoading={isLoading}
              categoriesError={error}
            />
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
