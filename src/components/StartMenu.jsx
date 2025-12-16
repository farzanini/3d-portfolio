import { motion, AnimatePresence } from "framer-motion";
import { desktopIcons } from "../constants";
import DesktopIcon from "./DesktopIcon";

const StartMenu = ({ isOpen, onClose, onIconClick, onIconDoubleClick, isMobile }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Menu */}
          <motion.div
            className="fixed bottom-16 left-4 bg-black-200 bg-opacity-95 backdrop-blur-lg rounded-lg border border-[#915eff] border-opacity-30 p-4 z-50 min-w-[280px] shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 pb-3 border-b border-[#915eff] border-opacity-20">
              <h3 className="text-white text-lg font-bold">Menu</h3>
            </div>
            <div className="flex flex-col gap-2">
              {desktopIcons.map((icon, index) => (
                <motion.div
                  key={icon.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#915eff] hover:bg-opacity-20 cursor-pointer transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onIconDoubleClick(icon);
                    onClose();
                  }}
                >
                  <span className="text-2xl">{icon.icon}</span>
                  <span className="text-white font-medium">{icon.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StartMenu;

