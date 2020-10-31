import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Route exact path={`/`} render={() => <Redirect to="/Home" />} />
          <Route exact path={`/Home/`} render={() => <HomePage />} />
          <Route exact path={`/About/`} render={() => <div />} />
          <Route exact path={`/Work/`} render={() => <div />} />
          <Route exact path={`/Process/`} render={() => <div />} />
          <Route exact path={`/Services/`} render={() => <div />} />
          <Route exact path={`/Testimonials/`} render={() => <div />} />
          <Route exact path={`/Contacts/`} render={() => <div />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
