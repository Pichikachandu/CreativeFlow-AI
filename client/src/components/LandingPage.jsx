import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, BarChart3, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import Hero from './Hero';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group"
    >
        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
    </motion.div>
);

const BentoGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 mb-32">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-panel p-6 md:p-10 rounded-3xl md:rounded-[40px] relative overflow-hidden group"
        >
            <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                    <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Lightning-Fast Generation</h3>
                <p className="text-gray-400 max-w-md">Our LLP (Low Latency Pipeline) ensures your content is ready in milliseconds, not minutes.</p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 md:p-10 rounded-3xl md:rounded-[40px] relative overflow-hidden group"
        >
            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Enterprise Secure</h3>
            <p className="text-gray-400">SOC2 Type II ready infrastructure ensuring your assets remain yours.</p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 md:p-10 rounded-3xl md:rounded-[40px]"
        >
            <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 text-pink-400">
                <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Multi-Platform</h3>
            <p className="text-gray-400">One click generation for Instagram, LinkedIn, Twitter, and TikTok.</p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-panel p-6 md:p-10 rounded-3xl md:rounded-[40px] flex flex-col md:flex-row items-center gap-8"
        >
            <div className="flex-1">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                    <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Engagement Analytics</h3>
                <p className="text-gray-400">Predictive scoring helps you select the caption with the highest viral potential.</p>
            </div>
            <div className="w-full md:w-1/3 h-32 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="flex gap-2 items-end h-16">
                    <div className="w-4 bg-purple-500/50 h-8 rounded-t" />
                    <div className="w-4 bg-purple-500/70 h-12 rounded-t" />
                    <div className="w-4 bg-purple-500 h-16 rounded-t" />
                    <div className="w-4 bg-purple-500/70 h-10 rounded-t" />
                </div>
            </div>
        </motion.div>
    </div>
);

const LandingPage = ({ onStart }) => {
    return (
        <div className="overflow-hidden">
            <Hero onStart={onStart} />

            {/* Steps Section */}
            <div id="how-it-works" className="py-24 border-b border-white/5 bg-black/20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
                    >
                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent border-t border-dashed border-white/20" />

                        {[
                            { num: "01", title: "Upload", desc: "Drag & drop your visual assets." },
                            { num: "02", title: "Analyze", desc: "AI identifies context and mood." },
                            { num: "03", title: "Publish", desc: "Copy perfectly tailored content." }
                        ].map((step, i) => (
                            <div key={i} className="relative text-center">
                                <div className="w-16 h-16 mx-auto bg-dark border border-purple-500/30 rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 z-10 relative">
                                    {step.num}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="relative py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for scale</h2>
                        <p className="text-gray-400 text-lg">
                            Everything you need to automate your social media workflow in one powerful platform.
                        </p>
                    </motion.div>
                </div>
                <BentoGrid />
            </div>

            {/* Pricing Section */}
            <div id="pricing" className="py-16 md:py-32 relative">
                <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple Pricing</h2>
                    <p className="text-gray-400 text-lg">Start for free, upgrade when you go viral.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 relative z-10">
                    {[
                        { name: "Starter", price: "Free", feat: ["5 Generations/day", "Standard processing", "Community Support"], color: "bg-blue-500/10 text-blue-400" },
                        { name: "Pro", price: "$29", feat: ["Unlimited Generations", "Hyper-Speed Mode", "Priority Support", "Analytics Dashboard"], color: "bg-purple-500/10 text-purple-400", popular: true },
                        { name: "Team", price: "$99", feat: ["Everything in Pro", "Collaborative Workspace", "API Access", "Dedicated Success Manager"], color: "bg-pink-500/10 text-pink-400" }
                    ].map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`glass-panel p-8 rounded-3xl border ${plan.popular ? 'border-purple-500/50 relative' : 'border-white/5'}`}
                        >
                            {plan.popular && <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>}
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${plan.color}`}>{plan.name}</div>
                            <div className="text-4xl font-bold mb-2">{plan.price}<span className="text-lg text-gray-400 font-normal">/mo</span></div>
                            <ul className="space-y-4 mb-8">
                                {plan.feat.map((f, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={onStart} className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-purple-500 hover:bg-purple-600 text-white' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
                                Choose {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 md:py-32 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto glass-panel rounded-3xl md:rounded-[40px] p-8 md:p-16 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to transform your workflow?</h2>
                        <button
                            onClick={onStart}
                            className="group px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black font-bold text-base md:text-lg hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1 inline-flex items-center gap-2"
                        >
                            Start Creating for Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LandingPage;
