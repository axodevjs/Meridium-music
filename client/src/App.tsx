import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/favorites"} element={<FavoritesPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
