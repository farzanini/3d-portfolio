import { useState } from "react";
import Window from "./Window";

// Placeholder data structure for old weblogs
// This can be replaced with actual blog URLs/content
const oldWeblogs = [
  {
    id: 1,
    title: "Sample Old Blog Post 1",
    url: "https://example.com/blog/post-1",
    date: "2023-01-15",
    source: "Old Weblog 1",
  },
  {
    id: 2,
    title: "Sample Old Blog Post 2",
    url: "https://example.com/blog/post-2",
    date: "2023-03-20",
    source: "Old Weblog 2",
  },
  // Add more old blog posts here
];

// Placeholder structure for new weblog posts
// This can be expanded to support markdown or a simple editor
const newBlogPosts = [
  {
    id: 1,
    title: "Welcome to My New Weblog",
    content: "This is where I'll share my new thoughts and ideas...",
    date: new Date().toISOString().split("T")[0],
  },
  // Add more new blog posts here
];

const BlogsWindow = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState("old");

  return (
    <Window
      id="blogs"
      title="Blogs"
      isOpen={isOpen}
      onClose={onClose}
      initialPosition={{ x: 200, y: 170 }}
      initialSize={{ width: 1000, height: 700 }}
    >
      <div className="p-6">
        {/* Section Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-700">
          <button
            onClick={() => setActiveSection("old")}
            className={`pb-3 px-4 text-sm font-medium transition-colors ${
              activeSection === "old"
                ? "text-white border-b-2 border-accent"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Old Weblogs
          </button>
          <button
            onClick={() => setActiveSection("new")}
            className={`pb-3 px-4 text-sm font-medium transition-colors ${
              activeSection === "new"
                ? "text-white border-b-2 border-accent"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            New Weblog
          </button>
        </div>

        {/* Old Weblogs Section */}
        {activeSection === "old" && (
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Old Weblogs</h2>
            <p className="text-gray-400 text-sm mb-6">
              Collection of posts from my previous weblogs.
            </p>
            <div className="space-y-4">
              {oldWeblogs.length > 0 ? (
                oldWeblogs.map((post) => (
                  <div
                    key={post.id}
                    className="bg-gray-700/30 border border-gray-600 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1">{post.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.source}</span>
                        </div>
                      </div>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 text-sm font-medium ml-4"
                      >
                        Read →
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <p>No old weblog posts yet. Add your blog URLs in the component.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* New Weblog Section */}
        {activeSection === "new" && (
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">New Weblog</h2>
            <p className="text-gray-400 text-sm mb-6">
              My latest thoughts and ideas.
            </p>
            <div className="space-y-4">
              {newBlogPosts.length > 0 ? (
                newBlogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-gray-700/30 border border-gray-600 rounded-lg p-6 hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-semibold text-lg">{post.title}</h3>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                      {post.content}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <p>No new blog posts yet. Add your thoughts here!</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Window>
  );
};

export default BlogsWindow;

