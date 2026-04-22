import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./Layouts/DefaultLayout"
import HomePage from "./Pages/HomePage"
import Movie from "./Pages/Movie"
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
            <Route path="/movie/:id" element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>

    </GlobalProvider>
  )
}

export default App
