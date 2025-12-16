import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Window = ({
  id,
  title,
  children,
  isMinimized,
  isMaximized,
  onMinimize,
  onMaximize,
  onClose,
  onFocus,
  initialPosition = { x: 100, y: 100 },
  zIndex = 1,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    // Don't handle drag if clicking on window controls
    if (e.target.closest(".window-controls")) {
      return;
    }
    
    if (onFocus) {
      onFocus();
    }
    if (e.target.closest(".window-header")) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleClick = () => {
    if (onFocus) {
      onFocus();
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (isMinimized) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed"
        style={{
          left: isMaximized ? 0 : `${position.x}px`,
          top: isMaximized ? 0 : `${position.y}px`,
          width: isMaximized ? "100%" : "600px",
          height: isMaximized ? "100%" : "500px",
          maxWidth: isMaximized ? "100%" : "90vw",
          maxHeight: isMaximized ? "100%" : "80vh",
          zIndex: zIndex,
        }}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.3 }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleClick}
      >
        <div className="bg-tertiary rounded-lg shadow-2xl border border-[#915eff] border-opacity-30 overflow-hidden flex flex-col h-full">
          {/* Window Header */}
          <div
            className="window-header bg-black-200 px-4 py-2 flex items-center justify-between cursor-move select-none"
            onMouseDown={handleMouseDown}
          >
            <div className="window-controls flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400 transition-colors" 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  if (onClose) onClose();
                }}
                onMouseDown={(e) => e.stopPropagation()}
              />
              <div 
                className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer hover:bg-yellow-400 transition-colors" 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  if (onMinimize) onMinimize();
                }}
                onMouseDown={(e) => e.stopPropagation()}
              />
              <div 
                className="w-3 h-3 rounded-full bg-green-500 cursor-pointer hover:bg-green-400 transition-colors" 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  if (onMaximize) onMaximize();
                }}
                onMouseDown={(e) => e.stopPropagation()}
              />
            </div>
            <div className="text-white text-sm font-medium">{title}</div>
            <div className="w-20" /> {/* Spacer for centering */}
          </div>

          {/* Window Content */}
          <div className="flex-1 overflow-auto bg-primary">
            {children}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Window;

