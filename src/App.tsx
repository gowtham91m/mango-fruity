import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Drawings from "./Pages/Drawings";
import HomePage from "./Pages/HomePage";
import Photography from "./Pages/Photography";
import Programming from "./Pages/Programming";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Photography" exact component={Photography} />
          <Route path="/Programming" exact component={Programming} />
          <Route path="/Drawings" exact component={Drawings} />
          <HomePage />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
