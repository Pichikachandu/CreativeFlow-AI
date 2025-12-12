import React, { useState } from 'react';
import { Sparkles, Globe, PenTool, Menu, X } from 'lucide-react';

const Layout = ({ children, onHome, onStart }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (onHome) {
            onHome();
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-purple-500 selection:text-white">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 bg-dark">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-purple-500/10 blur-[120px] rounded-full transform -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2" />
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-dark/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={onHome}>
                        <Sparkles className="w-6 h-6 text-purple-400" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            CreativeFlow AI
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                        <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button>
                        <button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors">How it Works</button>
                        <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Pricing</button>
                    </div>

                    <div className="hidden md:block">
                        <button onClick={onStart} className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-400 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-dark/95 border-b border-white/5 backdrop-blur-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-4">
                        <button onClick={() => scrollToSection('features')} className="text-left text-lg font-medium text-gray-300 hover:text-white py-2">Features</button>
                        <button onClick={() => scrollToSection('how-it-works')} className="text-left text-lg font-medium text-gray-300 hover:text-white py-2">How it Works</button>
                        <button onClick={() => scrollToSection('pricing')} className="text-left text-lg font-medium text-gray-300 hover:text-white py-2">Pricing</button>
                        <div className="h-px bg-white/10 my-2" />
                        <button onClick={() => { setIsMobileMenuOpen(false); onStart(); }} className="w-full py-3 rounded-xl bg-purple-500 text-white font-bold text-center">
                            Get Started
                        </button>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="relative z-10 pt-24 pb-12 px-6 max-w-7xl mx-auto">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 py-12 text-center text-gray-500 text-sm">
                <p>© 2025 CreativeFlow AI. Built with Llama 3.2 & React.</p>
            </footer>
        </div>
    );
};

export default Layout;
