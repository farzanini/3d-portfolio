import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DesktopBackground from "./DesktopBackground";
import DesktopIcons from "./DesktopIcons";
import Taskbar from "./Taskbar";
import StartMenu from "./StartMenu";
import GamingWindow from "./GamingWindow";
import BlogsWindow from "./BlogsWindow";
import SocialsWindow from "./SocialsWindow";
import PortfolioWindow from "./PortfolioWindow";
import { desktopIcons } from "../constants";
import { resume } from "../assets";

const DesktopHero = () => {
  const [windows, setWindows] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [maxZIndex, setMaxZIndex] = useState(10);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openWindow = (icon) => {
    const existingWindow = windows.find((w) => w.id === icon.id);
    
    if (existingWindow) {
      // Bring window to front
      focusWindow(icon.id);
      return;
    }

    const newWindow = {
      id: icon.id,
      title: icon.name,
      icon: icon.icon,
      type: icon.target,
      isMinimized: false,
      isMaximized: false,
      zIndex: maxZIndex + 1,
    };

    setWindows([...windows, newWindow]);
    setMaxZIndex(maxZIndex + 1);
  };

  const closeWindow = (windowId) => {
    setWindows(windows.filter((w) => w.id !== windowId));
  };

  const minimizeWindow = (windowId) => {
    setWindows(
      windows.map((w) =>
        w.id === windowId ? { ...w, isMinimized: true } : w
      )
    );
  };

  const maximizeWindow = (windowId) => {
    setWindows(
      windows.map((w) =>
        w.id === windowId
          ? { ...w, isMaximized: !w.isMaximized, isMinimized: false }
          : { ...w, isMaximized: false }
      )
    );
  };

  const focusWindow = (windowId) => {
    const newZIndex = maxZIndex + 1;
    setWindows(
      windows.map((w) =>
        w.id === windowId
          ? { ...w, zIndex: newZIndex, isMinimized: false }
          : w
      )
    );
    setMaxZIndex(newZIndex);
  };

  const handleIconClick = (icon) => {
    if (icon.action === "window") {
      openWindow(icon);
    } else if (icon.action === "pdf") {
      window.open(resume, "_blank");
    }
  };

  const handleIconDoubleClick = (icon) => {
    if (icon.action === "window") {
      openWindow(icon);
    } else if (icon.action === "pdf") {
      window.open(resume, "_blank");
    }
  };

  const renderWindow = (window) => {
    switch (window.type) {
      case "portfolio":
        return (
          <PortfolioWindow
            key={window.id}
            isMinimized={window.isMinimized}
            isMaximized={window.isMaximized}
            onMinimize={() => minimizeWindow(window.id)}
            onMaximize={() => maximizeWindow(window.id)}
            onClose={() => closeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
            zIndex={window.zIndex}
          />
        );
      case "gaming":
        return (
          <GamingWindow
            key={window.id}
            isMinimized={window.isMinimized}
            isMaximized={window.isMaximized}
            onMinimize={() => minimizeWindow(window.id)}
            onMaximize={() => maximizeWindow(window.id)}
            onClose={() => closeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
            zIndex={window.zIndex}
          />
        );
      case "blogs":
        return (
          <BlogsWindow
            key={window.id}
            isMinimized={window.isMinimized}
            isMaximized={window.isMaximized}
            onMinimize={() => minimizeWindow(window.id)}
            onMaximize={() => maximizeWindow(window.id)}
            onClose={() => closeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
            zIndex={window.zIndex}
          />
        );
      case "socials":
        return (
          <SocialsWindow
            key={window.id}
            isMinimized={window.isMinimized}
            isMaximized={window.isMaximized}
            onMinimize={() => minimizeWindow(window.id)}
            onMaximize={() => maximizeWindow(window.id)}
            onClose={() => closeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
            zIndex={window.zIndex}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <DesktopBackground />
      <DesktopIcons
        onIconClick={handleIconClick}
        onIconDoubleClick={handleIconDoubleClick}
        isMobile={isMobile}
      />
      {windows.map(renderWindow)}
      <StartMenu
        isOpen={isStartMenuOpen}
        onClose={() => setIsStartMenuOpen(false)}
        onIconClick={handleIconClick}
        onIconDoubleClick={handleIconDoubleClick}
        isMobile={isMobile}
      />
      <Taskbar
        openWindows={windows}
        onWindowClick={focusWindow}
        onCloseWindow={closeWindow}
        onStartMenuToggle={setIsStartMenuOpen}
        isStartMenuOpen={isStartMenuOpen}
      />
    </section>
  );
};

export default DesktopHero;

