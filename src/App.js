import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all";

import MainPage from "./pages/mainPage";
import VideoPage from "./pages/videoPage";
import SearchPage from "./pages/saerchPage";
import "./app.css";

const App = () => {
  const route = () => {
    return (
      <Router>
        <Route path="/" component={MainPage} exact />
        <Route path="/video/:id" component={VideoPage} />
        <Route path="/search/:search_query" component={SearchPage} />
      </Router>
    );
  };

  return (
    <>
      <div className="container">{route()}</div>
    </>
  );
};

export default App;
