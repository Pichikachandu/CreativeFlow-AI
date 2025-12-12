import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Hash, MessageSquare, Tag } from 'lucide-react';

const ResultSection = ({ title, icon: Icon, content, delay }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="glass-panel rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-300 border-white/5 hover:border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                            <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg">{title}</h3>
                    </div>
                    <button
                        onClick={handleCopy}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${copied
                            ? 'bg-green-500/20 text-green-400 border border-green-500/20'
                            : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                            }`}
                    >
                        {copied ? <><Check className="w-3 h-3" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
                    </button>
                </div>
                <div className="font-mono text-sm leading-relaxed text-gray-300 whitespace-pre-wrap bg-black/40 rounded-xl p-6 border border-white/5 shadow-inner">
                    {content ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {content}
                        </motion.div>
                    ) : (
                        <div className="flex items-center gap-2 text-gray-600">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                            Generating content...
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const ResultsCard = ({ loading, results }) => {
    if (loading) {
        return (
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className={`glass-panel rounded-2xl p-8 border border-white/5 ${i === 1 ? 'md:col-span-2' : ''}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-white/5 animate-pulse" />
                            <div className="h-6 w-32 bg-white/5 rounded animate-pulse" />
                        </div>
                        <div className="space-y-3">
                            <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
                            <div className="h-4 w-3/4 bg-white/5 rounded animate-pulse" />
                            <div className="h-4 w-5/6 bg-white/5 rounded animate-pulse" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (!results) return null;

    return (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pb-24 px-4">
            <div className="md:col-span-2">
                <ResultSection
                    title="Viral Caption"
                    icon={MessageSquare}
                    content={results.caption}
                    delay={0.1}
                />
            </div>
            <ResultSection
                title="Smart Hashtags"
                icon={Hash}
                content={results.hashtags}
                delay={0.2}
            />
            <ResultSection
                title="Product Description"
                icon={Tag}
                content={results.description}
                delay={0.3}
            />
        </div>
    );
};

export default ResultsCard;
