import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound"
import Series from "./pages/Series/Series"
import SeriesDetail from "./pages/Series/SeriesDetail"
import Episodes from "./pages/Series/Episodes"


export default function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:id" element={<SeriesDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

