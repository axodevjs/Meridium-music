import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <MainLayout>
        <Routes>
          <Route path={"/"} element={<HomePage/>}/>
        </Routes>
    </MainLayout>
  );
}

export default App;
