import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import useWebSocket  from "react-use-websocket"

import { Layout } from "./layouts"
import { HomePage, ServerPage, AppPage } from "./routes"

import "./styles/main.scss"
import { handleMessage } from "./api/api"

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

const WS_URL = "ws://localhost:8082"

export const App = () => {

  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("Websocket connection established")
    },
    onMessage: (event) => {
      handleMessage(event.data)
    }
  })

  // GenerateState was used when there was no server that sent data to the front-end.
  // const generateState = useGlobalStore(state => state.generateRandomState);
  // generateState();

  return (
    <RouterProvider router={router} />
  )
}