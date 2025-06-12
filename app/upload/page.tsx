'use client';

import { useState } from 'react';

export default function UploadPage() {
    const [activeTab, setActiveTab] = useState('upload');
    const [figmaUrl, setFigmaUrl] = useState('');
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [generatedCode, setGeneratedCode] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [selectedFramework, setSelectedFramework] = useState('React Native');

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleGenerate = async () => {
        setIsGenerating(true);
        // Simulate code generation
        setTimeout(() => {
            setGeneratedCode(`import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GeneratedComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lynx Studio</Text>
      <Text style={styles.subtitle}>AI-Generated ${selectedFramework} Component</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#f97316',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GeneratedComponent;`);
            setIsGenerating(false);
            setActiveTab('code');
        }, 2000);
    };

    const frameworks = [
        { name: 'React Native', icon: '📱', color: 'bg-blue-500' },
        { name: 'React', icon: '⚛️', color: 'bg-cyan-500' },
        { name: 'Vue.js', icon: '💚', color: 'bg-green-500' },
        { name: 'Flutter', icon: '🐦', color: 'bg-purple-500' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            {/* Navigation */}
            <nav className="fixed top-4 left-4 right-4 z-50 px-8 py-6 flex justify-between items-center border border-gray-800/30 backdrop-blur-xl bg-gray-900/20 transition-all duration-300 hover:bg-gray-900/30 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.location.href = '/'}>
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <span className="text-white font-bold text-base">LS</span>
                    </div>
                    <span className="text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400">
                        Lynx Studio
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-gray-800/50"
                    >
                        ← Back to Home
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-32 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Transform Your{' '}
                            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                                Figma Designs
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Upload your Figma files or paste design URLs to generate production-ready code instantly
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-800/50 rounded-full p-1 backdrop-blur-sm border border-gray-700/50">
                            <button
                                onClick={() => setActiveTab('upload')}
                                className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                                    activeTab === 'upload'
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                            >
                                Upload & Generate
                            </button>
                            <button
                                onClick={() => setActiveTab('code')}
                                className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                                    activeTab === 'code'
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                            >
                                Generated Code
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="max-w-6xl mx-auto">
                        {activeTab === 'upload' && (
                            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Figma URL Input */}
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                                <span className="text-white text-sm">🔗</span>
                                            </div>
                                            <h3 className="text-2xl font-semibold">Figma URL</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <input
                                                type="url"
                                                placeholder="Paste your Figma file URL here..."
                                                value={figmaUrl}
                                                onChange={(e) => setFigmaUrl(e.target.value)}
                                                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                                            />
                                            <p className="text-sm text-gray-400">
                                                Example: https://www.figma.com/file/abc123/your-design
                                            </p>
                                        </div>
                                    </div>

                                    {/* File Upload */}
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                                                <span className="text-white text-sm">📁</span>
                                            </div>
                                            <h3 className="text-2xl font-semibold">Upload Screenshot</h3>
                                        </div>
                                        <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300 hover:bg-gray-800/30">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileUpload}
                                                className="hidden"
                                                id="file-upload"
                                            />
                                            <label htmlFor="file-upload" className="cursor-pointer">
                                                <div className="space-y-4">
                                                    <div className="text-4xl">📸</div>
                                                    <div>
                                                        <p className="text-lg font-medium">Drop your design here</p>
                                                        <p className="text-gray-400">or click to browse</p>
                                                        <p className="text-xs text-gray-500 mt-2">PNG, JPG, SVG up to 10MB</p>
                                                    </div>
                                                </div>
                                            </label>
                                            {uploadedFile && (
                                                <div className="mt-4 p-3 bg-gray-800 rounded-lg border border-green-500/30">
                                                    <p className="text-green-400 flex items-center justify-center space-x-2">
                                                        <span>✓</span>
                                                        <span>{uploadedFile.name}</span>
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Framework Selection */}
                                <div className="mt-8">
                                    <div className="flex items-center space-x-3 mb-6">
                                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                            <span className="text-white text-sm">⚙️</span>
                                        </div>
                                        <h3 className="text-2xl font-semibold">Target Framework</h3>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {frameworks.map((framework) => (
                                            <button
                                                key={framework.name}
                                                onClick={() => setSelectedFramework(framework.name)}
                                                className={`p-6 border rounded-xl transition-all duration-300 text-center transform hover:scale-105 ${
                                                    selectedFramework === framework.name
                                                        ? 'border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20'
                                                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500 hover:bg-gray-700/50'
                                                }`}
                                            >
                                                <div className="text-3xl mb-3">{framework.icon}</div>
                                                <p className="font-medium">{framework.name}</p>
                                                {selectedFramework === framework.name && (
                                                    <div className="mt-2">
                                                        <span className="text-orange-400 text-sm">✓ Selected</span>
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Generate Button */}
                                <div className="mt-8 text-center">
                                    <button
                                        onClick={handleGenerate}
                                        disabled={!figmaUrl && !uploadedFile || isGenerating}
                                        className="bg-gradient-to-r from-orange-500 to-red-500 px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {isGenerating ? (
                                            <span className="flex items-center space-x-3">
                                                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                                                <span>Generating Code...</span>
                                            </span>
                                        ) : (
                                            <span className="flex items-center space-x-2">
                                                <span>🚀</span>
                                                <span>Generate Code</span>
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'code' && (
                            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                                            <span className="text-white text-sm">💻</span>
                                        </div>
                                        <h3 className="text-2xl font-semibold">Generated Code</h3>
                                        {generatedCode && (
                                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                                                {selectedFramework}
                                            </span>
                                        )}
                                    </div>
                                    {generatedCode && (
                                        <div className="flex space-x-3">
                                            <button 
                                                onClick={() => navigator.clipboard.writeText(generatedCode)}
                                                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center space-x-2"
                                            >
                                                <span>📋</span>
                                                <span>Copy</span>
                                            </button>
                                            <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
                                                <span>⬇️</span>
                                                <span>Download</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                                
                                {generatedCode ? (
                                    <div className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden">
                                        <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800">
                                            <span className="text-sm text-gray-400">Generated {selectedFramework} Component</span>
                                            <div className="flex space-x-2">
                                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="p-6 overflow-x-auto">
                                            <pre className="text-sm">
                                                <code className="text-gray-300">{generatedCode}</code>
                                            </pre>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-16 text-gray-400">
                                        <div className="text-6xl mb-6">🔧</div>
                                        <p className="text-xl mb-2">No code generated yet</p>
                                        <p>Upload a design and generate code to see results here</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}'use client';

import { useState } from 'react';

export default function UploadPage() {
    const [activeTab, setActiveTab] = useState('upload');
    const [figmaUrl, setFigmaUrl] = useState('');
    const [uploadedFile, setUploadedFile] = useState<File | null'use client';

import { useState } from 'react';

export default function UploadPage() {
    const [activeTab, setActiveTab] = useState('upload');
    const [figmaUrl, setFigmaUrl] = useState('');
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [generatedCode, setGeneratedCode] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [selectedFramework, setSelectedFramework] = useState('React Native');

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleGenerate = async () => {
        setIsGenerating(true);
        // Simulate code generation
        setTimeout(() => {
            setGeneratedCode(`import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GeneratedComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lynx Studio</Text>
      <Text style={styles.subtitle}>AI-Generated ${selectedFramework} Component</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#f97316',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GeneratedComponent;`);
            setIsGenerating(false);
            setActiveTab('code');
        }, 2000);
    };

    const frameworks = [
        { name: 'React Native', icon: '📱', color: 'bg-blue-500' },
        { name: 'React', icon: '⚛️', color: 'bg-cyan-500' },
        { name: 'Vue.js', icon: '💚', color: 'bg-green-500' },
        { name: 'Flutter', icon: '🐦', color: 'bg-purple-500' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            {/* Navigation */}
            <nav className="fixed top-4 left-4 right-4 z-50 px-8 py-6 flex justify-between items-center border border-gray-800/30 backdrop-blur-xl bg-gray-900/20 transition-all duration-300 hover:bg-gray-900/30 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.location.href = '/'}>
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <span className="text-white font-bold text-base">LS</span>
                    </div>
                    <span className="text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400">
                        Lynx Studio
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-gray-800/50"
                    >
                        ← Back to Home
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-32 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Transform Your{' '}
                            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                                Figma Designs
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Upload your Figma files or paste design URLs to generate production-ready code instantly
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-800/50 rounded-full p-1 backdrop-blur-sm border border-gray-700/50">
                            <button
                                onClick={() => setActiveTab('upload')}
                                className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                                    activeTab === 'upload'
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                            >
                                Upload & Generate
                            </button>
                            <button
                                onClick={() => setActiveTab('code')}
                                className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                                    activeTab === 'code'
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                            >
                                Generated Code
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="max-w-6xl mx-auto">
                        {activeTab === 'upload' && (
                            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Figma URL Input */}
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                                <span className="text-white text-sm">🔗</span>
                                            </div>
                                            <h3 className="text-2xl font-semibold">Figma URL</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <input
                                                type="url"
                                                placeholder="Paste your Figma file URL here..."
                                                value={figmaUrl}
                                                onChange={(e) => setFigmaUrl(e.target.value)}
                                                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                                            />
                                            <p className="text-sm text-gray-400">
                                                Example: https://www.figma.com/file/abc123/your-design
                                            </p>
                                        </div>
                                    </div>

                                    {/* File Upload */}
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                                                <span className="text-white text-sm">📁</span>
                                            </div>
                                            <h3 className="text-2xl font-semibold">Upload Screenshot</h3>
                                        </div>
                                        <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300 hover:bg-gray-800/30">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileUpload}
                                                className="hidden"
                                                id="file-upload"
                                            />
                                            <label htmlFor="file-upload" className="cursor-pointer">
                                                <div className="space-y-4">
                                                    <div className="text-4xl">📸</div>
                                                    <div>
                                                        <p className="text-lg font-medium">Drop your design here</p>
                                                        <p className="text-gray-400">or click to browse</p>
                                                        <p className="text-xs text-gray-500 mt-2">PNG, JPG, SVG up to 10MB</p>
                                                    </div>
                                                </div>
                                            </label>
                                            {uploadedFile && (
                                                <div className="mt-4 p-3 bg-gray-800 rounded-lg border border-green-500/30">
                                                    <p className="text-green-400 flex items-center justify-center space-x-2">
                                                        <span>✓</span>
                                                        <span>{uploadedFile.name}</span>
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Framework Selection */}
                                <div className="mt-8">
                                    <div className="flex items-center space-x-3 mb-6">
                                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                            <span className="text-white text-sm">⚙️</span>
                                        </div>
                                        <h3 className="text-2xl font-semibold">Target Framework</h3>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {frameworks.map((framework) => (
                                            <button
                                                key={framework.name}
                                                onClick={() => setSelectedFramework(framework.name)}
                                                className={`p-6 border rounded-xl transition-all duration-300 text-center transform hover:scale-105 ${
                                                    selectedFramework === framework.name
                                                        ? 'border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20'
                                                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500 hover:bg-gray-700/50'
                                                }`}
                                            >
                                                <div className="text-3xl mb-3">{framework.icon}</div>
                                                <p className="font-medium">{framework.name}</p>
                                                {selectedFramework === framework.name && (
                                                    <div className="mt-2">
                                                        <span className="text-orange-400 text-sm">✓ Selected</span>
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Generate Button */}
                                <div className="mt-8 text-center">
                                    <button
                                        onClick={handleGenerate}
                                        disabled={!figmaUrl && !uploadedFile || isGenerating}
                                        className="bg-gradient-to-r from-orange-500 to-red-500 px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {isGenerating ? (
                                            <span className="flex items-center space-x-3">
                                                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                                                <span>Generating Code...</span>
                                            </span>
                                        ) : (
                                            <span className="flex items-center space-x-2">
                                                <span>🚀</span>
                                                <span>Generate Code</span>
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'code' && (
                            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                                            <span className="text-white text-sm">💻</span>
                                        </div>
                                        <h3 className="text-2xl font-semibold">Generated Code</h3>
                                        {generatedCode && (
                                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                                                {selectedFramework}
                                            </span>
                                        )}
                                    </div>
                                    {generatedCode && (
                                        <div className="flex space-x-3">
                                            <button 
                                                onClick={() => navigator.clipboard.writeText(generatedCode)}
                                                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center space-x-2"
                                            >
                                                <span>📋</span>
                                                <span>Copy</span>
                                            </button>
                                            <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
                                                <span>⬇️</span>
                                                <span>Download</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                                
                                {generatedCode ? (
                                    <div className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden">
                                        <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800">
                                            <span className="text-sm text-gray-400">Generated {selectedFramework} Component</span>
                                            <div className="flex space-x-2">
                                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="p-6 overflow-x-auto">
                                            <pre className="text-sm">
                                                <code className="text-gray-300">{generatedCode}</code>
                                            </pre>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-16 text-gray-400">
                                        <div className="text-6xl mb-6">🔧</div>
                                        <p className="text-xl mb-2">No code generated yet</p>
                                        <p>Upload a design and generate code to see results here</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}(null);
    const [generatedCode, setGeneratedCode] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleGenerate = async () => {
        setIsGenerating(true);
        // Simulate code generation
        setTimeout(() => {
            setGeneratedCode(`import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GeneratedComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lynx Studio</Text>
      <Text style={styles.subtitle}>AI-Generated Component</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#f97316',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GeneratedComponent;`);
            setIsGenerating(false);
            setActiveTab('code');
        }, 2000);
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
            data-oid="0sz1-el"
        >
            {/* Navigation */}
            <nav
                className="fixed top-4 left-4 right-4 z-50 px-8 py-6 flex justify-between items-center border border-gray-800/30 backdrop-blur-xl bg-gray-900/20 transition-all duration-300 hover:bg-gray-900/30 rounded-2xl shadow-lg"
                data-oid="zt02ged"
            >
                <div
                    className="flex items-center space-x-3 group cursor-pointer"
                    onClick={() => (window.location.href = '/')}
                    data-oid="h:ewfu:"
                >
                    <div
                        className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        data-oid="l3gbi:k"
                    >
                        <span className="text-white font-bold text-base" data-oid="obij05_">
                            LS
                        </span>
                    </div>
                    <span
                        className="text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400"
                        data-oid="1a-s:33"
                    >
                        Lynx Studio
                    </span>
                </div>
                <div className="flex items-center space-x-4" data-oid="xtb0f6q">
                    <button
                        onClick={() => (window.location.href = '/')}
                        className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2"
                        data-oid="6kfr-gu"
                    >
                        ← Back to Home
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-32 px-6" data-oid="dxdtvqg">
                <div className="max-w-7xl mx-auto" data-oid="wwtalu9">
                    {/* Header */}
                    <div className="text-center mb-12" data-oid="ksb1tcz">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6" data-oid="2zhujao">
                            Transform Your{' '}
                            <span
                                className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent"
                                data-oid="ipj7jj2"
                            >
                                Figma Designs
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="f8jzsov">
                            Upload your Figma files or paste design URLs to generate
                            production-ready code instantly
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8" data-oid="6.kw92:">
                        <div
                            className="bg-gray-800/50 rounded-full p-1 backdrop-blur-sm"
                            data-oid="-o8aaw0"
                        >
                            <button
                                onClick={() => setActiveTab('upload')}
                                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                                    activeTab === 'upload'
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                                data-oid="o5p47i6"
                            >
                                Upload & Generate
                            </button>
                            <button
                                onClick={() => setActiveTab('code')}
                                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                                    activeTab === 'code'
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                                data-oid="bqh3zki"
                            >
                                Generated Code
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="max-w-5xl mx-auto" data-oid="e8q2hgo">
                        {activeTab === 'upload' && (
                            <div
                                className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8"
                                data-oid="ms506l-"
                            >
                                <div
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                                    data-oid="1v:tpcb"
                                >
                                    {/* Figma URL Input */}
                                    <div className="space-y-6" data-oid="i3-bdi0">
                                        <h3
                                            className="text-2xl font-semibold mb-4"
                                            data-oid="n7c:uo3"
                                        >
                                            Figma URL
                                        </h3>
                                        <div className="space-y-4" data-oid="4o_g9h5">
                                            <input
                                                type="url"
                                                placeholder="Paste your Figma file URL here..."
                                                value={figmaUrl}
                                                onChange={(e) => setFigmaUrl(e.target.value)}
                                                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                                                data-oid="5a1lhzf"
                                            />

                                            <p className="text-sm text-gray-400" data-oid="-vtunck">
                                                Example:
                                                https://www.figma.com/file/abc123/your-design
                                            </p>
                                        </div>
                                    </div>

                                    {/* File Upload */}
                                    <div className="space-y-6" data-oid="n3:8h-9">
                                        <h3
                                            className="text-2xl font-semibold mb-4"
                                            data-oid="1yrhxz4"
                                        >
                                            Upload Screenshot
                                        </h3>
                                        <div
                                            className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-orange-500 transition-colors duration-300"
                                            data-oid="hfp-9g2"
                                        >
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileUpload}
                                                className="hidden"
                                                id="file-upload"
                                                data-oid="qqts5w0"
                                            />

                                            <label
                                                htmlFor="file-upload"
                                                className="cursor-pointer"
                                                data-oid="t4xcuxw"
                                            >
                                                <div className="space-y-4" data-oid="r1ro2hf">
                                                    <div className="text-4xl" data-oid="pw635jn">
                                                        📁
                                                    </div>
                                                    <div data-oid="bpfzd8h">
                                                        <p
                                                            className="text-lg font-medium"
                                                            data-oid="di4j3ef"
                                                        >
                                                            Drop your design here
                                                        </p>
                                                        <p
                                                            className="text-gray-400"
                                                            data-oid="05-u1rw"
                                                        >
                                                            or click to browse
                                                        </p>
                                                    </div>
                                                </div>
                                            </label>
                                            {uploadedFile && (
                                                <div
                                                    className="mt-4 p-3 bg-gray-800 rounded-lg"
                                                    data-oid="l73c1w1"
                                                >
                                                    <p
                                                        className="text-green-400"
                                                        data-oid=".peeq-3"
                                                    >
                                                        ✓ {uploadedFile.name}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Framework Selection */}
                                <div className="mt-8" data-oid="cb.qb68">
                                    <h3 className="text-2xl font-semibold mb-4" data-oid="riai3rj">
                                        Target Framework
                                    </h3>
                                    <div
                                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                                        data-oid="f40m_86"
                                    >
                                        {['React Native', 'React', 'Vue.js', 'Flutter'].map(
                                            (framework) => (
                                                <button
                                                    key={framework}
                                                    className="p-4 bg-gray-800/50 border border-gray-600 rounded-xl hover:border-orange-500 transition-colors duration-300 text-center"
                                                    data-oid="pn:l58-"
                                                >
                                                    <div
                                                        className="text-2xl mb-2"
                                                        data-oid="yfkl9v."
                                                    >
                                                        {framework === 'React Native' && '📱'}
                                                        {framework === 'React' && '⚛️'}
                                                        {framework === 'Vue.js' && '💚'}
                                                        {framework === 'Flutter' && '🐦'}
                                                    </div>
                                                    <p className="font-medium" data-oid=".chogv-">
                                                        {framework}
                                                    </p>
                                                </button>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Generate Button */}
                                <div className="mt-8 text-center" data-oid="8kpmwdc">
                                    <button
                                        onClick={handleGenerate}
                                        disabled={(!figmaUrl && !uploadedFile) || isGenerating}
                                        className="bg-gradient-to-r from-orange-500 to-red-500 px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                        data-oid="zhkwh_w"
                                    >
                                        {isGenerating ? (
                                            <span
                                                className="flex items-center space-x-2"
                                                data-oid="6lpronv"
                                            >
                                                <div
                                                    className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                    data-oid="vl_yzy0"
                                                ></div>
                                                <span data-oid="ibalrhr">Generating Code...</span>
                                            </span>
                                        ) : (
                                            'Generate Code'
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'code' && (
                            <div
                                className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8"
                                data-oid="_7jm2js"
                            >
                                <div
                                    className="flex justify-between items-center mb-6"
                                    data-oid="tlpzyd:"
                                >
                                    <h3 className="text-2xl font-semibold" data-oid="e4f1e7i">
                                        Generated Code
                                    </h3>
                                    <div className="flex space-x-2" data-oid="s1nhydq">
                                        <button
                                            className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                                            data-oid="z:sztgt"
                                        >
                                            Copy
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                                            data-oid="yro6e05"
                                        >
                                            Download
                                        </button>
                                    </div>
                                </div>

                                {generatedCode ? (
                                    <div
                                        className="bg-gray-950 rounded-xl p-6 overflow-x-auto"
                                        data-oid="zcyb701"
                                    >
                                        <pre className="text-sm" data-oid=".f04_d4">
                                            <code className="text-gray-300" data-oid="zasgcoj">
                                                {generatedCode}
                                            </code>
                                        </pre>
                                    </div>
                                ) : (
                                    <div
                                        className="text-center py-12 text-gray-400"
                                        data-oid="o.0tfh_"
                                    >
                                        <div className="text-4xl mb-4" data-oid="p8nzbxc">
                                            🔧
                                        </div>
                                        <p className="text-lg" data-oid="-pkkqln">
                                            No code generated yet
                                        </p>
                                        <p data-oid="h22yley">
                                            Upload a design and generate code to see results here
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
