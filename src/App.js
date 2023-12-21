import React from "react";
import { Route, Routes } from "react-router-dom";

// components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

//styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;

//@;oscijfwe;klsjfdsaioj
