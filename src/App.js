import "./app.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import VideoPage from "./pages/videoPage";

const App = () => {
  const route = () => {
    return (
      <Router>
        <Route path="/" component={MainPage} exact />
        <Route path="/video/:id" component={VideoPage} />
      </Router>
    );
  };

  return <div className="container">{route()}</div>;
};

export default App;
