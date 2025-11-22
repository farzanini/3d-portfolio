import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import Desktop from "./components/Desktop";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary min-h-screen">
        <Navbar />
        <Desktop />
      </div>
    </BrowserRouter>
  );
};

export default App;
