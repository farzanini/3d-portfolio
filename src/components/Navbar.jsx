import { Link } from "react-router-dom";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center py-4 px-6 fixed top-0 z-30 bg-primary/80 backdrop-blur-sm border-b border-gray-800">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
          <p className="text-white text-base font-medium">
            Farzan
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
