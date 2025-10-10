import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { tutorials } from "../constants";
import { github } from "../assets";

const TutorialPost = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const tutorial = tutorials.find((tut) => tut.slug === slug);

  if (!tutorial) {
    return <Navigate to="/tutorials" replace />;
  }

  const difficultyColors = {
    beginner: "text-green-400",
    intermediate: "text-yellow-400",
    advanced: "text-red-400",
  };

  return (
    <div className="pt-20 px-6 max-w-4xl mx-auto">
      <Link
        to="/tutorials"
        className="text-secondary hover:text-white transition-colors mb-8 inline-block"
      >
        ← {t('tutorials.backToTutorials')}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`${styles.heroHeadText} text-white mb-4`}>
          {tutorial.title}
        </h1>
        <div className="flex items-center gap-4 mb-8">
          <p className="text-secondary text-[14px]">{tutorial.date}</p>
          <span className={`text-[14px] ${difficultyColors[tutorial.difficulty]}`}>
            {t(`tutorials.difficulty.${tutorial.difficulty}`)}
          </span>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {tutorial.tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[14px] ${tag.color} bg-tertiary px-3 py-1 rounded-full`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        <img
          src={tutorial.image}
          alt={tutorial.title}
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />

        <div className="prose prose-invert max-w-none">
          {tutorial.content.split("\n\n").map((paragraph, index) => {
            // Handle code blocks
            if (paragraph.startsWith("```")) {
              const code = paragraph.replace(/```/g, "").trim();
              return (
                <pre key={index} className="bg-tertiary p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-white text-[14px]">{code}</code>
                </pre>
              );
            }
            // Handle headings
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-white text-[28px] font-bold mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            // Handle regular paragraphs
            return (
              <p key={index} className="text-secondary text-[17px] leading-[30px] mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        {tutorial.github && (
          <div className="mt-8 pt-8 border-t border-tertiary">
            <a
              href={tutorial.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-secondary transition-colors"
            >
              <img src={github} alt="github" className="w-6 h-6" />
              {t('tutorials.viewSourceCode')}
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TutorialPost;

