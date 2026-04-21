import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./DefaultLayout/DefaultLayout"
import HomePage from "./Pages/HomePage"
import Movie from "./Pages/Movie"
import { GlobalProvider } from "./Context/GlobalContext"

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
    </GlobalProvider>
  )
}

export default App
