'use client';

import { useState } from 'react';

export default function UploadPage() {
    const [activeTab, setActiveTab] = useState('upload');
    const [figmaUrl, setFigmaUrl] = useState('');
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
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
        }, 3000);
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
            data-oid="7yd99mq"
        >
            {/* Navigation */}
            <nav
                className="fixed top-4 left-4 right-4 z-50 px-8 py-6 flex justify-between items-center border border-gray-800/30 backdrop-blur-xl bg-gray-900/20 transition-all duration-300 hover:bg-gray-900/30 rounded-2xl shadow-lg"
                data-oid="8dbhgep"
            >
                <div
                    className="flex items-center space-x-3 group cursor-pointer"
                    onClick={() => (window.location.href = '/')}
                    data-oid="gra83_i"
                >
                    <div
                        className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        data-oid="-.b2jsa"
                    >
                        <span className="text-white font-bold text-base" data-oid="5p8m0z8">
                            LS
                        </span>
                    </div>
                    <span
                        className="text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400"
                        data-oid="ptoj:_9"
                    >
                        Lynx Studio
                    </span>
                </div>
                <div className="hidden lg:flex items-center space-x-6" data-oid="onubtas">
                    <button
                        onClick={() => (window.location.href = '/')}
                        className="text-gray-300 hover:text-white transition-all duration-300 px-3 py-2"
                        data-oid=".pxjkb:"
                    >
                        ← Back to Home
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-32 px-6" data-oid="cwpsnta">
                <div className="max-w-7xl mx-auto" data-oid="kx.-eup">
                    {/* Header */}
                    <div className="text-center mb-12" data-oid="o17l3da">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6" data-oid="yqhl3ph">
                            Transform Your{' '}
                            <span
                                className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent"
                                data-oid=".igq8gp"
                            >
                                Figma Designs
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="3a:-brj">
                            Upload your Figma files or paste design URLs to generate
                            production-ready code instantly
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8" data-oid="m6txwvt">
                        <div
                            className="bg-gray-800/50 rounded-full p-1 backdrop-blur-sm"
                            data-oid="2gl5-_6"
                        >
                            <button
                                onClick={() => setActiveTab('upload')}
                                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                                    activeTab === 'upload'
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                                data-oid="u1::4l4"
                            >
                                Upload & Generate
                            </button>
                            <button
                                onClick={() => setActiveTab('code')}
                                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                                    activeTab === 'code'
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                                data-oid="7o40z3-"
                            >
                                Generated Code
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div
                        className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 min-h-[600px]"
                        data-oid="3w4rpd2"
                    >
                        {activeTab === 'upload' ? (
                            <div className="space-y-8" data-oid="dftqqaa">
                                {/* Figma URL Input */}
                                <div data-oid="6wm0ci_">
                                    <h3
                                        className="text-2xl font-semibold mb-4 flex items-center"
                                        data-oid="vx4ey6e"
                                    >
                                        🔗 Figma URL
                                    </h3>
                                    <div className="space-y-4" data-oid="lnr3cfx">
                                        <input
                                            type="url"
                                            placeholder="Paste your Figma file URL here..."
                                            value={figmaUrl}
                                            onChange={(e) => setFigmaUrl(e.target.value)}
                                            className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                                            data-oid="xa9kh43"
                                        />

                                        <p className="text-sm text-gray-400" data-oid="hojd1gu">
                                            Example: https://www.figma.com/file/your-design-id
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="flex items-center" data-oid="u1w5_mg">
                                    <div
                                        className="flex-1 h-px bg-gray-600/50"
                                        data-oid="772k-jb"
                                    ></div>
                                    <span className="px-4 text-gray-400" data-oid="mjm8dfq">
                                        OR
                                    </span>
                                    <div
                                        className="flex-1 h-px bg-gray-600/50"
                                        data-oid="cj9n8sb"
                                    ></div>
                                </div>

                                {/* File Upload */}
                                <div data-oid="epxcn1x">
                                    <h3
                                        className="text-2xl font-semibold mb-4 flex items-center"
                                        data-oid="m77kls9"
                                    >
                                        📁 Upload Screenshot
                                    </h3>
                                    <div
                                        className="border-2 border-dashed border-gray-600/50 rounded-xl p-12 text-center hover:border-orange-500/50 transition-colors"
                                        data-oid="bj-ebw9"
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileUpload}
                                            className="hidden"
                                            id="file-upload"
                                            data-oid="pr3uapo"
                                        />

                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer"
                                            data-oid="0trhl-j"
                                        >
                                            <div className="text-6xl mb-4" data-oid="3yt77p2">
                                                📸
                                            </div>
                                            <p className="text-xl mb-2" data-oid="px82zf9">
                                                {uploadedFile
                                                    ? uploadedFile.name
                                                    : 'Drop your design screenshot here'}
                                            </p>
                                            <p className="text-gray-400" data-oid="lbjo3_-">
                                                Supports PNG, JPG, JPEG files
                                            </p>
                                        </label>
                                    </div>
                                </div>

                                {/* Generate Button */}
                                <div className="text-center" data-oid="789zsyi">
                                    <button
                                        onClick={handleGenerate}
                                        disabled={(!figmaUrl && !uploadedFile) || isGenerating}
                                        className="bg-gradient-to-r from-orange-500 to-red-500 px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                        data-oid="t1mwdwh"
                                    >
                                        {isGenerating ? (
                                            <span className="flex items-center" data-oid="zxgrwa4">
                                                <div
                                                    className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"
                                                    data-oid="7jp-l2d"
                                                ></div>
                                                Generating Code...
                                            </span>
                                        ) : (
                                            '✨ Generate Code'
                                        )}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6" data-oid="4q4bbpn">
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="s1wya-d"
                                >
                                    <h3 className="text-2xl font-semibold" data-oid="1nwf9hj">
                                        Generated React Native Code
                                    </h3>
                                    <button
                                        onClick={() => navigator.clipboard.writeText(generatedCode)}
                                        className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                                        data-oid="ofj-x44"
                                    >
                                        📋 Copy Code
                                    </button>
                                </div>
                                <div
                                    className="bg-gray-900 rounded-xl p-6 overflow-auto max-h-96"
                                    data-oid="l:64_m4"
                                >
                                    <pre className="text-sm" data-oid="e88wyu.">
                                        <code className="text-green-400" data-oid="zpl9xzj">
                                            {generatedCode ||
                                                'No code generated yet. Please upload a design first.'}
                                        </code>
                                    </pre>
                                </div>
                                {generatedCode && (
                                    <div className="flex gap-4" data-oid="0u3--rk">
                                        <button
                                            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
                                            data-oid="b5m_o7m"
                                        >
                                            📱 Preview Mobile
                                        </button>
                                        <button
                                            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors"
                                            data-oid="-byjpfc"
                                        >
                                            💻 Preview Web
                                        </button>
                                        <button
                                            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors"
                                            data-oid="o.usaet"
                                        >
                                            📦 Export Project
                                        </button>
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
