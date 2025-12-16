import Window from "./Window";
import { WorksContent } from "./Works";
import { AboutContent } from "./About";
import { ExperienceContent } from "./Experience";
import { ContactContent } from "./Contact";
import { useState } from "react";

const PortfolioWindow = ({ isMinimized, isMaximized, onMinimize, onMaximize, onClose, onFocus, zIndex }) => {
  const [activeTab, setActiveTab] = useState("works");

  const tabs = [
    { id: "works", label: "Projects" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "works":
        return <WorksContent />;
      case "about":
        return <AboutContent />;
      case "experience":
        return <ExperienceContent />;
      case "contact":
        return <ContactContent />;
      default:
        return <WorksContent />;
    }
  };

  return (
    <Window
      id="portfolio"
      title="Portfolio"
      isMinimized={isMinimized}
      isMaximized={isMaximized}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onFocus={onFocus}
      zIndex={zIndex}
      initialPosition={{ x: 100, y: 80 }}
    >
      <div className="h-full flex flex-col overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-[#915eff] border-opacity-20 bg-black-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-white border-b-2 border-[#915eff] bg-[#915eff] bg-opacity-10"
                  : "text-secondary hover:text-white hover:bg-[#915eff] hover:bg-opacity-5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {renderContent()}
        </div>
      </div>
    </Window>
  );
};

export default PortfolioWindow;

