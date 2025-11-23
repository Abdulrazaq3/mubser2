
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckIcon, UserIcon, UsersIcon, BuildingIcon, BriefcaseIcon } from './icons';

const Pricing: React.FC = () => {
  const { t, T, isLoaded } = useTranslations();
  const { dir } = useLanguage();
  const [isB2B, setIsB2B] = useState(false);
  
  // Safely access nested properties from the T function result
  const plansData = T('pricing.plans') as any;
  
  if (!isLoaded || !plansData) return null;

  const b2cPlans = [
    { ...plansData.free, icon: <UserIcon className="w-8 h-8"/>, highlight: false },
    { ...plansData.personal, icon: <UserIcon className="w-8 h-8"/>, highlight: true },
    { ...plansData.family, icon: <UsersIcon className="w-8 h-8"/>, highlight: false }
  ];

  const b2bPlans = [
    { ...plansData.small, icon: <BriefcaseIcon className="w-8 h-8"/>, highlight: false },
    { ...plansData.standard, icon: <BuildingIcon className="w-8 h-8"/>, highlight: true },
    { ...plansData.enterprise, icon: <BuildingIcon className="w-8 h-8"/>, highlight: false }
  ];

  const currentPlans = isB2B ? b2bPlans : b2cPlans;

  const isRTL = dir === 'rtl';
  const contactEmail = "Mubser.info0@gmail.com";

  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-dark-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-primary-light dark:text-accent/80 text-lg mb-8">
            {t('pricing.subtitle')}
          </p>

          {/* Toggle Switch - Improved Design */}
          <div className="flex justify-center items-center mb-12">
             <div className="bg-white dark:bg-dark-card p-1.5 rounded-2xl border border-primary/10 dark:border-white/10 shadow-md inline-flex relative min-w-[340px]">
                 {/* The Animated Background Slider */}
                 <motion.div 
                    className="absolute top-1.5 bottom-1.5 rounded-xl bg-secondary shadow-sm z-0"
                    initial={false}
                    animate={{ 
                        x: isB2B ? (isRTL ? '0%' : '100%') : (isRTL ? '100%' : '0%'),
                    }}
                    style={{ 
                        width: 'calc(50% - 6px)', // Subtracting padding
                        left: '3px' // Initial offset due to padding
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                 />
                 
                 {/* Button 1: B2C */}
                 <button 
                    onClick={() => setIsB2B(false)}
                    className={`relative z-10 w-1/2 py-3 px-4 rounded-xl text-base font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${!isB2B ? 'text-primary-dark' : 'text-primary/60 dark:text-accent/60 hover:text-primary dark:hover:text-white'}`}
                 >
                    <UserIcon className={`w-5 h-5 ${!isB2B ? 'text-primary-dark' : 'text-primary/40 dark:text-accent/40'}`} />
                    {t('pricing.b2c')}
                 </button>

                 {/* Button 2: B2B */}
                 <button 
                    onClick={() => setIsB2B(true)}
                    className={`relative z-10 w-1/2 py-3 px-4 rounded-xl text-base font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${isB2B ? 'text-primary-dark' : 'text-primary/60 dark:text-accent/60 hover:text-primary dark:hover:text-white'}`}
                 >
                    <BriefcaseIcon className={`w-5 h-5 ${isB2B ? 'text-primary-dark' : 'text-primary/40 dark:text-accent/40'}`} />
                    {t('pricing.b2b')}
                 </button>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentPlans.map((plan: any, index: number) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`bg-white dark:bg-dark-card rounded-3xl p-8 shadow-lg flex flex-col relative border-2 ${plan.highlight ? 'border-secondary transform md:-translate-y-4 shadow-xl' : 'border-transparent dark:border-white/5'}`}
                >
                    {plan.highlight && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary-dark px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                            Recommended
                        </div>
                    )}
                    
                    <div className="mb-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${plan.highlight ? 'bg-secondary/20 text-secondary' : 'bg-gray-100 dark:bg-white/5 text-primary-dark dark:text-white'}`}>
                            {plan.icon}
                        </div>
                        <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-extrabold text-primary-dark dark:text-white">{plan.price}</span>
                            <span className="text-primary-light dark:text-accent/70 text-sm">{plan.period}</span>
                        </div>
                    </div>

                    <div className="flex-grow space-y-4 mb-8">
                        {plan.features && plan.features.map((feature: string, i: number) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckIcon className={`w-5 h-5 ${plan.highlight ? 'text-secondary' : 'text-green-500'}`} />
                                </div>
                                <span className="text-primary/80 dark:text-accent/80 text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <a 
                        href={`mailto:${contactEmail}?subject=Subscription Request: ${plan.name}`}
                        className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center ${plan.highlight ? 'bg-secondary text-primary-dark hover:bg-secondary-light' : 'bg-primary text-white hover:bg-primary-light dark:bg-white/10 dark:hover:bg-white/20'}`}
                    >
                        {t('pricing.choosePlan')}
                    </a>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
