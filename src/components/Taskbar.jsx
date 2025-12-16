import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Taskbar = ({ openWindows, onWindowClick, onCloseWindow, onStartMenuToggle, isStartMenuOpen }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleStartClick = () => {
    if (onStartMenuToggle) {
      onStartMenuToggle(!isStartMenuOpen);
    }
  };


  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-14 bg-black-200 bg-opacity-90 backdrop-blur-lg border-t border-[#915eff] border-opacity-30 flex items-center justify-between px-4 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Start Button / Logo */}
      <div className="flex items-center gap-2">
        <motion.div
          className={`w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors ${
            isStartMenuOpen
              ? "bg-[#915eff] bg-opacity-40"
              : "bg-[#915eff] bg-opacity-20 hover:bg-opacity-30"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            handleStartClick();
          }}
        >
          <span className="text-xl">🚀</span>
        </motion.div>
      </div>

      {/* Open Windows */}
      <div className="flex-1 flex items-center gap-2 mx-4 overflow-x-auto">
        {openWindows.map((window) => (
          <motion.button
            key={window.id}
            className="px-4 py-2 bg-[#915eff] bg-opacity-20 hover:bg-opacity-30 rounded-lg text-white text-sm font-medium whitespace-nowrap flex items-center gap-2 transition-colors"
            onClick={() => onWindowClick(window.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span>{window.icon}</span>
            <span>{window.title}</span>
            <button
              className="ml-2 hover:text-red-400 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onCloseWindow(window.id);
              }}
            >
              ✕
            </button>
          </motion.button>
        ))}
      </div>

      {/* Time */}
      <div className="text-white text-sm font-medium px-3">
        {formatTime(time)}
      </div>
    </motion.div>
  );
};

export default Taskbar;

