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
        { name: 'Flutter', icon: '🐦', color: 'bg-purple-500' },
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
            data-oid="-7a5oe-"
        >
            {/* Navigation */}
            <nav
                className="fixed top-4 left-4 right-4 z-50 px-8 py-6 flex justify-between items-center border border-gray-800/30 backdrop-blur-xl bg-gray-900/20 transition-all duration-300 hover:bg-gray-900/30 rounded-2xl shadow-lg"
                data-oid="clh4vi7"
            >
                <div
                    className="flex items-center space-x-3 group cursor-pointer"
                    onClick={() => (window.location.href = '/')}
                    data-oid="umcq7.a"
                >
                    <div
                        className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        data-oid="xeg-l6s"
                    >
                        <span className="text-white font-bold text-base" data-oid="zngnphn">
                            LS
                        </span>
                    </div>
                    <span
                        className="text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400"
                        data-oid="06cj2ma"
                    >
                        Lynx Studio
                    </span>
                </div>
                <div className="flex items-center space-x-4" data-oid="9kl08e1">
                    <button
                        onClick={() => (window.location.href = '/')}
                        className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-gray-800/50"
                        data-oid="x:rt86l"
                    >
                        ← Back to Home
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-32 px-6" data-oid="c:-:zkc">
                <div className="max-w-7xl mx-auto" data-oid="bc:xxnj">
                    {/* Header */}
                    <div className="text-center mb-12" data-oid="gzcq10:">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6" data-oid="s4xbg40">
                            Transform Your{' '}
                            <span
                                className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent"
                                data-oid="5y:d9e4"
                            >
                                Figma Designs
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="5hydwd:">
                            Upload your Figma files or paste design URLs to generate
                            production-ready code instantly
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8" data-oid="cdjm4zn">
                        <div
                            className="bg-gray-800/50 rounded-full p-1 backdrop-blur-sm border border-gray-700/50"
                            data-oid="pkzkk0y"
                        >
                            <button
                                onClick={() => setActiveTab('upload')}
                                className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                                    activeTab === 'upload'
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                                data-oid="lymp-:."
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
                                data-oid="7th_0qj"
                            >
                                Generated Code
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="max-w-6xl mx-auto" data-oid="m-:cl2u">
                        {activeTab === 'upload' && (
                            <div
                                className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 shadow-2xl"
                                data-oid="7e6fz0y"
                            >
                                <div
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                                    data-oid="8uol6ln"
                                >
                                    {/* Figma URL Input */}
                                    <div className="space-y-6" data-oid="6z.gn7u">
                                        <div
                                            className="flex items-center space-x-3 mb-4"
                                            data-oid="p1yk_yy"
                                        >
                                            <div
                                                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                                                data-oid="zw-6axh"
                                            >
                                                <span
                                                    className="text-white text-sm"
                                                    data-oid="fh8sfzl"
                                                >
                                                    🔗
                                                </span>
                                            </div>
                                            <h3
                                                className="text-2xl font-semibold"
                                                data-oid="-ojyi-1"
                                            >
                                                Figma URL
                                            </h3>
                                        </div>
                                        <div className="space-y-4" data-oid=":qp58tv">
                                            <input
                                                type="url"
                                                placeholder="Paste your Figma file URL here..."
                                                value={figmaUrl}
                                                onChange={(e) => setFigmaUrl(e.target.value)}
                                                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                                                data-oid="8_i066x"
                                            />

                                            <p className="text-sm text-gray-400" data-oid="53idew6">
                                                Example:
                                                https://www.figma.com/file/abc123/your-design
                                            </p>
                                        </div>
                                    </div>

                                    {/* File Upload */}
                                    <div className="space-y-6" data-oid="-90.d7c">
                                        <div
                                            className="flex items-center space-x-3 mb-4"
                                            data-oid="1zv__2f"
                                        >
                                            <div
                                                className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center"
                                                data-oid="0qgaug2"
                                            >
                                                <span
                                                    className="text-white text-sm"
                                                    data-oid="7420sf:"
                                                >
                                                    📁
                                                </span>
                                            </div>
                                            <h3
                                                className="text-2xl font-semibold"
                                                data-oid=".zqliig"
                                            >
                                                Upload Screenshot
                                            </h3>
                                        </div>
                                        <div
                                            className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300 hover:bg-gray-800/30"
                                            data-oid="-_zu3f0"
                                        >
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileUpload}
                                                className="hidden"
                                                id="file-upload"
                                                data-oid="mse77j0"
                                            />

                                            <label
                                                htmlFor="file-upload"
                                                className="cursor-pointer"
                                                data-oid="f5dg4pn"
                                            >
                                                <div className="space-y-4" data-oid="11ue_b4">
                                                    <div className="text-4xl" data-oid="n03v05k">
                                                        📸
                                                    </div>
                                                    <div data-oid="k7vaomh">
                                                        <p
                                                            className="text-lg font-medium"
                                                            data-oid="f6i-14h"
                                                        >
                                                            Drop your design here
                                                        </p>
                                                        <p
                                                            className="text-gray-400"
                                                            data-oid="tlzcaqz"
                                                        >
                                                            or click to browse
                                                        </p>
                                                        <p
                                                            className="text-xs text-gray-500 mt-2"
                                                            data-oid="uaq2ri6"
                                                        >
                                                            PNG, JPG, SVG up to 10MB
                                                        </p>
                                                    </div>
                                                </div>
                                            </label>
                                            {uploadedFile && (
                                                <div
                                                    className="mt-4 p-3 bg-gray-800 rounded-lg border border-green-500/30"
                                                    data-oid="_7_i.ft"
                                                >
                                                    <p
                                                        className="text-green-400 flex items-center justify-center space-x-2"
                                                        data-oid="uk:1o0v"
                                                    >
                                                        <span data-oid="vffwu39">✓</span>
                                                        <span data-oid="anxyx5j">
                                                            {uploadedFile.name}
                                                        </span>
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Framework Selection */}
                                <div className="mt-8" data-oid="m30of8f">
                                    <div
                                        className="flex items-center space-x-3 mb-6"
                                        data-oid="vw8v7:0"
                                    >
                                        <div
                                            className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
                                            data-oid="y4jmtdk"
                                        >
                                            <span className="text-white text-sm" data-oid="km:4rd9">
                                                ⚙️
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-semibold" data-oid="1hjga36">
                                            Target Framework
                                        </h3>
                                    </div>
                                    <div
                                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                                        data-oid="jks0lom"
                                    >
                                        {frameworks.map((framework) => (
                                            <button
                                                key={framework.name}
                                                onClick={() => setSelectedFramework(framework.name)}
                                                className={`p-6 border rounded-xl transition-all duration-300 text-center transform hover:scale-105 ${
                                                    selectedFramework === framework.name
                                                        ? 'border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20'
                                                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500 hover:bg-gray-700/50'
                                                }`}
                                                data-oid="5snbpt0"
                                            >
                                                <div className="text-3xl mb-3" data-oid="lel8uy3">
                                                    {framework.icon}
                                                </div>
                                                <p className="font-medium" data-oid="2x93t7p">
                                                    {framework.name}
                                                </p>
                                                {selectedFramework === framework.name && (
                                                    <div className="mt-2" data-oid="fq.yfm9">
                                                        <span
                                                            className="text-orange-400 text-sm"
                                                            data-oid="afs_aur"
                                                        >
                                                            ✓ Selected
                                                        </span>
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Generate Button */}
                                <div className="mt-8 text-center" data-oid="hi0mdgh">
                                    <button
                                        onClick={handleGenerate}
                                        disabled={(!figmaUrl && !uploadedFile) || isGenerating}
                                        className="bg-gradient-to-r from-orange-500 to-red-500 px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        data-oid="cn-.fik"
                                    >
                                        {isGenerating ? (
                                            <span
                                                className="flex items-center space-x-3"
                                                data-oid="f-vfb-8"
                                            >
                                                <div
                                                    className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                    data-oid="ld4d:sn"
                                                ></div>
                                                <span data-oid="h3nfduf">Generating Code...</span>
                                            </span>
                                        ) : (
                                            <span
                                                className="flex items-center space-x-2"
                                                data-oid="t9lchzj"
                                            >
                                                <span data-oid="iu0_3d7">🚀</span>
                                                <span data-oid="h13tznu">Generate Code</span>
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'code' && (
                            <div
                                className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 shadow-2xl"
                                data-oid="lwry2r8"
                            >
                                <div
                                    className="flex justify-between items-center mb-6"
                                    data-oid="ss2x69t"
                                >
                                    <div className="flex items-center space-x-3" data-oid="tck818d">
                                        <div
                                            className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center"
                                            data-oid="bv:xyjq"
                                        >
                                            <span className="text-white text-sm" data-oid="o0g6ikb">
                                                💻
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-semibold" data-oid="zlgjbnq">
                                            Generated Code
                                        </h3>
                                        {generatedCode && (
                                            <span
                                                className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
                                                data-oid="eieuwd2"
                                            >
                                                {selectedFramework}
                                            </span>
                                        )}
                                    </div>
                                    {generatedCode && (
                                        <div className="flex space-x-3" data-oid="u7pb0g:">
                                            <button
                                                onClick={() =>
                                                    navigator.clipboard.writeText(generatedCode)
                                                }
                                                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center space-x-2"
                                                data-oid="95l_w_a"
                                            >
                                                <span data-oid="s5j8vy5">📋</span>
                                                <span data-oid="d2m611a">Copy</span>
                                            </button>
                                            <button
                                                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2"
                                                data-oid="dipr.t3"
                                            >
                                                <span data-oid="zhxfrez">⬇️</span>
                                                <span data-oid=":3jkohx">Download</span>
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {generatedCode ? (
                                    <div
                                        className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden"
                                        data-oid="5bv-pn-"
                                    >
                                        <div
                                            className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800"
                                            data-oid="rn1anex"
                                        >
                                            <span
                                                className="text-sm text-gray-400"
                                                data-oid="zzyl3x6"
                                            >
                                                Generated {selectedFramework} Component
                                            </span>
                                            <div className="flex space-x-2" data-oid="un--zd7">
                                                <div
                                                    className="w-3 h-3 bg-red-500 rounded-full"
                                                    data-oid="nxf9jpa"
                                                ></div>
                                                <div
                                                    className="w-3 h-3 bg-yellow-500 rounded-full"
                                                    data-oid="uqwfgco"
                                                ></div>
                                                <div
                                                    className="w-3 h-3 bg-green-500 rounded-full"
                                                    data-oid="vrj8ier"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="p-6 overflow-x-auto" data-oid=":xv_y1d">
                                            <pre className="text-sm" data-oid="z4igiwk">
                                                <code className="text-gray-300" data-oid="5i2qlzv">
                                                    {generatedCode}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className="text-center py-16 text-gray-400"
                                        data-oid="w.6todw"
                                    >
                                        <div className="text-6xl mb-6" data-oid="t0e7rk6">
                                            🔧
                                        </div>
                                        <p className="text-xl mb-2" data-oid="n7_:x_9">
                                            No code generated yet
                                        </p>
                                        <p data-oid="aprbj2x">
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
