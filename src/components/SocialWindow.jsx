import { useState } from "react";
import Window from "./Window";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "./Icons";

const socialLinks = [
  {
    id: "github",
    name: "GitHub",
    Icon: GitHubIcon,
    url: "https://github.com", // Replace with actual GitHub URL
    iframeUrl: null, // Can be set to embed GitHub profile
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    Icon: LinkedInIcon,
    url: "https://linkedin.com", // Replace with actual LinkedIn URL
    iframeUrl: null, // Can be set to embed LinkedIn profile
  },
  {
    id: "twitter",
    name: "Twitter/X",
    Icon: TwitterIcon,
    url: "https://twitter.com", // Replace with actual Twitter URL
    iframeUrl: null, // Can be set to embed Twitter timeline
  },
];

const SocialWindow = ({ isOpen, onClose }) => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [showIframe, setShowIframe] = useState(false);

  const handlePlatformClick = (platform) => {
    if (platform.iframeUrl) {
      setSelectedPlatform(platform);
      setShowIframe(true);
    } else {
      window.open(platform.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Window
      id="social"
      title="Social Links"
      isOpen={isOpen}
      onClose={onClose}
      initialPosition={{ x: 300, y: 170 }}
      initialSize={{ width: 800, height: 600 }}
    >
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-white text-xl font-semibold mb-2">Connect with me</h2>
          <p className="text-gray-400 text-sm">
            Find me on these platforms or view embedded content below.
          </p>
        </div>

        {!showIframe ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialLinks.map((platform) => (
              <button
                key={platform.id}
                onClick={() => handlePlatformClick(platform)}
                className="flex flex-col items-center p-6 bg-gray-700/30 border border-gray-600 rounded-lg hover:bg-gray-700/50 hover:border-accent/50 transition-all group hover:scale-105"
              >
                <platform.Icon className="mb-3" />
                <span className="text-white font-medium">{platform.name}</span>
                <span className="text-gray-400 text-xs mt-1 group-hover:text-gray-300">
                  {platform.iframeUrl ? "View embedded" : "Open link"}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">{selectedPlatform?.name}</h3>
              <button
                onClick={() => {
                  setShowIframe(false);
                  setSelectedPlatform(null);
                }}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors"
              >
                Back
              </button>
            </div>
            <div className="w-full h-[400px] border border-gray-700 rounded-lg overflow-hidden">
              {selectedPlatform?.iframeUrl ? (
                <iframe
                  src={selectedPlatform.iframeUrl}
                  className="w-full h-full"
                  title={selectedPlatform.name}
                  allow="encrypted-media"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <p>Iframe URL not configured. Add iframeUrl to the platform object.</p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <a
                href={selectedPlatform?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 text-sm font-medium"
              >
                Open {selectedPlatform?.name} in new tab →
              </a>
            </div>
          </div>
        )}

        {/* Instructions for adding iframes */}
        <div className="mt-8 p-4 bg-gray-700/20 border border-gray-600 rounded-lg">
          <p className="text-gray-400 text-xs">
            <strong className="text-gray-300">Note:</strong> To add iframe embeds, update the{" "}
            <code className="text-accent">iframeUrl</code> property in the socialLinks array.
            For example, you can embed GitHub gists, Twitter timelines, or LinkedIn posts.
          </p>
        </div>
      </div>
    </Window>
  );
};

export default SocialWindow;

