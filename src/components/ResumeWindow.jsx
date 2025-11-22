import Window from "./Window";
import { resume } from "../assets";

const ResumeWindow = ({ isOpen, onClose }) => {
  return (
    <Window
      id="resume"
      title="Resume"
      isOpen={isOpen}
      onClose={onClose}
      initialPosition={{ x: 250, y: 150 }}
      initialSize={{ width: 900, height: 800 }}
    >
      <div className="p-6 h-full">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            View or download my resume
          </p>
          <a
            href={resume}
            download
            className="px-4 py-2 bg-accent hover:bg-accent/80 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Download PDF
          </a>
        </div>
        <div className="w-full h-[calc(100%-60px)] border border-gray-700 rounded-lg overflow-hidden">
          <iframe
            src={resume}
            className="w-full h-full"
            title="Resume"
          />
        </div>
      </div>
    </Window>
  );
};

export default ResumeWindow;

