import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recipe from "./pages/Recipe";
import About from "./pages/About";
import DetailRecipe from "./pages/DetailRecipe";
import CategoryRecipe from "./pages/CategoryRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recipe",
    element: <Recipe />,
  },
  {
    path: "/recipe/:category",
    element: <CategoryRecipe />,
  },
  {
    path: "/recipe/:category/:id",
    element: <DetailRecipe />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
