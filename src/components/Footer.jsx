import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { socialLinks } from "../constants";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-100 w-full py-8 mt-20">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors text-[14px] font-medium"
              >
                {social.name}
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-secondary text-[14px] text-center"
          >
            <p>
              © {currentYear} Farzan Hosseini. {t('footer.builtWith')}
            </p>
          </motion.div>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            <a
              href="mailto:farzan@example.com"
              className="text-secondary hover:text-white transition-colors text-[14px] font-medium"
            >
              {t('footer.getInTouch')}
            </a>
          </motion.div>
        </div>

        {/* Decorative Line */}
        <div className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-20" />
      </div>
    </footer>
  );
};

export default Footer;

