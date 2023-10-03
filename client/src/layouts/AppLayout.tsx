import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

export const Layout = () => {
  return (
    <>
      <div className="layout__container layout__background">

        <Navbar />

        <div className="main__container">
          <Outlet />
        </div>

      </div>
    </>
  )
}
