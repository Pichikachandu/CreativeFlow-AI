import React, { useCallback, useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// Standard input is safer to avoid extra install command if possible, but dropzone is nicer. 
// I'll implement a custom simple dropzone without the library to save time/complexity or if I am confident.
// Actually, I can just use a simple input for now or standard drag events. I'll use standard events.

const UploadZone = ({ onFileSelect, selectedImage, onClear }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            onFileSelect(file);
        }
    };

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileSelect(file);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto mb-12 px-4">
            <AnimatePresence>
                {!selectedImage ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`relative rounded-3xl border transition-all duration-300 overflow-hidden ${isDragging
                            ? 'border-purple-500 bg-purple-500/10 scale-[1.02] shadow-[0_0_30px_rgba(168,85,247,0.2)]'
                            : 'border-white/10 hover:border-purple-500/50 hover:bg-white/5'
                            }`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        {/* Animated Gradient Background on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileInput}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                        />
                        <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 text-gray-400 group-hover:text-white transition-colors">
                                <Upload className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">Upload your creation</h3>
                            <p className="text-gray-400 mb-6">Drag & drop or click to browse</p>
                            <div className="flex gap-2 p-2 rounded-lg bg-black/20 text-xs text-gray-500">
                                <span>JPG</span>
                                <span>PNG</span>
                                <span>WEBP</span>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative rounded-3xl overflow-hidden glass-panel group"
                    >
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Preview"
                            className="w-full h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                            <button
                                onClick={onClear}
                                className="p-3 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all backdrop-blur-md"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-sm font-medium truncate">{selectedImage.name}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UploadZone;
