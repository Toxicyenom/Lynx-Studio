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
            data-oid="qiqsatr"
        >
            {/* Navigation */}
            <nav
                className="fixed top-4 left-4 right-4 z-50 px-8 py-6 flex justify-between items-center border border-gray-800/30 backdrop-blur-xl bg-gray-900/20 transition-all duration-300 hover:bg-gray-900/30 rounded-2xl shadow-lg"
                data-oid="gp4t.m-"
            >
                <div
                    className="flex items-center space-x-3 group cursor-pointer"
                    data-oid="u2_-hw_"
                >
                    <div
                        className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        data-oid="6b0rtm9"
                    >
                        <span className="text-white font-bold text-base" data-oid="2_ui8d3">
                            LS
                        </span>
                    </div>
                    <span
                        className="text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400"
                        data-oid="1nf4t1:"
                    >
                        Lynx Studio
                    </span>
                </div>
                <div className="hidden lg:flex items-center space-x-6" data-oid=":-mijoz">
                    <a
                        href="#features"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                        data-oid="8lw6qjr"
                    >
                        Features
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="x2q:qtu"
                        ></span>
                    </a>
                    <a
                        href="#pricing"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                        data-oid="d-uisd2"
                    >
                        Pricing
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="9_vkfqz"
                        ></span>
                    </a>
                    <a
                        href="#api"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                        data-oid="a4pwpop"
                    >
                        API
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="zjep_n7"
                        ></span>
                    </a>
                    <a
                        href="#docs"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                        data-oid="50fv::l"
                    >
                        Docs
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="n.-18.u"
                        ></span>
                    </a>
                    <a
                        href="#community"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                        data-oid="guhrtd1"
                    >
                        Community
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="u4_5etz"
                        ></span>
                    </a>
                    <a
                        href="#support"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                        data-oid="qfy_ogc"
                    >
                        Support
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="jqelq58"
                        ></span>
                    </a>
                    <button
                        onClick={() => (window.location.href = '/upload')}
                        className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                        data-oid="0l63:.o"
                    >
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative pt-32" data-oid="xxf1tbm">
                {/* Background Effects */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"
                    data-oid="9wnz41p"
                ></div>
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
                    data-oid="c2sehlm"
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    data-oid="b9mz7f9"
                ></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20" data-oid="p8-.i:6">
                    <div className="text-center mb-16" data-oid="1msglcv">
                        <div
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            data-oid="2bb2u53"
                        >
                            <h1
                                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                                data-oid="8kp8-i4"
                            >
                                Transform{' '}
                                <span
                                    className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent"
                                    data-oid="27u2bea"
                                >
                                    Figma Files
                                </span>
                                <br data-oid="5vrd9hf" />
                                into production-ready{' '}
                                <span className="text-gray-400" data-oid="0nclx5q">
                                    code
                                </span>
                            </h1>

                            <p
                                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                                data-oid="a_ine9o"
                            >
                                Lynx Studio accelerates your entire development lifecycle with AI
                                agents. Convert designs to React Native, React, and mobile apps, all
                                in one place.
                            </p>

                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                                data-oid="-oh0oy4"
                            >
                                <button
                                    onClick={() => (window.location.href = '/upload')}
                                    className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                                    data-oid="smqqw1-"
                                >
                                    Try Lynx Studio
                                </button>
                                <button
                                    className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-gray-500 active:scale-95"
                                    data-oid="_m.2539"
                                >
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div
                            className="flex flex-wrap justify-center gap-3 mb-16"
                            data-oid="n.loo99"
                        >
                            {techStack.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className={`${tech.color} px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    data-oid="by_0b0i"
                                >
                                    <div
                                        className="w-2 h-2 bg-white rounded-full animate-pulse"
                                        data-oid="7v7gaz-"
                                    ></div>
                                    <span data-oid="xr1uzhk">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mock Browser Window */}
                    <div className="max-w-5xl mx-auto" data-oid="6sv:dly">
                        <div
                            className="bg-gray-900/80 backdrop-blur-sm rounded-t-xl border border-gray-700/50 p-4"
                            data-oid="1ka69hk"
                        >
                            <div className="flex items-center space-x-2 mb-4" data-oid="2_2wlte">
                                <div
                                    className="w-3 h-3 bg-red-500 rounded-full"
                                    data-oid="dlop7b0"
                                ></div>
                                <div
                                    className="w-3 h-3 bg-yellow-500 rounded-full"
                                    data-oid="8kqz-x9"
                                ></div>
                                <div
                                    className="w-3 h-3 bg-green-500 rounded-full"
                                    data-oid="8on2-4n"
                                ></div>
                                <div
                                    className="ml-4 bg-gray-800 px-4 py-1 rounded text-sm text-gray-400"
                                    data-oid="95:6.ua"
                                >
                                    studio.lynx.com
                                </div>
                            </div>

                            <div className="bg-black/50 rounded-lg p-6 min-h-96" data-oid="n:q.ahi">
                                <div
                                    className="flex items-center justify-between mb-6"
                                    data-oid="i5tgme6"
                                >
                                    <div className="flex items-center space-x-3" data-oid="0nyj.6b">
                                        <div
                                            className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded"
                                            data-oid="i-u4c:c"
                                        ></div>
                                        <span className="text-white font-medium" data-oid="hjm04l_">
                                            My Figma Project
                                        </span>
                                    </div>
                                    <button
                                        className="bg-blue-600 px-4 py-2 rounded text-sm"
                                        data-oid="oses9_h"
                                    >
                                        Generate Code
                                    </button>
                                </div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    data-oid="7b8nie7"
                                >
                                    <div className="space-y-3" data-oid="k:9ajo0">
                                        <div
                                            className="h-4 bg-gray-700 rounded w-3/4"
                                            data-oid="c5aa6jk"
                                        ></div>
                                        <div
                                            className="h-4 bg-gray-700 rounded w-1/2"
                                            data-oid="w4dn_.u"
                                        ></div>
                                        <div
                                            className="h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded"
                                            data-oid="60y:y_a"
                                        ></div>
                                    </div>
                                    <div className="space-y-2" data-oid="kw37jnj">
                                        <div
                                            className="text-green-400 text-sm font-mono"
                                            data-oid="98nrf.j"
                                        >
                                            // Generated React Native Code
                                        </div>
                                        <div
                                            className="bg-gray-900 p-4 rounded text-sm font-mono"
                                            data-oid="b:-i:zt"
                                        >
                                            <div className="text-blue-400" data-oid="1i5t3qd">
                                                import React from 'react';
                                            </div>
                                            <div className="text-purple-400" data-oid="v_s9ggh">
                                                const Component = () =&gt; {'{'}
                                            </div>
                                            <div className="text-gray-300 ml-4" data-oid="3ze_ivn">
                                                return (
                                            </div>
                                            <div
                                                className="text-yellow-400 ml-8"
                                                data-oid="aau3opd"
                                            >
                                                &lt;View style={`{styles.container}`}&gt;
                                            </div>
                                            <div className="text-gray-500 ml-12" data-oid="khn:_-z">
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
            <section id="features" className="relative py-20 px-6" data-oid="em-s7o-">
                <div className="max-w-7xl mx-auto" data-oid="ys3b3l8">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                        data-oid="5gsqm83"
                    >
                        Powerful Features for{' '}
                        <span
                            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                            data-oid="u4a0gt0"
                        >
                            Modern Development
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="k0gtudl">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl border transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                                    activeFeature === index
                                        ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-orange-500/50 shadow-lg shadow-orange-500/10'
                                        : 'bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/60'
                                }`}
                                data-oid="bg-0f:l"
                            >
                                <div
                                    className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                                    data-oid="dffbz8r"
                                >
                                    {feature.icon}
                                </div>
                                <h3
                                    className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors duration-300"
                                    data-oid=".hltg9d"
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                                    data-oid=":gy9_0r"
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
                data-oid="grdd2i4"
            >
                <div className="max-w-7xl mx-auto" data-oid="rz_vtde">
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        data-oid="e068bjc"
                    >
                        <div data-oid="7hrv22y">
                            <div
                                className="text-4xl font-bold text-orange-500 mb-2"
                                data-oid="vmjq-cu"
                            >
                                10K+
                            </div>
                            <div className="text-gray-400" data-oid="v0ioa-8">
                                Designs Converted
                            </div>
                        </div>
                        <div data-oid=".jah2nb">
                            <div
                                className="text-4xl font-bold text-blue-500 mb-2"
                                data-oid="dxc27ys"
                            >
                                500+
                            </div>
                            <div className="text-gray-400" data-oid="cxp9nq3">
                                Happy Developers
                            </div>
                        </div>
                        <div data-oid="65-j..h">
                            <div
                                className="text-4xl font-bold text-green-500 mb-2"
                                data-oid="tt6lnjs"
                            >
                                95%
                            </div>
                            <div className="text-gray-400" data-oid="6ag-_1n">
                                Code Accuracy
                            </div>
                        </div>
                        <div data-oid="heapn5a">
                            <div
                                className="text-4xl font-bold text-purple-500 mb-2"
                                data-oid="v::_22q"
                            >
                                24/7
                            </div>
                            <div className="text-gray-400" data-oid="ew-bqm4">
                                AI Support
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6" data-oid="byq69cn">
                <div className="max-w-4xl mx-auto text-center" data-oid="q8.dsg0">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" data-oid="49sgae2">
                        Ready to accelerate your{' '}
                        <span
                            className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                            data-oid="kd-:b6-"
                        >
                            development workflow?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8" data-oid="40v-.qo">
                        Join thousands of developers who are already building faster with Lynx
                        Studio.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid=".ba9mid"
                    >
                        <button
                            className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                            data-oid="qp493rg"
                        >
                            Start Free Trial
                        </button>
                        <button
                            className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-gray-500 active:scale-95"
                            data-oid=".opx58."
                        >
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="relative border-t border-gray-800/50 py-12 px-6 overflow-hidden"
                style={{
                    backgroundImage: 'url(/fire.avif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                data-oid="19d87ui"
            >
                <div
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    data-oid="tleo8yz"
                ></div>
                <div className="relative z-10 max-w-7xl mx-auto" data-oid=":.5xz9.">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="ei1lreo">
                        <div data-oid="kc0h6-8">
                            <div className="flex items-center space-x-2 mb-4" data-oid="13c36t2">
                                <div
                                    className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
                                    data-oid="yw5d1-3"
                                >
                                    <span
                                        className="text-white font-bold text-sm"
                                        data-oid="j07-g3h"
                                    >
                                        LS
                                    </span>
                                </div>
                                <span className="text-xl font-semibold" data-oid="1ejl7pz">
                                    Lynx Studio
                                </span>
                            </div>
                            <p className="text-gray-400" data-oid="f9.azp1">
                                Transform your design workflow with AI-powered code generation.
                            </p>
                        </div>
                        <div data-oid="hmon.2-">
                            <h4 className="font-semibold mb-4" data-oid="igl_ia-">
                                Product
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="3htac4s">
                                <div data-oid="4pmz6p9">Features</div>
                                <div data-oid="oq6ayt6">Pricing</div>
                                <div data-oid="dkloy0k">API</div>
                                <div data-oid="nep6aea">Integrations</div>
                            </div>
                        </div>
                        <div data-oid="_ky4k_g">
                            <h4 className="font-semibold mb-4" data-oid="-r-wleh">
                                Resources
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid=".i6v969">
                                <div data-oid="3pu6yjk">Documentation</div>
                                <div data-oid="nt2j_ck">Tutorials</div>
                                <div data-oid=".3ggi:x">Blog</div>
                                <div data-oid="p5emi_e">Community</div>
                            </div>
                        </div>
                        <div data-oid="j9vw093">
                            <h4 className="font-semibold mb-4" data-oid=":ujyrso">
                                Company
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="11pm4-6">
                                <div data-oid="oxs7u8g">About</div>
                                <div data-oid="1:xmr4c">Careers</div>
                                <div data-oid=":94yb.-">Contact</div>
                                <div data-oid="au5hy-d">Privacy</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400"
                        data-oid="e1mnwj2"
                    >
                        <p data-oid="vwttd4n">&copy; 2024 Lynx Studio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
