import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "../pages/";
import MyPokemon from "../pages/MyPokemon";
import DetailPokemon from "../pages/DetailPokemon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/detail/:id_monster",
    element: <DetailPokemon />,
  },
  {
    path: "/my-pokemon-list",
    element: <MyPokemon />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
