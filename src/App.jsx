import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import routes from "./routes";

import ScrollToTop from "./components/Scroll";
import Tab from "./components/Tab";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
          {/* <Tab /> */}
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
