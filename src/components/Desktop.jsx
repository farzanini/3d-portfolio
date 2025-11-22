import { useState } from "react";
import { motion } from "framer-motion";
import Window from "./Window";
import PortfolioWindow from "./PortfolioWindow";
import BlogsWindow from "./BlogsWindow";
import ResumeWindow from "./ResumeWindow";
import SocialWindow from "./SocialWindow";

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState({
    portfolio: false,
    blogs: false,
    resume: false,
    social: false,
  });

  const icons = [
    {
      id: "portfolio",
      name: "Portfolio",
      icon: "📁",
      component: PortfolioWindow,
    },
    {
      id: "blogs",
      name: "Blogs",
      icon: "📝",
      component: BlogsWindow,
    },
    {
      id: "resume",
      name: "Resume",
      icon: "📄",
      component: ResumeWindow,
    },
    {
      id: "social",
      name: "Social",
      icon: "🔗",
      component: SocialWindow,
    },
  ];

  const openWindow = (id) => {
    setOpenWindows((prev) => ({ ...prev, [id]: true }));
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="relative w-full h-screen bg-primary overflow-hidden pt-16">
      {/* Fun Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-gray-900 to-primary">
          {/* Animated circles/orbs */}
          <motion.div
            className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: "10%", left: "20%" }}
          />
          <motion.div
            className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: "60%", right: "15%" }}
          />
          <motion.div
            className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ bottom: "20%", left: "50%" }}
          />
        </div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Desktop Icons - Left Aligned Vertical */}
      <div className="relative z-10 p-8">
        <div className="flex flex-col gap-6 w-fit">
          {icons.map((icon, index) => (
            <motion.div
              key={icon.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => openWindow(icon.id)}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 border border-gray-700 rounded-lg group-hover:bg-gray-700/50 group-hover:border-accent/50 transition-all group-hover:scale-110">
                <span className="text-3xl">{icon.icon}</span>
              </div>
              <span className="text-white text-sm font-medium group-hover:text-accent transition-colors">
                {icon.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Windows */}
      {icons.map((icon) => {
        const WindowComponent = icon.component;
        return (
          <WindowComponent
            key={icon.id}
            isOpen={openWindows[icon.id]}
            onClose={() => closeWindow(icon.id)}
          />
        );
      })}
    </div>
  );
};

export default Desktop;

