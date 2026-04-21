import { Outlet } from "react-router-dom"
import AppHeader from "../Components/AppHeader"
import AppFooter from "../Components/AppFooter"

export default function DefaultLayout() {

  return (
    <>
        <AppHeader />
        <Outlet />
        <AppFooter />   
    </>
  )
}
