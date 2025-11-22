import { motion } from "framer-motion";
import Window from "./Window";
import { projects } from "../constants";
import { github, demo } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  demo_link,
  source_code_link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-700/30 border border-gray-600 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
    >
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-end items-start gap-2 p-3 opacity-0 hover:opacity-100 transition-opacity bg-black/50">
          <a
            href={demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <img
              src={demo}
              alt="demo"
              className="w-4 h-4"
            />
          </a>
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <img
              src={github}
              alt="github"
              className="w-4 h-4"
            />
          </a>
        </div>
      </div>

      <h3 className="text-white font-semibold text-lg mb-2">{name}</h3>
      <p className="text-gray-400 text-sm mb-3 line-clamp-3">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={`${name}-${tag.name}`}
            className={`text-xs px-2 py-1 rounded ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const PortfolioWindow = ({ isOpen, onClose }) => {
  return (
    <Window
      id="portfolio"
      title="Portfolio"
      isOpen={isOpen}
      onClose={onClose}
      initialPosition={{ x: 150, y: 150 }}
      initialSize={{ width: 900, height: 700 }}
    >
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-white text-2xl font-semibold mb-2">My Projects</h2>
          <p className="text-gray-400 text-sm">
            These are my recent projects, which showcase my skills and experience
            through real-world examples of my work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </Window>
  );
};

export default PortfolioWindow;

