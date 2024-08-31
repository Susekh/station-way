import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home"
import Maps from "./pages/Maps"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'maps',
        element: <Maps />,
      },
    ],
  },
]);


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App