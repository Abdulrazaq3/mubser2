
import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from './icons';
import { useTranslations } from '../hooks/useTranslations';

const TextToSign: React.FC = () => {
  const { t, isLoaded } = useTranslations();

  // Link to the Google Drive video
  const videoLink = "https://drive.google.com/file/d/1VMQzbaW3yRgMJG13IyMvIy_95z4FH6an/view";
  
  if (!isLoaded) return <section className="py-12 sm:py-20 min-h-[600px]" />;

  return (
    <section className="py-12 sm:py-20 bg-white dark:bg-dark-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary-dark dark:text-white mb-4">
            {t('textToSign.title')}
          </h2>
          <p className="text-center text-primary-light dark:text-accent/80 mb-10 max-w-2xl mx-auto">
            {t('textToSign.subtitle')}
          </p>

          <div className="bg-accent/50 dark:bg-dark-surface p-6 sm:p-8 rounded-3xl shadow-lg border border-primary/10 dark:border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Instructions Area (Static Text) */}
              <div className="flex flex-col gap-4">
                <label className="text-xl font-bold text-primary-dark dark:text-white">
                  {t('textToSign.inputLabel')}
                </label>
                <div className="w-full p-6 bg-white dark:bg-dark-card rounded-2xl shadow-inner text-primary-dark dark:text-white text-lg leading-relaxed min-h-[150px] flex items-center justify-center text-center">
                  <p>{t('textToSign.placeholder')}</p>
                </div>
              </div>

              {/* Video Link Area */}
              <div className="relative aspect-square bg-primary-dark/90 dark:bg-black/50 rounded-2xl overflow-hidden flex items-center justify-center shadow-inner group">
                  {/* Background Overlay Effect */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  
                  <div className="flex flex-col items-center justify-center gap-6 p-6 text-center relative z-10">
                        <motion.a
                            href={videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-24 h-24 rounded-full bg-secondary text-primary-dark flex items-center justify-center shadow-lg hover:bg-secondary-light transition-colors cursor-pointer"
                            aria-label={t('textToSign.startButton')}
                        >
                            <PlayIcon className="w-12 h-12 ml-1" />
                        </motion.a>
                        <p className="text-white/90 text-xl font-medium max-w-[80%]">
                            {t('textToSign.startButton')}
                        </p>
                  </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TextToSign;
