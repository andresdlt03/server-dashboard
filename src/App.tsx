import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { useMetricsStore } from "./store/MetricsStore"

import { Layout } from "./layouts"
import { HomePage, ServerPage, AppPage } from "./routes"

import "./styles/main.scss"

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <HomePage/>,
        index: true,
      },
      {
        element: <AppPage/>,
        path: "/app",
      },
      {
        element: <ServerPage/>,
        path: "/server"
      },
      {
        element: <Navigate to="/"/>,
        path: "*"
      }
    ]
  }
])

export const App = () => {

  const generateState = useMetricsStore(state => state.generateRandomState);
  generateState();

  return (
    <RouterProvider router={router} />
  )
}