import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
// import PageNotFound from "./pages/PageNotFound";
import Series from "./pages/Series/Series";
import SeriesDetail from "./pages/Series/SeriesDetail";
import Episodes from "./pages/Series/Episodes";
import Favourites from "./pages/Favourites";
import GenreDetail from "./components/GenreDetail";


export default function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourites" element={<Favourites favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:id" element={<SeriesDetail />} />
          <Route path="/series/:seasonId/episodes" element={<Episodes favorites={favorites} setFavorites={setFavorites} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
