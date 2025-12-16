import { motion } from "framer-motion";
import DesktopIcon from "./DesktopIcon";
import { desktopIcons } from "../constants";

const DesktopIcons = ({ onIconClick, onIconDoubleClick, isMobile }) => {
  return (
    <motion.div
      className="absolute left-8 sm:left-12 top-20 sm:top-24 flex flex-col gap-5 sm:gap-6 lg:gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {desktopIcons.map((icon, index) => (
        <motion.div
          key={icon.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.1 * index,
            type: "spring",
            stiffness: 200,
          }}
        >
          <DesktopIcon
            icon={icon}
            onClick={() => onIconClick(icon)}
            onDoubleClick={() => onIconDoubleClick(icon)}
            isMobile={isMobile}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DesktopIcons;

