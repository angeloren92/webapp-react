import { Outlet } from "react-router-dom"
import AppHeader from "../Components/AppHeader"
import AppFooter from "../Components/AppFooter"

// Default layout used by routes: header, outlet for pages, footer
export default function DefaultLayout() {

    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}
