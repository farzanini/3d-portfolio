import { motion } from "framer-motion";
import { styles } from "../styles";
import { gamingLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

export const GamingCard = ({ gamingLink, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="bg-tertiary p-6 rounded-2xl hover:border-[#915eff] border border-transparent transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl">{gamingLink.icon}</div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-xl mb-1">
            {gamingLink.platform}
          </h3>
          <p className="text-secondary text-sm mb-3">
            {gamingLink.username}
          </p>
          <a
            href={gamingLink.link}
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

export const GamingContent = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Gaming World
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Gaming Hub.
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-7 justify-center">
        {gamingLinks.map((gamingLink, index) => (
          <GamingCard key={gamingLink.platform} gamingLink={gamingLink} index={index} />
        ))}
      </div>
    </>
  );
};

const Gaming = GamingContent;

export default SectionWrapper(Gaming, "gaming");

