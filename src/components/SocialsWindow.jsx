import { motion } from "framer-motion";
import Window from "./Window";
import { socialLinks } from "../constants";
import { fadeIn } from "../utils/motion";

const SocialCard = ({ social, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="bg-tertiary p-6 rounded-2xl hover:border-[#915eff] border border-transparent transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl">{social.icon}</div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-xl mb-1">
            {social.platform}
          </h3>
          <p className="text-secondary text-sm mb-3">
            {social.username}
          </p>
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#915eff] hover:text-white transition-colors text-sm font-medium"
          >
            Visit Profile →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const SocialsWindow = ({ isMinimized, isMaximized, onMinimize, onMaximize, onClose, onFocus, zIndex }) => {
  return (
    <Window
      id="socials"
      title="Social Links"
      isMinimized={isMinimized}
      isMaximized={isMaximized}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onFocus={onFocus}
      zIndex={zIndex}
      initialPosition={{ x: 250, y: 140 }}
    >
      <div className="p-6 h-full overflow-auto">
        <div className="mb-8">
          <h2 className="text-white text-3xl font-bold mb-2">Connect With Me</h2>
          <p className="text-secondary text-sm">
            Find me on these platforms and let's connect!
          </p>
        </div>
        <div className="flex flex-wrap gap-7 justify-center">
          {socialLinks.map((social, index) => (
            <SocialCard key={social.platform} social={social} index={index} />
          ))}
        </div>
      </div>
    </Window>
  );
};

export default SocialsWindow;

