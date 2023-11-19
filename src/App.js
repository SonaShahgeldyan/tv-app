import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainMenu from "../src/components/MainMenu";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <MainMenu />
      <HomePage />
    </div>
  );
}

export default App;
