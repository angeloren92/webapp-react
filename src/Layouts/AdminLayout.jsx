import AppAdminHeader from "../Components/Admin/AppAdminHeader"
import AppAdminFooter from "../Components/Admin/AppAdminFooter"
import { Outlet } from "react-router-dom"
export default function AdminLayout() {

    return (
        <>
            <AppAdminHeader />
            <main>
                <Outlet />
            </main>
            <AppAdminFooter />
        </>
    )
}