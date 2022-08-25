import "./App.css";
import React, { lazy } from "react";
import Loader from "./components/loader/Loader";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("./pages/main/MainPage"));
const WalletsPage = lazy(() => import("./pages/wallets/WalletsPage"));
const FourOFour = lazy(() => import("./pages/404/FourOFour"))

function App() {
  return (
    <div className="App">
      <Header
        title="Wallet Creator"
        linkName="Github"
        link="https://github.com/ifeelblue99"
      />

      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <React.Suspense fallback={<Loader message="Page is loading" />}>
                <MainPage />
              </React.Suspense>
            }
          />
          <Route
            path="/wallets/:count"
            element={
              <React.Suspense fallback={<Loader message="Generating..." />}>
                <WalletsPage />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<Loader message="Page is loading" />}>
                <FourOFour />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
