import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen`}
      >
        {/* Main Content */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <h1 className={`${styles.heroHeadText} text-white mb-4`}>
            {t('home.greeting')} <span className="text-[#915EFF]">{t('home.name')}</span>
          </h1>
          <p className={`${styles.heroSubText} text-secondary max-w-3xl mx-auto`}>
            {t('home.title')}
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={fadeIn("", "", 0.3, 1)}
          initial="hidden"
          animate="show"
          className="mt-10 max-w-4xl text-center"
        >
          <p className="text-white text-[18px] leading-[30px]">
            {t('home.description')}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeIn("", "", 0.5, 1)}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-wrap gap-6 justify-center"
        >
          <Link to="/portfolio">
            <button className="bg-tertiary py-4 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#1d1836] transition-all">
              {t('home.ctaPortfolio')}
            </button>
          </Link>
          <Link to="/blog">
            <button className="bg-[#915EFF] py-4 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#7b4fd6] transition-all">
              {t('home.ctaBlog')}
            </button>
          </Link>
          <Link to="/tutorials">
            <button className="bg-tertiary py-4 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#1d1836] transition-all">
              {t('home.ctaTutorials')}
            </button>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeIn("", "", 0.7, 1)}
          initial="hidden"
          animate="show"
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
        >
          <Link to="/portfolio" className="group">
            <div className="bg-tertiary p-8 rounded-2xl hover:bg-[#1d1836] transition-all cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#915EFF] rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-[22px] font-bold mb-2">{t('home.portfolioTitle')}</h3>
                <p className="text-secondary text-[14px]">
                  {t('home.portfolioDesc')}
                </p>
              </div>
            </div>
          </Link>

          <Link to="/blog" className="group">
            <div className="bg-tertiary p-8 rounded-2xl hover:bg-[#1d1836] transition-all cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#915EFF] rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-[22px] font-bold mb-2">{t('home.blogTitle')}</h3>
                <p className="text-secondary text-[14px]">
                  {t('home.blogDesc')}
                </p>
              </div>
            </div>
          </Link>

          <Link to="/tutorials" className="group">
            <div className="bg-tertiary p-8 rounded-2xl hover:bg-[#1d1836] transition-all cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#915EFF] rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-[22px] font-bold mb-2">{t('home.tutorialsTitle')}</h3>
                <p className="text-secondary text-[14px]">
                  {t('home.tutorialsDesc')}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeIn("", "", 0.9, 1)}
          initial="hidden"
          animate="show"
          className="mt-16 flex gap-6"
        >
          <a
            href="https://github.com/FarzanHosseini"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center hover:bg-[#915EFF] transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/farzan-hosseini"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center hover:bg-[#915EFF] transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/farzanhosseini"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center hover:bg-[#915EFF] transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="mailto:farzan@example.com"
            className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center hover:bg-[#915EFF] transition-all"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeIn("", "", 1.1, 1)}
          initial="hidden"
          animate="show"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <p className="text-secondary text-[14px] mb-2 text-center">{t('home.exploreMore')}</p>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 mx-auto">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
