import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { tutorials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const TutorialCard = ({ index, title, description, date, image, slug, tags, difficulty }) => {
  const { t } = useTranslation();
  const difficultyColors = {
    beginner: "text-green-400",
    intermediate: "text-yellow-400",
    advanced: "text-red-400",
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]"
    >
      <Link to={`/tutorials/${slug}`}>
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 px-3 py-1 rounded-full">
            <span className={`text-[12px] ${difficultyColors[difficulty]}`}>
              {t(`tutorials.difficulty.${difficulty}`)}
            </span>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{date}</p>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${title}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

const Tutorials = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('tutorials.subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t('tutorials.title')}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t('tutorials.description')}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {tutorials.map((tutorial, index) => (
          <TutorialCard key={`tutorial-${index}`} index={index} {...tutorial} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tutorials, "tutorials");

