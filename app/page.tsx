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
            data-oid="bcpd88j"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center border-b border-gray-800/30 backdrop-blur-xl bg-gray-900/20 transition-all duration-300 hover:bg-gray-900/30"
                data-oid="8rkdpes"
            >
                <div
                    className="flex items-center space-x-2 group cursor-pointer"
                    data-oid="9_rlocp"
                >
                    <div
                        className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        data-oid="z508924"
                    >
                        <span className="text-white font-bold text-sm" data-oid="bgex3z6">
                            LS
                        </span>
                    </div>
                    <span
                        className="text-xl font-semibold transition-colors duration-300 group-hover:text-orange-400"
                        data-oid="d0gdz0x"
                    >
                        Lynx Studio
                    </span>
                </div>
                <div className="hidden md:flex items-center space-x-8" data-oid="4b6stci">
                    <a
                        href="#features"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                        data-oid="w:8-ify"
                    >
                        Features
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="2:-sa13"
                        ></span>
                    </a>
                    <a
                        href="#pricing"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                        data-oid=".2_84bb"
                    >
                        Pricing
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="v2o6-9u"
                        ></span>
                    </a>
                    <a
                        href="#docs"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                        data-oid="slgft99"
                    >
                        Docs
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="x20ncxp"
                        ></span>
                    </a>
                    <button
                        className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                        data-oid="2ic0fhu"
                    >
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative pt-20" data-oid="e0sx3pd">
                {/* Background Effects */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"
                    data-oid="_x_-6w3"
                ></div>
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
                    data-oid="-f:6kaa"
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    data-oid="gt2rj0g"
                ></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20" data-oid="5zv8q8x">
                    <div className="text-center mb-16" data-oid="9o.258p">
                        <div
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            data-oid="_.bim4w"
                        >
                            <h1
                                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                                data-oid="e_e4h_i"
                            >
                                Transform{' '}
                                <span
                                    className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent"
                                    data-oid="0:uk7ru"
                                >
                                    Figma Files
                                </span>
                                <br data-oid="18x71ae" />
                                into production-ready{' '}
                                <span className="text-gray-400" data-oid="ukzgl95">
                                    code
                                </span>
                            </h1>

                            <p
                                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                                data-oid=".70d0xz"
                            >
                                Lynx Studio accelerates your entire development lifecycle with AI
                                agents. Convert designs to React Native, React, and mobile apps, all
                                in one place.
                            </p>

                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                                data-oid="9dv8aw4"
                            >
                                <button
                                    className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                                    data-oid="n2w7yn."
                                >
                                    Try Lynx Studio
                                </button>
                                <button
                                    className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-gray-500 active:scale-95"
                                    data-oid="ac:yg7_"
                                >
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div
                            className="flex flex-wrap justify-center gap-3 mb-16"
                            data-oid="dlig5z_"
                        >
                            {techStack.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className={`${tech.color} px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    data-oid="p.m2nqh"
                                >
                                    <div
                                        className="w-2 h-2 bg-white rounded-full animate-pulse"
                                        data-oid="uqu.fgt"
                                    ></div>
                                    <span data-oid="j1gdrtg">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mock Browser Window */}
                    <div className="max-w-5xl mx-auto" data-oid="iuxbg4d">
                        <div
                            className="bg-gray-900/80 backdrop-blur-sm rounded-t-xl border border-gray-700/50 p-4"
                            data-oid="k8r8cs6"
                        >
                            <div className="flex items-center space-x-2 mb-4" data-oid="45j8i3o">
                                <div
                                    className="w-3 h-3 bg-red-500 rounded-full"
                                    data-oid="ju1u:v-"
                                ></div>
                                <div
                                    className="w-3 h-3 bg-yellow-500 rounded-full"
                                    data-oid="6v5fpps"
                                ></div>
                                <div
                                    className="w-3 h-3 bg-green-500 rounded-full"
                                    data-oid="eox:-ih"
                                ></div>
                                <div
                                    className="ml-4 bg-gray-800 px-4 py-1 rounded text-sm text-gray-400"
                                    data-oid="lzizsn0"
                                >
                                    studio.lynx.com
                                </div>
                            </div>

                            <div className="bg-black/50 rounded-lg p-6 min-h-96" data-oid="tjus_6:">
                                <div
                                    className="flex items-center justify-between mb-6"
                                    data-oid="sw:-x3."
                                >
                                    <div className="flex items-center space-x-3" data-oid="vjc0ems">
                                        <div
                                            className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded"
                                            data-oid="x96d0w_"
                                        ></div>
                                        <span className="text-white font-medium" data-oid="cj9mc:s">
                                            My Figma Project
                                        </span>
                                    </div>
                                    <button
                                        className="bg-blue-600 px-4 py-2 rounded text-sm"
                                        data-oid="7lw0990"
                                    >
                                        Generate Code
                                    </button>
                                </div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    data-oid="rph-bvd"
                                >
                                    <div className="space-y-3" data-oid="f_3rf-6">
                                        <div
                                            className="h-4 bg-gray-700 rounded w-3/4"
                                            data-oid="g0kwd_8"
                                        ></div>
                                        <div
                                            className="h-4 bg-gray-700 rounded w-1/2"
                                            data-oid="n:9-3m2"
                                        ></div>
                                        <div
                                            className="h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded"
                                            data-oid=":s:o:9e"
                                        ></div>
                                    </div>
                                    <div className="space-y-2" data-oid="v3viw2b">
                                        <div
                                            className="text-green-400 text-sm font-mono"
                                            data-oid=":2ni_kx"
                                        >
                                            // Generated React Native Code
                                        </div>
                                        <div
                                            className="bg-gray-900 p-4 rounded text-sm font-mono"
                                            data-oid="6aeq4du"
                                        >
                                            <div className="text-blue-400" data-oid="yl7lboo">
                                                import React from 'react';
                                            </div>
                                            <div className="text-purple-400" data-oid="kz3jtim">
                                                const Component = () =&gt; {'{'}
                                            </div>
                                            <div className="text-gray-300 ml-4" data-oid="c1y2f7x">
                                                return (
                                            </div>
                                            <div
                                                className="text-yellow-400 ml-8"
                                                data-oid=".yj.zds"
                                            >
                                                &lt;View style={`{styles.container}`}&gt;
                                            </div>
                                            <div className="text-gray-500 ml-12" data-oid="a6u7p4-">
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
            <section id="features" className="relative py-20 px-6" data-oid="3h4nlb-">
                <div className="max-w-7xl mx-auto" data-oid="h8-k27k">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                        data-oid="fl52lbk"
                    >
                        Powerful Features for{' '}
                        <span
                            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                            data-oid="lq6f_c9"
                        >
                            Modern Development
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="jlt0ip_">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl border transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                                    activeFeature === index
                                        ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-orange-500/50 shadow-lg shadow-orange-500/10'
                                        : 'bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/60'
                                }`}
                                data-oid="bmxukaa"
                            >
                                <div
                                    className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                                    data-oid="qlic-17"
                                >
                                    {feature.icon}
                                </div>
                                <h3
                                    className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors duration-300"
                                    data-oid="6y_l732"
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                                    data-oid="3ujixdu"
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
                data-oid="st.7mur"
            >
                <div className="max-w-7xl mx-auto" data-oid="lb3od7:">
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        data-oid="781p1km"
                    >
                        <div data-oid="q7v5wdp">
                            <div
                                className="text-4xl font-bold text-orange-500 mb-2"
                                data-oid=".hd7fg_"
                            >
                                10K+
                            </div>
                            <div className="text-gray-400" data-oid="7enuorv">
                                Designs Converted
                            </div>
                        </div>
                        <div data-oid="u.pfsdq">
                            <div
                                className="text-4xl font-bold text-blue-500 mb-2"
                                data-oid="acccqyi"
                            >
                                500+
                            </div>
                            <div className="text-gray-400" data-oid="-v-8lds">
                                Happy Developers
                            </div>
                        </div>
                        <div data-oid="mn.2jqt">
                            <div
                                className="text-4xl font-bold text-green-500 mb-2"
                                data-oid="7do.o7:"
                            >
                                95%
                            </div>
                            <div className="text-gray-400" data-oid="8xd0vaq">
                                Code Accuracy
                            </div>
                        </div>
                        <div data-oid="wo5ufy1">
                            <div
                                className="text-4xl font-bold text-purple-500 mb-2"
                                data-oid="3hkzfv8"
                            >
                                24/7
                            </div>
                            <div className="text-gray-400" data-oid="g._sc9q">
                                AI Support
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6" data-oid="r9j:g4l">
                <div className="max-w-4xl mx-auto text-center" data-oid=":qekj4b">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" data-oid="w0aie52">
                        Ready to accelerate your{' '}
                        <span
                            className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                            data-oid="dec2r7d"
                        >
                            development workflow?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8" data-oid="9ofee:_">
                        Join thousands of developers who are already building faster with Lynx
                        Studio.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="sf97dty"
                    >
                        <button
                            className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                            data-oid="evbh7is"
                        >
                            Start Free Trial
                        </button>
                        <button
                            className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-gray-500 active:scale-95"
                            data-oid="0a06rgh"
                        >
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800/50 py-12 px-6" data-oid="cne4krp">
                <div className="max-w-7xl mx-auto" data-oid="eox:e4d">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="dn6fnfv">
                        <div data-oid="ex_2y8x">
                            <div className="flex items-center space-x-2 mb-4" data-oid="jok:dwr">
                                <div
                                    className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
                                    data-oid="1cn3.xk"
                                >
                                    <span
                                        className="text-white font-bold text-sm"
                                        data-oid="52qdtb9"
                                    >
                                        LS
                                    </span>
                                </div>
                                <span className="text-xl font-semibold" data-oid="2y-8-uq">
                                    Lynx Studio
                                </span>
                            </div>
                            <p className="text-gray-400" data-oid="3u_0:xo">
                                Transform your design workflow with AI-powered code generation.
                            </p>
                        </div>
                        <div data-oid="3:8yx8d">
                            <h4 className="font-semibold mb-4" data-oid="14j_4ea">
                                Product
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="e4mg8gq">
                                <div data-oid="0xb2qms">Features</div>
                                <div data-oid="fo7q0dk">Pricing</div>
                                <div data-oid="2t33ett">API</div>
                                <div data-oid="kb.wwun">Integrations</div>
                            </div>
                        </div>
                        <div data-oid="qbizf3b">
                            <h4 className="font-semibold mb-4" data-oid="9wzvi_q">
                                Resources
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="005btdz">
                                <div data-oid="ss0j1ix">Documentation</div>
                                <div data-oid="1t9y7d-">Tutorials</div>
                                <div data-oid="lfkrn_y">Blog</div>
                                <div data-oid=":f9c2e3">Community</div>
                            </div>
                        </div>
                        <div data-oid="q8er02u">
                            <h4 className="font-semibold mb-4" data-oid="9hy.9oz">
                                Company
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid=":29f-b7">
                                <div data-oid="v98ek3q">About</div>
                                <div data-oid="w2s1_tn">Careers</div>
                                <div data-oid="find7b7">Contact</div>
                                <div data-oid="gs0dkhf">Privacy</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400"
                        data-oid="::yft.h"
                    >
                        <p data-oid="0s904fd">&copy; 2024 Lynx Studio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
