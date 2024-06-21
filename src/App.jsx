import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound"
import Series from "./pages/Series/Series"
import SeriesDetail from "./pages/Series/SeriesDetail"
import Episodes from "./pages/Series/Episodes"
import Favourites from "./pages/Favourites"


export default function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/series" element={<Series />} />
            <Route path="/series/:id" element={<SeriesDetail />} />
            <Route path="/series/:seasonId/episodes" element={<Episodes />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

