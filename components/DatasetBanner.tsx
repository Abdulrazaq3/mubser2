
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';

const DatasetBanner: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section className="bg-primary text-accent py-16 relative overflow-hidden">
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0 opacity-10" 
            style={{ backgroundImage: 'radial-gradient(#e4aa68 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary text-sm font-bold mb-4 border border-secondary/30">
                    Data Asset
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {t('datasetBanner.title')}
                </h2>
                <p className="text-xl text-accent/80 max-w-3xl mx-auto font-medium">
                    {t('datasetBanner.subtitle')}
                </p>
            </motion.div>
        </div>
    </section>
  );
};

export default DatasetBanner;
