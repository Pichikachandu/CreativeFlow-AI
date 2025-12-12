import React, { useState } from 'react';
import axios from 'axios';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import UploadZone from './components/UploadZone';
import ResultsCard from './components/ResultsCard';

function App() {
  const [view, setView] = useState('hero'); // hero, create
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleStart = () => {
    setView('create');
  };

  const handleImageSelect = async (file) => {
    setImage(file);
    setLoading(true);
    setResults(null);

    // Create form data
    const formData = new FormData();
    formData.append('image', file);

    try {
      // Use relative path - Vite proxy handles dev, Vercel rewrite handles prod
      const response = await axios.post('/api/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error generating content:", error);
      const msg = error.response?.data?.error || "Something went wrong! Make sure the server is defined and API key is set.";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setImage(null);
    setResults(null);
  };

  return (
    <Layout onHome={() => setView('hero')} onStart={handleStart}>
      {view === 'hero' ? (
        <LandingPage onStart={handleStart} />
      ) : (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Create Magic</h2>
            <p className="text-gray-400">Upload your image and let AI handle the rest</p>
          </div>

          <UploadZone
            onFileSelect={handleImageSelect}
            selectedImage={image}
            onClear={handleClear}
          />

          <ResultsCard loading={loading} results={results} />
        </div>
      )}
    </Layout>
  );
}

export default App;
