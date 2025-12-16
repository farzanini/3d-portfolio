import Window from "./Window";
import { GamingContent } from "./Gaming";

const GamingWindow = ({ isMinimized, isMaximized, onMinimize, onMaximize, onClose, onFocus, zIndex }) => {
  return (
    <Window
      id="gaming"
      title="Gaming Hub"
      isMinimized={isMinimized}
      isMaximized={isMaximized}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onFocus={onFocus}
      zIndex={zIndex}
      initialPosition={{ x: 150, y: 100 }}
    >
      <div className="p-6 h-full overflow-auto">
        <GamingContent />
      </div>
    </Window>
  );
};

export default GamingWindow;

