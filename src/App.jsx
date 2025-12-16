import { BrowserRouter } from "react-router-dom";
import { DesktopHero } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <DesktopHero />
      </div>
    </BrowserRouter>
  );
};

export default App;
