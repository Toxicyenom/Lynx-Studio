'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            title: 'Instant Code Generation',
            description: 'Convert Figma designs to production-ready React Native code in seconds',
            icon: '⚡',
        },
        {
            title: 'Multi-Framework Support',
            description: 'Generate code for React Native, React, Vue, and more frameworks',
            icon: '🔧',
        },
        {
            title: 'AI-Powered Optimization',
            description: 'Smart component recognition and code optimization using advanced AI',
            icon: '🤖',
        },
    ];

    const techStack = [
        { name: 'React Native', color: 'bg-blue-500' },
        { name: 'Framer Motion', color: 'bg-purple-500' },
        { name: 'Shadcn/UI', color: 'bg-green-500' },
        { name: 'Tailwind CSS', color: 'bg-cyan-500' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
            {/* Navigation */}
            <nav className="fixed top-4 left-4 right-4 z-50 px-8 py-6 flex justify-between items-center border border-gray-800/30 backdrop-blur-xl bg-gray-900/20 transition-all duration-300 hover:bg-gray-900/30 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <span className="text-white font-bold text-base">LS</span>
                    </div>
                    <span className="text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400">
                        Lynx Studio
                    </span>
                </div>
                <div className="hidden lg:flex items-center space-x-6">
                    <a
                        href="#features"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                    >
                        Features
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#pricing"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                    >
                        Pricing
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#api"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                    >
                        API
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#docs"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                    >
                        Docs
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#community"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                    >
                        Community
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#support"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                    >
                        Support
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <button
                        onClick={() => (window.location.href = '/upload')}
                        className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                    >
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative pt-32">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <div
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                                Transform{' '}
                                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                                    Figma Files
                                </span>
                                <br />
                                into production-ready <span className="text-gray-400">code</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                                Lynx Studio accelerates your entire development lifecycle with AI
                                agents. Convert designs to React Native, React, and mobile apps, all
                                in one place.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                                <button
                                    onClick={() => (window.location.href = '/upload')}
                                    className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                                >
                                    Try Lynx Studio
                                </button>
                                <button className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-gray-500 active:scale-95">
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap justify-center gap-3 mb-16">
                            {techStack.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className={`${tech.color} px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mock Browser Window */}
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-t-xl border border-gray-700/50 p-4">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <div className="ml-4 bg-gray-800 px-4 py-1 rounded text-sm text-gray-400">
                                    studio.lynx.com
                                </div>
                            </div>

                            <div className="bg-black/50 rounded-lg p-6 min-h-96">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
                                        <span className="text-white font-medium">
                                            My Figma Project
                                        </span>
                                    </div>
                                    <button className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors duration-300">
                                        Generate Code
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-white font-medium">
                                                Design Preview
                                            </h4>
                                            <div className="flex space-x-2">
                                                <button className="w-6 h-6 bg-gray-700 rounded hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center">
                                                    <span className="text-xs">📱</span>
                                                </button>
                                                <button className="w-6 h-6 bg-gray-700 rounded hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center">
                                                    <span className="text-xs">💻</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700">
                                            <div className="space-y-3">
                                                <div className="h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded w-2/3 animate-pulse"></div>
                                                <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                                                <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 flex items-center justify-center">
                                                    <span className="text-blue-400 text-sm">
                                                        Component Preview
                                                    </span>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <div className="h-8 bg-orange-500 rounded w-20 flex items-center justify-center">
                                                        <span className="text-white text-xs font-medium">
                                                            Button
                                                        </span>
                                                    </div>
                                                    <div className="h-8 bg-gray-600 rounded w-16"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-white font-medium">
                                                Generated Code
                                            </h4>
                                            <div className="flex space-x-2">
                                                <button className="px-3 py-1 bg-gray-700 rounded text-xs hover:bg-gray-600 transition-colors duration-300">
                                                    Copy
                                                </button>
                                                <button className="px-3 py-1 bg-green-600 rounded text-xs hover:bg-green-700 transition-colors duration-300">
                                                    Export
                                                </button>
                                            </div>
                                        </div>

                                        <div className="bg-gray-950 rounded-lg border border-gray-800 overflow-hidden">
                                            <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800">
                                                <div className="flex items-center space-x-2">
                                                    <div className="flex space-x-1">
                                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                                    </div>
                                                    <span className="text-gray-400 text-xs ml-2">
                                                        Component.tsx
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-xs text-gray-500">
                                                        React Native
                                                    </span>
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                </div>
                                            </div>

                                            <div className="p-4 font-mono text-sm overflow-x-auto">
                                                <div className="space-y-1">
                                                    <div className="flex">
                                                        <span className="text-gray-500 w-8 text-right mr-4">
                                                            1
                                                        </span>
                                                        <span className="text-blue-400">
                                                            import
                                                        </span>
                                                        <span className="text-white"> React </span>
                                                        <span className="text-blue-400">from</span>
                                                        <span className="text-green-400">
                                                            {' '}
                                                            'react'
                                                        </span>
                                                        <span className="text-white">;</span>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-gray-500 w-8 text-right mr-4">
                                                            2
                                                        </span>
                                                        <span className="text-blue-400">
                                                            import
                                                        </span>
                                                        <span className="text-white">
                                                            {' '}
                                                            {'{'} View, Text {'}'}{' '}
                                                        </span>
                                                        <span className="text-blue-400">from</span>
                                                        <span className="text-green-400">
                                                            {' '}
                                                            'react-native'
                                                        </span>
                                                        <span className="text-white">;</span>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-gray-500 w-8 text-right mr-4">
                                                            3
                                                        </span>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-gray-500 w-8 text-right mr-4">
                                                            4
                                                        </span>
                                                        <span className="text-blue-400">const</span>
                                                        <span className="text-yellow-400">
                                                            {' '}
                                                            Component
                                                        </span>
                                                        <span className="text-white">
                                                            {' '}
                                                            = () =&gt; {'{'}
                                                        </span>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-gray-500 w-8 text-right mr-4">
                                                            5
                                                        </span>
                                                        <span className="text-white ml-4">
                                                            return (
                                                        </span>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-gray-500 w-8 text-right mr-4">
                                                            6
                                                        </span>
                                                        <span className="text-white ml-8">
                                                            &lt;
                                                        </span>
                                                        <span className="text-red-400">View</span>
                                                        <span className="text-white"> </span>
                                                        <span className="text-green-400">
                                                            style
                                                        </span>
                                                        <span className="text-white">=</span>
                                                        <span className="text-yellow-400">
                                                            {'{'}
                                                        </span>
                                                        <span className="text-white">
                                                            styles.container
                                                        </span>
                                                        <span className="text-yellow-400">
                                                            {'}'}
                                                        </span>
                                                        <span className="text-white">&gt;</span>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-gray-500 w-8 text-right mr-4">
                                                            7
                                                        </span>
                                                        <span className="text-white ml-12">
                                                            &lt;
                                                        </span>
                                                        <span className="text-red-400">Text</span>
                                                        <span className="text-white">&gt;</span>
                                                        <span className="text-green-400">
                                                            Welcome to Lynx Studio
                                                        </span>
                                                        <span className="text-white">&lt;/</span>
                                                        <span className="text-red-400">Text</span>
                                                        <span className="text-white">&gt;</span>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-gray-500 w-8 text-right mr-4">
                                                            8
                                                        </span>
                                                        <span className="text-white ml-8">
                                                            &lt;/
                                                        </span>
                                                        <span className="text-red-400">View</span>
                                                        <span className="text-white">&gt;</span>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-gray-500 w-8 text-right mr-4">
                                                            9
                                                        </span>
                                                        <span className="text-white ml-4">);</span>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-gray-500 w-8 text-right mr-4">
                                                            10
                                                        </span>
                                                        <span className="text-white">{'}'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Features Section */}
            <section id="features" className="relative py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        Powerful Features for{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Modern Development
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl border transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                                    activeFeature === index
                                        ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-orange-500/50 shadow-lg shadow-orange-500/10'
                                        : 'bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/60'
                                }`}
                            >
                                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">10K+</div>
                            <div className="text-gray-400">Designs Converted</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
                            <div className="text-gray-400">Happy Developers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-500 mb-2">95%</div>
                            <div className="text-gray-400">Code Accuracy</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
                            <div className="text-gray-400">AI Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to accelerate your{' '}
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                            development workflow?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join thousands of developers who are already building faster with Lynx
                        Studio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95">
                            Start Free Trial
                        </button>
                        <button className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-gray-500 active:scale-95">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="relative border-t border-gray-800/50 py-12 px-6 overflow-hidden"
                style={{
                    background:
                        'linear-gradient(135deg, #ff6b35 0%, #f7931e 25%, #ffd23f 50%, #ff6b35 75%, #8b5cf6 100%)',
                    backgroundSize: '400% 400%',
                    animation: 'gradientShift 15s ease infinite',
                }}
            >
                <style jsx>{`
                    @keyframes gradientShift {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                `}</style>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">LS</span>
                                </div>
                                <span className="text-xl font-semibold">Lynx Studio</span>
                            </div>
                            <p className="text-gray-400">
                                Transform your design workflow with AI-powered code generation.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <div className="space-y-2 text-gray-400">
                                <div>Features</div>
                                <div>Pricing</div>
                                <div>API</div>
                                <div>Integrations</div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Resources</h4>
                            <div className="space-y-2 text-gray-400">
                                <div>Documentation</div>
                                <div>Tutorials</div>
                                <div>Blog</div>
                                <div>Community</div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <div className="space-y-2 text-gray-400">
                                <div>About</div>
                                <div>Careers</div>
                                <div>Contact</div>
                                <div>Privacy</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Lynx Studio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
