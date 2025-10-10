import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { blogPosts } from "../constants";
import { fadeIn } from "../utils/motion";
import { github } from "../assets";

const BlogPost = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-20 px-6 max-w-4xl mx-auto">
      <Link
        to="/blog"
        className="text-secondary hover:text-white transition-colors mb-8 inline-block"
      >
        ← {t('blog.backToBlog')}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`${styles.heroHeadText} text-white mb-4`}>
          {post.title}
        </h1>
        <p className="text-secondary text-[14px] mb-8">{post.date}</p>

        <div className="mb-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[14px] ${tag.color} bg-tertiary px-3 py-1 rounded-full`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />

        <div className="prose prose-invert max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-secondary text-[17px] leading-[30px] mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {post.github && (
          <div className="mt-8 pt-8 border-t border-tertiary">
            <a
              href={post.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-secondary transition-colors"
            >
              <img src={github} alt="github" className="w-6 h-6" />
              {t('blog.viewOnGithub')}
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BlogPost;

