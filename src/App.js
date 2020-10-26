import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header style={{ minHeight: "5vh" }} />
        <div style={{ minHeight: "70vh" }}>
          <Route exact path={`/`} render={() => <Redirect to="/Home" />} />
          <Route exact path={`/Home/`} render={() => <HomePage />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
