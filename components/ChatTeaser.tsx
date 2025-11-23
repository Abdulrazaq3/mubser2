
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';

const ChatTeaser: React.FC = () => {
  const { t, isLoaded } = useTranslations();

  if (!isLoaded) return null;

  return (
    <section className="bg-white dark:bg-dark-background py-12 border-b border-primary/5 dark:border-white/5">
        <div className="container mx-auto px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg"
            >
                <div className="text-center md:text-right flex-1">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            {t('chatTeaser.title')}
                        </h2>
                    </div>
                    <p className="text-accent/90 text-lg mb-6 max-w-xl mx-auto md:mx-0">
                        {t('chatTeaser.subtitle')}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-primary-dark font-bold py-3 px-8 rounded-xl shadow-md hover:bg-accent transition-colors flex items-center gap-2 mx-auto md:mx-0"
                        disabled
                    >
                        <span>{t('chatTeaser.button')}</span>
                        <span className="text-xs bg-secondary text-primary-dark px-2 py-0.5 rounded-full">
                            {t('chatTeaser.commingSoon')}
                        </span>
                    </motion.button>
                </div>
                
                <motion.div 
                    className="flex-shrink-0"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Abstract Chat Visual */}
                    <div className="relative w-40 h-40 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-secondary">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div className="absolute -top-2 -right-2 bg-secondary text-primary-dark text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                            AI
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
  );
};

export default ChatTeaser;
