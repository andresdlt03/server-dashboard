import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"

import { Layout } from "./layouts"
import { HomePage, ServerPage, AppPage, AlertsPage } from "./routes"

import "./styles/main.scss"
import { useMetricsStore } from "./store/MetricsStore"

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
        element: <AlertsPage />,
        path: "/alerts"
      },
      {
        element: <Navigate to="/"/>,
        path: "*"
      }
    ]
  }
])

export const App = () => {

  const generateMetrics = useMetricsStore(state => state.generateRandomMetrics);
  generateMetrics();

  return (
    <RouterProvider router={router} />
  )
}