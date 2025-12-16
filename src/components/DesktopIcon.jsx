import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const DesktopIcon = ({ icon, onClick, onDoubleClick, isMobile }) => {
  const clickCountRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (isMobile) {
      onDoubleClick();
      return;
    }

    clickCountRef.current += 1;

    if (clickCountRef.current === 1) {
      timeoutRef.current = setTimeout(() => {
        onClick();
        clickCountRef.current = 0;
      }, 300);
    } else if (clickCountRef.current === 2) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      onDoubleClick();
      clickCountRef.current = 0;
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer group"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-14 lg:h-14 flex items-center justify-center bg-black-200 bg-opacity-50 rounded-xl backdrop-blur-sm border border-[#915eff] border-opacity-30 group-hover:border-[#915eff] group-hover:border-opacity-60 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(145,94,255,0.4)]">
          <span className="text-2xl sm:text-3xl lg:text-2xl">{icon.icon}</span>
        </div>
      </div>
      <span className="mt-2 text-white text-xs font-medium text-center max-w-[70px] group-hover:text-[#915eff] transition-colors duration-300">
        {icon.name}
      </span>
    </motion.div>
  );
};

export default DesktopIcon;

