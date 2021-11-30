import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
