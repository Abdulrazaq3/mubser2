
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';

const Vision2030: React.FC = () => {
  const { t, T, isLoaded } = useTranslations();
  const points = T('vision2030.points');

  if (!isLoaded) return <section className="py-20" />;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-dark-background dark:to-black overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 dark:opacity-10 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-green-500 blur-[120px]" />
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-secondary blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-12 bg-green-600 rounded-full"></div>
                <h2 className="text-4xl sm:text-5xl font-bold text-primary-dark dark:text-white leading-tight">
                    {t('vision2030.title')}
                </h2>
            </div>
            <h3 className="text-2xl text-secondary font-semibold mb-6">
                {t('vision2030.subtitle')}
            </h3>
            <p className="text-lg text-primary-light dark:text-accent/80 leading-relaxed mb-8">
                {t('vision2030.description')}
            </p>

            <div className="space-y-6">
                {points.map((point: any, index: number) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        className="flex items-start gap-4 bg-white/60 dark:bg-white/5 p-4 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-colors shadow-sm"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 text-green-600 dark:text-green-400 font-bold text-xl">
                            {index + 1}
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-primary-dark dark:text-white mb-1">{point.title}</h4>
                            <p className="text-primary/70 dark:text-accent/70 text-sm">{point.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Animated Visual - "Generated" Image Concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative group"
          >
            {/* The Main Visual Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5] border-[6px] border-white dark:border-gray-700">
                
                {/* Background Image: Futuristic Saudi Concept */}
                <div className="absolute inset-0 bg-black">
                    <img 
                        src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=2070&auto=format&fit=crop" 
                        alt="Future Vision" 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                    />
                     {/* Overlay Gradient */}
                     <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent" />
                     <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
                </div>

                {/* Animated "HUD" Elements to simulate generated futuristic UI */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    {/* Top Part */}
                    <div className="flex justify-between items-start">
                        
                        <div className="text-right">
                             <div className="text-xs text-green-300 font-mono mb-1 tracking-widest">SYSTEM STATUS</div>
                             <div className="flex gap-1 justify-end">
                                 <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                 <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse delay-75" />
                                 <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse delay-150" />
                             </div>
                        </div>
                    </div>

                    {/* Center Animated Circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 flex items-center justify-center">
                         <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                            className="absolute inset-0 border border-dashed border-white/30 rounded-full"
                         />
                         <motion.div 
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                            className="absolute inset-2 border border-dotted border-green-400/40 rounded-full"
                         />
                         <div className="bg-black/30 backdrop-blur-sm p-4 rounded-full">
                             <img src="https://i.postimg.cc/SsZ3p19W/logo-bsr.png" alt="Mubsir" className="w-16 h-16 object-contain opacity-90" />
                         </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                        <div className="flex items-end justify-between mb-2">
                            <span className="text-white font-bold text-2xl">NEOM</span>
                            <span className="text-green-300 font-mono text-sm">AI INTEGRATED</span>
                        </div>
                        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: "0%" }}
                                whileInView={{ width: "98%" }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-green-400 to-secondary w-[98%]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Decorative Elements around the image */}
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-[200px] hidden sm:block"
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">QoL Program</span>
                </div>
                <p className="font-bold text-primary-dark dark:text-white">Improving Livability</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision2030;
