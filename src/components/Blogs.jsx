import { motion } from "framer-motion";
import { styles } from "../styles";
import { blogPosts } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

export const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="bg-tertiary p-6 rounded-2xl hover:border-[#915eff] border border-transparent transition-all duration-300 cursor-pointer"
      onClick={() => window.open(post.link, "_blank")}
    >
      <div className="mb-4">
        <span className="text-[#915eff] text-sm font-medium">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <h3 className="text-white font-bold text-xl mb-3">{post.title}</h3>
      <p className="text-secondary text-sm mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-[#915eff] bg-opacity-20 text-[#915eff] text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={post.link}
        className="text-[#915eff] hover:text-white transition-colors text-sm font-medium"
        onClick={(e) => e.stopPropagation()}
      >
        Read More →
      </a>
    </motion.div>
  );
};

export const BlogsContent = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My thoughts and learnings
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Blog Posts.
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </>
  );
};

const Blogs = BlogsContent;

export default SectionWrapper(Blogs, "blogs");

