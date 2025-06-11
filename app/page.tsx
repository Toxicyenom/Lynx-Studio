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
            data-oid="wd-7ae_"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center border-b border-gray-800/30 backdrop-blur-xl bg-gray-900/20 transition-all duration-300 hover:bg-gray-900/30"
                data-oid="mgp1gde"
            >
                <div
                    className="flex items-center space-x-2 group cursor-pointer"
                    data-oid="x9-w308"
                >
                    <div
                        className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        data-oid="_bb.7w3"
                    >
                        <span className="text-white font-bold text-sm" data-oid="3h:dhhn">
                            LS
                        </span>
                    </div>
                    <span
                        className="text-xl font-semibold transition-colors duration-300 group-hover:text-orange-400"
                        data-oid="zeeo.lh"
                    >
                        Lynx Studio
                    </span>
                </div>
                <div className="hidden md:flex items-center space-x-8" data-oid="f34il-l">
                    <a
                        href="#features"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                        data-oid=":r4sz99"
                    >
                        Features
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="qcc6h.d"
                        ></span>
                    </a>
                    <a
                        href="#pricing"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                        data-oid="ma7e_rm"
                    >
                        Pricing
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="2toyzrb"
                        ></span>
                    </a>
                    <a
                        href="#docs"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                        data-oid="21gsqa:"
                    >
                        Docs
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="d18j5qn"
                        ></span>
                    </a>
                    <button
                        className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                        data-oid="smy78::"
                    >
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative pt-20" data-oid="v-gvni5">
                {/* Background Effects */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"
                    data-oid="3_zqakq"
                ></div>
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
                    data-oid="wbu323d"
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    data-oid="j_916qa"
                ></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20" data-oid="633ggkf">
                    <div className="text-center mb-16" data-oid="onhs3x7">
                        <div
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            data-oid="0t1jyom"
                        >
                            <h1
                                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                                data-oid="mhzjb-:"
                            >
                                Transform{' '}
                                <span
                                    className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent"
                                    data-oid="hoj17.n"
                                >
                                    Figma Files
                                </span>
                                <br data-oid="h2z19ar" />
                                into production-ready{' '}
                                <span className="text-gray-400" data-oid="rqv:2cx">
                                    code
                                </span>
                            </h1>

                            <p
                                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                                data-oid="hqvne4u"
                            >
                                Lynx Studio accelerates your entire development lifecycle with AI
                                agents. Convert designs to React Native, React, and mobile apps, all
                                in one place.
                            </p>

                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                                data-oid="gp220gy"
                            >
                                <button
                                    className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                                    data-oid="_g36bwg"
                                >
                                    Try Lynx Studio
                                </button>
                                <button
                                    className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-gray-500 active:scale-95"
                                    data-oid="u_50swg"
                                >
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div
                            className="flex flex-wrap justify-center gap-3 mb-16"
                            data-oid="nej89tz"
                        >
                            {techStack.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className={`${tech.color} px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    data-oid="qn64-wh"
                                >
                                    <div
                                        className="w-2 h-2 bg-white rounded-full animate-pulse"
                                        data-oid="ktdjmms"
                                    ></div>
                                    <span data-oid="svvskwy">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mock Browser Window */}
                    <div className="max-w-5xl mx-auto" data-oid="qf3k3-k">
                        <div
                            className="bg-gray-900/80 backdrop-blur-sm rounded-t-xl border border-gray-700/50 p-4"
                            data-oid="m_kze_9"
                        >
                            <div className="flex items-center space-x-2 mb-4" data-oid="4u4s:6g">
                                <div
                                    className="w-3 h-3 bg-red-500 rounded-full"
                                    data-oid="dwhjvt7"
                                ></div>
                                <div
                                    className="w-3 h-3 bg-yellow-500 rounded-full"
                                    data-oid="tst1fis"
                                ></div>
                                <div
                                    className="w-3 h-3 bg-green-500 rounded-full"
                                    data-oid="azaqi0t"
                                ></div>
                                <div
                                    className="ml-4 bg-gray-800 px-4 py-1 rounded text-sm text-gray-400"
                                    data-oid="vdophf_"
                                >
                                    studio.lynx.com
                                </div>
                            </div>

                            <div className="bg-black/50 rounded-lg p-6 min-h-96" data-oid="oddpodd">
                                <div
                                    className="flex items-center justify-between mb-6"
                                    data-oid="c_cj7x8"
                                >
                                    <div className="flex items-center space-x-3" data-oid="bcq44fw">
                                        <div
                                            className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded"
                                            data-oid="zx8kgl-"
                                        ></div>
                                        <span className="text-white font-medium" data-oid="2l77e68">
                                            My Figma Project
                                        </span>
                                    </div>
                                    <button
                                        className="bg-blue-600 px-4 py-2 rounded text-sm"
                                        data-oid="ow__78c"
                                    >
                                        Generate Code
                                    </button>
                                </div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    data-oid="ler-gwk"
                                >
                                    <div className="space-y-3" data-oid="_g:btpb">
                                        <div
                                            className="h-4 bg-gray-700 rounded w-3/4"
                                            data-oid="jtkr1wp"
                                        ></div>
                                        <div
                                            className="h-4 bg-gray-700 rounded w-1/2"
                                            data-oid="icawa4c"
                                        ></div>
                                        <div
                                            className="h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded"
                                            data-oid="3etosvj"
                                        ></div>
                                    </div>
                                    <div className="space-y-2" data-oid="8sjsvnz">
                                        <div
                                            className="text-green-400 text-sm font-mono"
                                            data-oid="vdz6rsx"
                                        >
                                            // Generated React Native Code
                                        </div>
                                        <div
                                            className="bg-gray-900 p-4 rounded text-sm font-mono"
                                            data-oid="1jyvqlg"
                                        >
                                            <div className="text-blue-400" data-oid="r42_mox">
                                                import React from 'react';
                                            </div>
                                            <div className="text-purple-400" data-oid="2bvx_zq">
                                                const Component = () =&gt; {'{'}
                                            </div>
                                            <div className="text-gray-300 ml-4" data-oid="wtz2q1_">
                                                return (
                                            </div>
                                            <div
                                                className="text-yellow-400 ml-8"
                                                data-oid="lram_.-"
                                            >
                                                &lt;View style={`{styles.container}`}&gt;
                                            </div>
                                            <div className="text-gray-500 ml-12" data-oid="1ly9kya">
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
            <section id="features" className="relative py-20 px-6" data-oid="f.od4b8">
                <div className="max-w-7xl mx-auto" data-oid="w8to41f">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                        data-oid="jpy2ag3"
                    >
                        Powerful Features for{' '}
                        <span
                            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                            data-oid="f7h1j72"
                        >
                            Modern Development
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="iuw.scj">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl border transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                                    activeFeature === index
                                        ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-orange-500/50 shadow-lg shadow-orange-500/10'
                                        : 'bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/60'
                                }`}
                                data-oid="b4ngw7:"
                            >
                                <div
                                    className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                                    data-oid="20fpm7h"
                                >
                                    {feature.icon}
                                </div>
                                <h3
                                    className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors duration-300"
                                    data-oid="6hv-y4r"
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                                    data-oid="q:67f7w"
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
                data-oid="0hzw:yp"
            >
                <div className="max-w-7xl mx-auto" data-oid="88y0.35">
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        data-oid="71hmgjx"
                    >
                        <div data-oid=".a3hr09">
                            <div
                                className="text-4xl font-bold text-orange-500 mb-2"
                                data-oid="7yvbark"
                            >
                                10K+
                            </div>
                            <div className="text-gray-400" data-oid="e0vk_la">
                                Designs Converted
                            </div>
                        </div>
                        <div data-oid="-5f:h3k">
                            <div
                                className="text-4xl font-bold text-blue-500 mb-2"
                                data-oid="m45d6r3"
                            >
                                500+
                            </div>
                            <div className="text-gray-400" data-oid="vkjpruk">
                                Happy Developers
                            </div>
                        </div>
                        <div data-oid="v4rmzgk">
                            <div
                                className="text-4xl font-bold text-green-500 mb-2"
                                data-oid="y1woqqt"
                            >
                                95%
                            </div>
                            <div className="text-gray-400" data-oid="_43lf-4">
                                Code Accuracy
                            </div>
                        </div>
                        <div data-oid="lfzxx7y">
                            <div
                                className="text-4xl font-bold text-purple-500 mb-2"
                                data-oid="3h3gu5o"
                            >
                                24/7
                            </div>
                            <div className="text-gray-400" data-oid="b7w8ggc">
                                AI Support
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6" data-oid="asp5l1r">
                <div className="max-w-4xl mx-auto text-center" data-oid="bzj5wwz">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" data-oid="mc.r24t">
                        Ready to accelerate your{' '}
                        <span
                            className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                            data-oid="nrl..fo"
                        >
                            development workflow?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8" data-oid="0y4gwh-">
                        Join thousands of developers who are already building faster with Lynx
                        Studio.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="ksqq0pk"
                    >
                        <button
                            className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                            data-oid="t3m7jbi"
                        >
                            Start Free Trial
                        </button>
                        <button
                            className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-gray-500 active:scale-95"
                            data-oid="y17:kaz"
                        >
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800/50 py-12 px-6" data-oid="orxo6w4">
                <div className="max-w-7xl mx-auto" data-oid="m67l-_h">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="k72o88k">
                        <div data-oid="f-na2p9">
                            <div className="flex items-center space-x-2 mb-4" data-oid="39e3sx8">
                                <div
                                    className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
                                    data-oid="wilfu_e"
                                >
                                    <span
                                        className="text-white font-bold text-sm"
                                        data-oid="gnn73--"
                                    >
                                        LS
                                    </span>
                                </div>
                                <span className="text-xl font-semibold" data-oid=":q8a2hv">
                                    Lynx Studio
                                </span>
                            </div>
                            <p className="text-gray-400" data-oid="52h0irm">
                                Transform your design workflow with AI-powered code generation.
                            </p>
                        </div>
                        <div data-oid="wujw:-3">
                            <h4 className="font-semibold mb-4" data-oid="yu9a1s_">
                                Product
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="r6ydm9.">
                                <div data-oid="wrjw9.t">Features</div>
                                <div data-oid="k:6-zb_">Pricing</div>
                                <div data-oid="8m:irng">API</div>
                                <div data-oid="ly9g013">Integrations</div>
                            </div>
                        </div>
                        <div data-oid="iwfa3pa">
                            <h4 className="font-semibold mb-4" data-oid="h6z7h53">
                                Resources
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="s1mp29s">
                                <div data-oid="cefwhow">Documentation</div>
                                <div data-oid=":0z9jle">Tutorials</div>
                                <div data-oid="d2yo7xq">Blog</div>
                                <div data-oid="5b5hs2x">Community</div>
                            </div>
                        </div>
                        <div data-oid="0pn318w">
                            <h4 className="font-semibold mb-4" data-oid="hbuk_:9">
                                Company
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="da25722">
                                <div data-oid="d2z9k4e">About</div>
                                <div data-oid="l9ab6b6">Careers</div>
                                <div data-oid="b3nvbc.">Contact</div>
                                <div data-oid="_3wg5rw">Privacy</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400"
                        data-oid=".gv9m5q"
                    >
                        <p data-oid="5mdlh45">&copy; 2024 Lynx Studio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
