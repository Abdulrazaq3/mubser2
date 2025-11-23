
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useTranslations } from '../../hooks/useTranslations';
import { ReadIcon, BriefcaseIcon, BuildingIcon, CheckIcon } from '../icons';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const LicensingPage: React.FC = () => {
  const { t, T, isLoaded } = useTranslations();
  
  if (!isLoaded) return <div className="bg-white dark:bg-dark-background min-h-screen" />;

  const features = T('licensing.whyFeatures') as string[];

  return (
    <div className="bg-white dark:bg-dark-background">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-accent/20 dark:bg-accent/5 animated-gradient">
        <div className="container mx-auto px-4 text-center">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold text-primary-dark dark:text-primary-dark mb-4"
            >
                {t('licensing.title')}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-primary/80 max-w-3xl mx-auto"
            >
                {t('licensing.subtitle')}
            </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                  <h2 className="text-3xl font-bold text-primary-dark dark:text-white mb-6">{t('licensing.about.title')}</h2>
                  <p className="text-lg text-primary-light dark:text-accent/80 leading-relaxed">
                      {t('licensing.about.content')}
                  </p>
              </motion.div>
          </div>
      </section>

      {/* Why Mubsir Dataset (Feature List) */}
      <section className="py-12 bg-white dark:bg-dark-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4 bg-accent/10 dark:bg-dark-card/50 p-4 rounded-xl border border-secondary/10"
                    >
                        <div className="flex-shrink-0 mt-1">
                            <CheckIcon className="w-6 h-6 text-secondary" />
                        </div>
                        <p className="text-lg text-primary-dark dark:text-white font-medium">{feature}</p>
                    </motion.div>
                ))}
            </div>
          </div>
      </section>

      {/* License Types Section */}
      <section className="py-16 sm:py-20 bg-accent/10 dark:bg-dark-surface">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary-dark dark:text-white mb-12">{t('licensing.types.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Academic */}
                <motion.div 
                    custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
                    className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-lg text-center dark:border dark:border-white/10 flex flex-col"
                >
                    <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                        <ReadIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-2">{t('licensing.types.academic.title')}</h3>
                    <p className="text-2xl font-bold text-secondary mb-4">{t('licensing.types.academic.price')}</p>
                    <p className="text-primary-light dark:text-accent/80 text-sm flex-grow leading-relaxed">{t('licensing.types.academic.description')}</p>
                </motion.div>
                
                {/* Commercial */}
                <motion.div 
                    custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
                    className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-lg text-center dark:border dark:border-white/10 relative transform md:-translate-y-4 border-2 border-secondary/20 flex flex-col"
                >
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary-dark px-4 py-1 rounded-full text-sm font-bold">Popular</div>
                    <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                        <BriefcaseIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-2">{t('licensing.types.commercial.title')}</h3>
                    <p className="text-2xl font-bold text-secondary mb-4">{t('licensing.types.commercial.price')}</p>
                    <p className="text-primary-light dark:text-accent/80 text-sm flex-grow leading-relaxed">{t('licensing.types.commercial.description')}</p>
                </motion.div>

                {/* Enterprise */}
                <motion.div 
                    custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
                    className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-lg text-center dark:border dark:border-white/10 flex flex-col"
                >
                    <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                        <BuildingIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-2">{t('licensing.types.enterprise.title')}</h3>
                    <p className="text-2xl font-bold text-secondary mb-4">{t('licensing.types.enterprise.price')}</p>
                    <p className="text-primary-light dark:text-accent/80 text-sm flex-grow leading-relaxed">{t('licensing.types.enterprise.description')}</p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* CTA & Contact */}
      <section className="py-16 sm:py-24 bg-primary dark:bg-dark-card text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">{t('licensing.cta.title')}</h2>
                <motion.a
                    href={`mailto:${t('licensing.contact.email')}?subject=Dataset License Request`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-secondary text-primary-dark font-bold py-4 px-10 rounded-2xl text-xl shadow-lg hover:bg-secondary-light transition-all duration-300 mb-12"
                >
                    {t('licensing.cta.button')}
                </motion.a>
                
                <div className="border-t border-white/20 pt-12 max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold mb-4">{t('licensing.contact.title')}</h3>
                    <p className="text-accent/80 mb-6">{t('licensing.contact.text')}</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
                        <a href={`mailto:${t('licensing.contact.email')}`} className="hover:text-secondary transition-colors flex items-center justify-center gap-2">
                            <span>✉️</span> {t('licensing.contact.email')}
                        </a>
                        <a href={`tel:${t('licensing.contact.phone').replace(/\s/g, '')}`} className="hover:text-secondary transition-colors flex items-center justify-center gap-2" dir="ltr">
                            <span>📞</span> {t('licensing.contact.phone')}
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LicensingPage;
