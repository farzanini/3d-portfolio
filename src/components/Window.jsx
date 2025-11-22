import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Window = ({ 
  id, 
  title, 
  children, 
  isOpen, 
  onClose, 
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 800, height: 600 },
  minSize = { width: 400, height: 300 }
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (isDragging || isResizing) {
      const handleMouseMove = (e) => {
        if (isDragging) {
          const newX = e.clientX - dragStart.x;
          const newY = e.clientY - dragStart.y;
          const navbarHeight = 64; // Account for navbar
          setPosition({
            x: Math.max(0, Math.min(newX, window.innerWidth - size.width)),
            y: Math.max(navbarHeight, Math.min(newY, window.innerHeight - size.height)),
          });
        }
        if (isResizing) {
          const newWidth = Math.max(minSize.width, resizeStart.width + (e.clientX - resizeStart.x));
          const newHeight = Math.max(minSize.height, resizeStart.height + (e.clientY - resizeStart.y));
          setSize({ width: newWidth, height: newHeight });
        }
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        setIsResizing(false);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, resizeStart, size.width, size.height, minSize]);

  const handleTitleMouseDown = (e) => {
    if (e.target.closest('button')) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleResizeStart = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 pointer-events-none"
      >
        <div
          className="absolute bg-gray-900/50 backdrop-blur-sm pointer-events-auto"
          style={{
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          }}
          onClick={onClose}
        />
        <motion.div
          className="relative bg-gray-800 border border-gray-700 rounded-lg shadow-window pointer-events-auto"
          style={{
            width: `${size.width}px`,
            height: `${size.height}px`,
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          {/* Title Bar */}
          <div
            className="flex items-center justify-between px-4 py-2 bg-gray-700/50 border-b border-gray-600 rounded-t-lg cursor-move select-none"
            onMouseDown={handleTitleMouseDown}
          >
            <h3 className="text-white text-sm font-medium">{title}</h3>
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-600 transition-colors"
              aria-label="Close window"
            >
              <svg
                className="w-4 h-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content Area */}
          <div className="h-[calc(100%-40px)] overflow-auto">
            {children}
          </div>

          {/* Resize Handle */}
          <div
            className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
            onMouseDown={handleResizeStart}
            style={{
              background: "linear-gradient(135deg, transparent 0%, transparent 40%, rgba(156, 163, 175, 0.3) 40%, rgba(156, 163, 175, 0.3) 50%, transparent 50%)",
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Window;

