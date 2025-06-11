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
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden"
            data-oid="qqec_:."
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center border-b border-gray-800/30 backdrop-blur-xl bg-gray-900/20 transition-all duration-300 hover:bg-gray-900/30"
                data-oid=":pq-2fj"
            >
                <div
                    className="flex items-center space-x-2 group cursor-pointer"
                    data-oid="lxor6gw"
                >
                    <div
                        className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        data-oid="c6kqctw"
                    >
                        <span className="text-white font-bold text-sm" data-oid="39moec-">
                            LS
                        </span>
                    </div>
                    <span
                        className="text-xl font-semibold transition-colors duration-300 group-hover:text-orange-400"
                        data-oid="lnl9-h:"
                    >
                        Lynx Studio
                    </span>
                </div>
                <div className="hidden md:flex items-center space-x-8" data-oid="hk2xf7u">
                    <a
                        href="#features"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                        data-oid="0eurktr"
                    >
                        Features
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="v7n9izf"
                        ></span>
                    </a>
                    <a
                        href="#pricing"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                        data-oid="kffyi64"
                    >
                        Pricing
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="b6jifh8"
                        ></span>
                    </a>
                    <a
                        href="#docs"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                        data-oid="ecq5b6f"
                    >
                        Docs
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="o12ma6r"
                        ></span>
                    </a>
                    <button
                        className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                        data-oid="3g-1eqm"
                    >
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative pt-20" data-oid="g03hoia">
                {/* Background Effects */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"
                    data-oid="-fq0723"
                ></div>
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
                    data-oid="u88nb3n"
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    data-oid="2dj::lg"
                ></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20" data-oid="kh900o7">
                    <div className="text-center mb-16" data-oid="ujb-9e3">
                        <div
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            data-oid="oe:jbag"
                        >
                            <h1
                                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                                data-oid="qc5gmt6"
                            >
                                Transform{' '}
                                <span
                                    className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent"
                                    data-oid="o-b6kx6"
                                >
                                    Figma Files
                                </span>
                                <br data-oid="jfe-4-8" />
                                into production-ready{' '}
                                <span className="text-gray-400" data-oid="-5srdsr">
                                    code
                                </span>
                            </h1>

                            <p
                                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                                data-oid="j:::jzh"
                            >
                                Lynx Studio accelerates your entire development lifecycle with AI
                                agents. Convert designs to React Native, React, and mobile apps, all
                                in one place.
                            </p>

                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                                data-oid="cbp:xe1"
                            >
                                <button
                                    className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                                    data-oid="ui9ytwl"
                                >
                                    Try Lynx Studio
                                </button>
                                <button
                                    className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-gray-500 active:scale-95"
                                    data-oid="7pnjz1m"
                                >
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div
                            className="flex flex-wrap justify-center gap-3 mb-16"
                            data-oid=":5j_g7p"
                        >
                            {techStack.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className={`${tech.color} px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    data-oid="7q6474a"
                                >
                                    <div
                                        className="w-2 h-2 bg-white rounded-full animate-pulse"
                                        data-oid="69pwz.l"
                                    ></div>
                                    <span data-oid="xe:-eil">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mock Browser Window */}
                    <div className="max-w-5xl mx-auto" data-oid="be:43th">
                        <div
                            className="bg-gray-900/80 backdrop-blur-sm rounded-t-xl border border-gray-700/50 p-4"
                            data-oid="j14dkt5"
                        >
                            <div className="flex items-center space-x-2 mb-4" data-oid="chv277w">
                                <div
                                    className="w-3 h-3 bg-red-500 rounded-full"
                                    data-oid="6u0zm0h"
                                ></div>
                                <div
                                    className="w-3 h-3 bg-yellow-500 rounded-full"
                                    data-oid="7947tas"
                                ></div>
                                <div
                                    className="w-3 h-3 bg-green-500 rounded-full"
                                    data-oid="bbzdt6b"
                                ></div>
                                <div
                                    className="ml-4 bg-gray-800 px-4 py-1 rounded text-sm text-gray-400"
                                    data-oid="348xp.y"
                                >
                                    studio.lynx.com
                                </div>
                            </div>

                            <div className="bg-black/50 rounded-lg p-6 min-h-96" data-oid="yhpvo3z">
                                <div
                                    className="flex items-center justify-between mb-6"
                                    data-oid="fgeoudp"
                                >
                                    <div className="flex items-center space-x-3" data-oid="baa.vht">
                                        <div
                                            className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded"
                                            data-oid="0a1-1cg"
                                        ></div>
                                        <span className="text-white font-medium" data-oid="gk1kvzc">
                                            My Figma Project
                                        </span>
                                    </div>
                                    <button
                                        className="bg-blue-600 px-4 py-2 rounded text-sm"
                                        data-oid="s5rkwvt"
                                    >
                                        Generate Code
                                    </button>
                                </div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    data-oid=".dd6ufp"
                                >
                                    <div className="space-y-3" data-oid="lqtq0--">
                                        <div
                                            className="h-4 bg-gray-700 rounded w-3/4"
                                            data-oid="kta6i:h"
                                        ></div>
                                        <div
                                            className="h-4 bg-gray-700 rounded w-1/2"
                                            data-oid="8-420-0"
                                        ></div>
                                        <div
                                            className="h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded"
                                            data-oid="zyvj4--"
                                        ></div>
                                    </div>
                                    <div className="space-y-2" data-oid="u-aar0q">
                                        <div
                                            className="text-green-400 text-sm font-mono"
                                            data-oid="flcd1o_"
                                        >
                                            // Generated React Native Code
                                        </div>
                                        <div
                                            className="bg-gray-900 p-4 rounded text-sm font-mono"
                                            data-oid="ij.b9j0"
                                        >
                                            <div className="text-blue-400" data-oid="1vtk21u">
                                                import React from 'react';
                                            </div>
                                            <div className="text-purple-400" data-oid="4j1j7it">
                                                const Component = () =&gt; {'{'}
                                            </div>
                                            <div className="text-gray-300 ml-4" data-oid="3u8xre1">
                                                return (
                                            </div>
                                            <div
                                                className="text-yellow-400 ml-8"
                                                data-oid="rro3oh."
                                            >
                                                &lt;View style={`{styles.container}`}&gt;
                                            </div>
                                            <div className="text-gray-500 ml-12" data-oid="g01ex2p">
                                                ...
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
            <section id="features" className="relative py-20 px-6" data-oid="kse8ydp">
                <div className="max-w-7xl mx-auto" data-oid="a.nicqd">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                        data-oid=":80o56b"
                    >
                        Powerful Features for{' '}
                        <span
                            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                            data-oid="bqi_guz"
                        >
                            Modern Development
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="01ml5k3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl border transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                                    activeFeature === index
                                        ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-orange-500/50 shadow-lg shadow-orange-500/10'
                                        : 'bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/60'
                                }`}
                                data-oid="623d3ut"
                            >
                                <div
                                    className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                                    data-oid=".g8.rf5"
                                >
                                    {feature.icon}
                                </div>
                                <h3
                                    className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors duration-300"
                                    data-oid="viusiux"
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                                    data-oid="wn259lv"
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section
                className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50"
                data-oid=":6:y:tk"
            >
                <div className="max-w-7xl mx-auto" data-oid="z35dcy7">
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        data-oid="ct2p4j_"
                    >
                        <div data-oid="vdwisss">
                            <div
                                className="text-4xl font-bold text-orange-500 mb-2"
                                data-oid="tdt8hdh"
                            >
                                10K+
                            </div>
                            <div className="text-gray-400" data-oid="th0vc-7">
                                Designs Converted
                            </div>
                        </div>
                        <div data-oid="o9-od1v">
                            <div
                                className="text-4xl font-bold text-blue-500 mb-2"
                                data-oid="3g1j0w_"
                            >
                                500+
                            </div>
                            <div className="text-gray-400" data-oid="80vj.z7">
                                Happy Developers
                            </div>
                        </div>
                        <div data-oid="fxfji8r">
                            <div
                                className="text-4xl font-bold text-green-500 mb-2"
                                data-oid="5yi.ki1"
                            >
                                95%
                            </div>
                            <div className="text-gray-400" data-oid="y6h1naa">
                                Code Accuracy
                            </div>
                        </div>
                        <div data-oid="hf9c7-v">
                            <div
                                className="text-4xl font-bold text-purple-500 mb-2"
                                data-oid="s51d7ey"
                            >
                                24/7
                            </div>
                            <div className="text-gray-400" data-oid="qgz1ah-">
                                AI Support
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6" data-oid="_to.d-4">
                <div className="max-w-4xl mx-auto text-center" data-oid="0soy1yr">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" data-oid="asekg23">
                        Ready to accelerate your{' '}
                        <span
                            className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                            data-oid="-bev2ve"
                        >
                            development workflow?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8" data-oid="1ublas5">
                        Join thousands of developers who are already building faster with Lynx
                        Studio.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="hd777is"
                    >
                        <button
                            className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                            data-oid="nqz8t01"
                        >
                            Start Free Trial
                        </button>
                        <button
                            className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-gray-500 active:scale-95"
                            data-oid="k1zos30"
                        >
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800/50 py-12 px-6" data-oid="ihpm.w:">
                <div className="max-w-7xl mx-auto" data-oid="5coow:1">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="a3bwawk">
                        <div data-oid="flp8lna">
                            <div className="flex items-center space-x-2 mb-4" data-oid="flxlt1g">
                                <div
                                    className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
                                    data-oid="0w1u0mz"
                                >
                                    <span
                                        className="text-white font-bold text-sm"
                                        data-oid="be:apm4"
                                    >
                                        LS
                                    </span>
                                </div>
                                <span className="text-xl font-semibold" data-oid="tu_28lo">
                                    Lynx Studio
                                </span>
                            </div>
                            <p className="text-gray-400" data-oid="dgy-m:l">
                                Transform your design workflow with AI-powered code generation.
                            </p>
                        </div>
                        <div data-oid="qfpxwz6">
                            <h4 className="font-semibold mb-4" data-oid="jmft1j3">
                                Product
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="bc3_00d">
                                <div data-oid="8vdoyr3">Features</div>
                                <div data-oid="vldnpi:">Pricing</div>
                                <div data-oid="pub6rbl">API</div>
                                <div data-oid="lztk55k">Integrations</div>
                            </div>
                        </div>
                        <div data-oid="wsg.kaa">
                            <h4 className="font-semibold mb-4" data-oid="2cl2ebe">
                                Resources
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="mihie9f">
                                <div data-oid=":a1vgea">Documentation</div>
                                <div data-oid="_b6.h-7">Tutorials</div>
                                <div data-oid="ax3o4pt">Blog</div>
                                <div data-oid="ca.g..v">Community</div>
                            </div>
                        </div>
                        <div data-oid="q8mg3:d">
                            <h4 className="font-semibold mb-4" data-oid="76u6io8">
                                Company
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="_3k:iv5">
                                <div data-oid="_3bvkhu">About</div>
                                <div data-oid="8u_2l3w">Careers</div>
                                <div data-oid="wxkcoex">Contact</div>
                                <div data-oid="-9j:.-f">Privacy</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400"
                        data-oid="n12s9qo"
                    >
                        <p data-oid="m5novvd">&copy; 2024 Lynx Studio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
