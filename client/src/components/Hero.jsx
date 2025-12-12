import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wand2 } from 'lucide-react';

const Hero = ({ onStart }) => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-20 px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-8"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="tracking-wide">Powered by Llama 3.2 Vision</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-8"
            >
                Create at <br />
                <span className="text-gradient">Hyper Speed</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light px-4"
            >
                Transform your static images into high-converting social assets instantly.
                Enterprise-grade AI analysis for captions, tags, and copy.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-6"
            >
                <button
                    onClick={onStart}
                    className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                    <span className="flex items-center gap-2">
                        Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </button>

                <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all font-medium text-lg backdrop-blur-sm">
                    View Showcase
                </button>
            </motion.div>

            {/* Social Proof / Trusted By */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-20 pt-10 border-t border-white/5 w-full max-w-4xl"
            >
                <p className="text-sm text-gray-500 mb-6 font-medium tracking-widest uppercase">Trusted by innovative teams</p>
                <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Professional Mock Logos */}
                    <div className="flex items-center gap-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        <div className="w-6 h-6 bg-white/20 rounded-md backdrop-blur-sm" /> ACME
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        <div className="w-6 h-6 rounded-full border-2 border-white/20" /> VERTEX
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        <div className="w-6 h-6 bg-white/20 rotate-45 rounded-sm" /> NEXUS
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        <div className="w-6 h-6 border border-white/20 rounded-lg flex items-center justify-center"><div className="w-3 h-3 bg-white/40 rounded-full" /></div> SPHERES
                    </div>
                </div>
            </motion.div>

            {/* 3D Dashboard Preview (Abstract) */}
            <motion.div
                initial={{ opacity: 0, rotateX: 20, y: 100 }}
                animate={{ opacity: 1, rotateX: 20, y: 50 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="mt-16 w-full max-w-5xl perspective-1000 hidden md:block" // perspective-1000 requires custom class or style
                style={{ perspective: '1000px' }}
            >
                <div className="relative rounded-2xl bg-[#0f172a] border border-white/10 shadow-2xl overflow-hidden transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 ease-out p-1 aspect-video ring-1 ring-white/10 group">
                    {/* Screen Refection/Gloss */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />

                    {/* Inner Container */}
                    <div className="relative h-full w-full bg-dark rounded-xl overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                                <div className="w-20 h-2 bg-white/10 rounded-full" />
                            </div>
                        </div>

                        {/* Content Grid */}
                        <div className="p-6 grid grid-cols-12 gap-6 h-full">
                            {/* Sidebar */}
                            <div className="col-span-3 space-y-3">
                                <div className="h-8 w-full bg-purple-500/10 rounded-lg border border-purple-500/10" />
                                <div className="h-8 w-3/4 bg-white/5 rounded-lg" />
                                <div className="h-8 w-5/6 bg-white/5 rounded-lg" />
                                <div className="mt-8 h-32 w-full bg-white/5 rounded-xl border border-white/5" />
                            </div>

                            {/* Main Area */}
                            <div className="col-span-9 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-32 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/5 border border-purple-500/10 p-4">
                                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 mb-4" />
                                        <div className="h-2 w-24 bg-white/10 rounded mb-2" />
                                        <div className="h-2 w-16 bg-white/10 rounded" />
                                    </div>
                                    <div className="h-32 rounded-xl bg-white/5 border border-white/5 p-4">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 mb-4" />
                                        <div className="h-2 w-24 bg-white/10 rounded mb-2" />
                                        <div className="h-2 w-16 bg-white/10 rounded" />
                                    </div>
                                </div>

                                <div className="h-48 rounded-xl bg-white/[0.02] border border-white/5 p-4 flex items-end gap-2">
                                    <div className="flex-1 bg-purple-500/20 rounded-t-lg h-[40%]" />
                                    <div className="flex-1 bg-purple-500/30 rounded-t-lg h-[60%]" />
                                    <div className="flex-1 bg-purple-500/40 rounded-t-lg h-[30%]" />
                                    <div className="flex-1 bg-purple-500/50 rounded-t-lg h-[80%]" />
                                    <div className="flex-1 bg-purple-500/60 rounded-t-lg h-[50%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Glow under the dashboard */}
                <div className="absolute -inset-4 bg-purple-500/20 blur-[100px] -z-10 rounded-full" />
            </motion.div>
        </div>
    );
};

export default Hero;
