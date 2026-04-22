import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./Layouts/DefaultLayout"
import AdminLayout from "./Layouts/AdminLayout"
import HomePage from "./Pages/HomePage"
import MoviePage from "./Pages/MoviePage"
import AdminPage from "./Pages/AdminPage"
import { GlobalProvider } from "./Context/GlobalContext"

// Application entry: sets up global context and routing.
// User-facing routes are grouped under `DefaultLayout` (header/footer).
// - `/` -> HomePage: movies listing
// - `/movie/:id` -> Movie: movie detail and reviews

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </GlobalProvider>
  )
}

export default App
