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
            data-oid="kk.102."
        >
            {/* Navigation */}
            <nav
                className="fixed top-4 left-4 right-4 z-50 px-8 py-6 flex justify-between items-center border border-gray-800/30 backdrop-blur-xl bg-gray-900/20 transition-all duration-300 hover:bg-gray-900/30 rounded-2xl shadow-lg"
                data-oid="u2skawo"
            >
                <div
                    className="flex items-center space-x-3 group cursor-pointer"
                    data-oid="cjc13il"
                >
                    <div
                        className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        data-oid="xtt_3nk"
                    >
                        <span className="text-white font-bold text-base" data-oid="wu_haad">
                            LS
                        </span>
                    </div>
                    <span
                        className="text-2xl font-bold transition-colors duration-300 group-hover:text-orange-400"
                        data-oid="_ovih6m"
                    >
                        Lynx Studio
                    </span>
                </div>
                <div className="hidden lg:flex items-center space-x-6" data-oid="20ppgtv">
                    <a
                        href="#features"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                        data-oid="68-r3s0"
                    >
                        Features
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="ae2o98w"
                        ></span>
                    </a>
                    <a
                        href="#pricing"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                        data-oid="k_ffkiz"
                    >
                        Pricing
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="3o-ppiq"
                        ></span>
                    </a>
                    <a
                        href="#api"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                        data-oid="0zb11vt"
                    >
                        API
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="1-gqsag"
                        ></span>
                    </a>
                    <a
                        href="#docs"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                        data-oid="6g22_g5"
                    >
                        Docs
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="qmyecrv"
                        ></span>
                    </a>
                    <a
                        href="#community"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                        data-oid="9wuqkeu"
                    >
                        Community
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="4mgb.qf"
                        ></span>
                    </a>
                    <a
                        href="#support"
                        className="text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2"
                        data-oid="_.i5fo3"
                    >
                        Support
                        <span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
                            data-oid="0qqm697"
                        ></span>
                    </a>
                    <button
                        onClick={() => (window.location.href = '/upload')}
                        className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                        data-oid="5mfw4h8"
                    >
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative pt-32" data-oid="z_ph643">
                {/* Background Effects */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"
                    data-oid="fbdvbcd"
                ></div>
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
                    data-oid="37ya4dh"
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    data-oid="qubfv1o"
                ></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20" data-oid="91g0ak1">
                    <div className="text-center mb-16" data-oid="jqoa.ob">
                        <div
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            data-oid="6fwhyqp"
                        >
                            <h1
                                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                                data-oid="79y..n8"
                            >
                                Transform{' '}
                                <span
                                    className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent"
                                    data-oid="sys6ijt"
                                >
                                    Figma Files
                                </span>
                                <br data-oid="zprc:6p" />
                                into production-ready{' '}
                                <span className="text-gray-400" data-oid="trv.w4m">
                                    code
                                </span>
                            </h1>

                            <p
                                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                                data-oid="3.:2sw2"
                            >
                                Lynx Studio accelerates your entire development lifecycle with AI
                                agents. Convert designs to React Native, React, and mobile apps, all
                                in one place.
                            </p>

                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                                data-oid="g1t5zei"
                            >
                                <button
                                    onClick={() => (window.location.href = '/upload')}
                                    className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                                    data-oid="l4w35cv"
                                >
                                    Try Lynx Studio
                                </button>
                                <button
                                    className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-gray-500 active:scale-95"
                                    data-oid="s_qeji2"
                                >
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div
                            className="flex flex-wrap justify-center gap-3 mb-16"
                            data-oid="7hgybhr"
                        >
                            {techStack.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className={`${tech.color} px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    data-oid="d:_67im"
                                >
                                    <div
                                        className="w-2 h-2 bg-white rounded-full animate-pulse"
                                        data-oid=".hkko0e"
                                    ></div>
                                    <span data-oid="-3:t1.2">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mock Browser Window */}
                    <div className="max-w-5xl mx-auto" data-oid="vc-:mj5">
                        <div
                            className="bg-gray-900/80 backdrop-blur-sm rounded-t-xl border border-gray-700/50 p-4"
                            data-oid="cfv0fcr"
                        >
                            <div className="flex items-center space-x-2 mb-4" data-oid="-casbn8">
                                <div
                                    className="w-3 h-3 bg-red-500 rounded-full"
                                    data-oid="3f98:2a"
                                ></div>
                                <div
                                    className="w-3 h-3 bg-yellow-500 rounded-full"
                                    data-oid="cxk9lt-"
                                ></div>
                                <div
                                    className="w-3 h-3 bg-green-500 rounded-full"
                                    data-oid="eoehnz_"
                                ></div>
                                <div
                                    className="ml-4 bg-gray-800 px-4 py-1 rounded text-sm text-gray-400"
                                    data-oid="snugn5v"
                                >
                                    studio.lynx.com
                                </div>
                            </div>

                            <div className="bg-black/50 rounded-lg p-6 min-h-96" data-oid="leb3ukc">
                                <div
                                    className="flex items-center justify-between mb-6"
                                    data-oid="pz:12em"
                                >
                                    <div className="flex items-center space-x-3" data-oid="tuwm9wb">
                                        <div
                                            className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded"
                                            data-oid="czt75ok"
                                        ></div>
                                        <span className="text-white font-medium" data-oid="4pzb8kp">
                                            My Figma Project
                                        </span>
                                    </div>
                                    <button
                                        className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors duration-300"
                                        data-oid="2y4hs9-"
                                    >
                                        Generate Code
                                    </button>
                                </div>

                                <div
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                                    data-oid="tdkzr88"
                                >
                                    <div className="space-y-4" data-oid="72agu9o">
                                        <div
                                            className="flex items-center justify-between"
                                            data-oid="e7tc:d0"
                                        >
                                            <h4
                                                className="text-white font-medium"
                                                data-oid=".oe6lvs"
                                            >
                                                Design Preview
                                            </h4>
                                            <div className="flex space-x-2" data-oid="4zr-i6k">
                                                <button
                                                    className="w-6 h-6 bg-gray-700 rounded hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
                                                    data-oid="a.bdfsj"
                                                >
                                                    <span className="text-xs" data-oid="5xz6p5h">
                                                        📱
                                                    </span>
                                                </button>
                                                <button
                                                    className="w-6 h-6 bg-gray-700 rounded hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
                                                    data-oid="eghvjwu"
                                                >
                                                    <span className="text-xs" data-oid="tb1_3f.">
                                                        💻
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700"
                                            data-oid="gvno-5y"
                                        >
                                            <div className="space-y-3" data-oid="vlc.kwh">
                                                <div
                                                    className="h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded w-2/3 animate-pulse"
                                                    data-oid="u:.ty4j"
                                                ></div>
                                                <div
                                                    className="h-4 bg-gray-600 rounded w-1/2"
                                                    data-oid="9me.h.2"
                                                ></div>
                                                <div
                                                    className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 flex items-center justify-center"
                                                    data-oid="4douic:"
                                                >
                                                    <span
                                                        className="text-blue-400 text-sm"
                                                        data-oid="isf:s1x"
                                                    >
                                                        Component Preview
                                                    </span>
                                                </div>
                                                <div className="flex space-x-2" data-oid="lnlh8jd">
                                                    <div
                                                        className="h-8 bg-orange-500 rounded w-20 flex items-center justify-center"
                                                        data-oid="mu2666s"
                                                    >
                                                        <span
                                                            className="text-white text-xs font-medium"
                                                            data-oid="97fa1b_"
                                                        >
                                                            Button
                                                        </span>
                                                    </div>
                                                    <div
                                                        className="h-8 bg-gray-600 rounded w-16"
                                                        data-oid="mp_9ce7"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4" data-oid="ou1berb">
                                        <div
                                            className="flex items-center justify-between"
                                            data-oid="au:6trz"
                                        >
                                            <h4
                                                className="text-white font-medium"
                                                data-oid="p365l5y"
                                            >
                                                Generated Code
                                            </h4>
                                            <div className="flex space-x-2" data-oid="u9i4xv:">
                                                <button
                                                    className="px-3 py-1 bg-gray-700 rounded text-xs hover:bg-gray-600 transition-colors duration-300"
                                                    data-oid="kv_._f_"
                                                >
                                                    Copy
                                                </button>
                                                <button
                                                    className="px-3 py-1 bg-green-600 rounded text-xs hover:bg-green-700 transition-colors duration-300"
                                                    data-oid=":-w-lts"
                                                >
                                                    Export
                                                </button>
                                            </div>
                                        </div>

                                        <div
                                            className="bg-gray-950 rounded-lg border border-gray-800 overflow-hidden"
                                            data-oid="hi164rb"
                                        >
                                            <div
                                                className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800"
                                                data-oid="trac158"
                                            >
                                                <div
                                                    className="flex items-center space-x-2"
                                                    data-oid="watty3t"
                                                >
                                                    <div
                                                        className="flex space-x-1"
                                                        data-oid="x-g:sd5"
                                                    >
                                                        <div
                                                            className="w-3 h-3 bg-red-500 rounded-full"
                                                            data-oid="6vaj6vi"
                                                        ></div>
                                                        <div
                                                            className="w-3 h-3 bg-yellow-500 rounded-full"
                                                            data-oid=".ljxc1d"
                                                        ></div>
                                                        <div
                                                            className="w-3 h-3 bg-green-500 rounded-full"
                                                            data-oid="iyp.stp"
                                                        ></div>
                                                    </div>
                                                    <span
                                                        className="text-gray-400 text-xs ml-2"
                                                        data-oid="o.zr8-l"
                                                    >
                                                        Component.tsx
                                                    </span>
                                                </div>
                                                <div
                                                    className="flex items-center space-x-2"
                                                    data-oid="o358m0o"
                                                >
                                                    <span
                                                        className="text-xs text-gray-500"
                                                        data-oid="uavgv8c"
                                                    >
                                                        React Native
                                                    </span>
                                                    <div
                                                        className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                                        data-oid="qfk8ky."
                                                    ></div>
                                                </div>
                                            </div>

                                            <div
                                                className="p-4 font-mono text-sm overflow-x-auto"
                                                data-oid="uz8l3wk"
                                            >
                                                <div className="space-y-1" data-oid=".3_5oob">
                                                    <div className="flex" data-oid="395sjt6">
                                                        <span
                                                            className="text-gray-500 w-8 text-right mr-4"
                                                            data-oid="8k6vf7u"
                                                        >
                                                            1
                                                        </span>
                                                        <span
                                                            className="text-blue-400"
                                                            data-oid=":ord15t"
                                                        >
                                                            import
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="cm38x1u"
                                                        >
                                                            {' '}
                                                            React{' '}
                                                        </span>
                                                        <span
                                                            className="text-blue-400"
                                                            data-oid="drencq1"
                                                        >
                                                            from
                                                        </span>
                                                        <span
                                                            className="text-green-400"
                                                            data-oid="9e3:gjx"
                                                        >
                                                            {' '}
                                                            'react'
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid=":nr-6n0"
                                                        >
                                                            ;
                                                        </span>
                                                    </div>
                                                    <div className="flex" data-oid="tdry0in">
                                                        <span
                                                            className="text-gray-500 w-8 text-right mr-4"
                                                            data-oid="76_r3xa"
                                                        >
                                                            2
                                                        </span>
                                                        <span
                                                            className="text-blue-400"
                                                            data-oid="ffm737-"
                                                        >
                                                            import
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="o47m.9b"
                                                        >
                                                            {' '}
                                                            {'{'} View, Text {'}'}{' '}
                                                        </span>
                                                        <span
                                                            className="text-blue-400"
                                                            data-oid="ogmd_fj"
                                                        >
                                                            from
                                                        </span>
                                                        <span
                                                            className="text-green-400"
                                                            data-oid="z:wj979"
                                                        >
                                                            {' '}
                                                            'react-native'
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="qbgnczh"
                                                        >
                                                            ;
                                                        </span>
                                                    </div>
                                                    <div className="flex" data-oid="36a:ko7">
                                                        <span
                                                            className="text-gray-500 w-8 text-right mr-4"
                                                            data-oid="939oz2o"
                                                        >
                                                            3
                                                        </span>
                                                    </div>
                                                    <div className="flex" data-oid="9vttol6">
                                                        <span
                                                            className="text-gray-500 w-8 text-right mr-4"
                                                            data-oid="o7ekusz"
                                                        >
                                                            4
                                                        </span>
                                                        <span
                                                            className="text-blue-400"
                                                            data-oid="8zefgl."
                                                        >
                                                            const
                                                        </span>
                                                        <span
                                                            className="text-yellow-400"
                                                            data-oid="ubsrrvz"
                                                        >
                                                            {' '}
                                                            Component
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="-:v7.je"
                                                        >
                                                            {' '}
                                                            = () =&gt; {'{'}
                                                        </span>
                                                    </div>
                                                    <div className="flex" data-oid="9deetaz">
                                                        <span
                                                            className="text-gray-500 w-8 text-right mr-4"
                                                            data-oid="bsyedt7"
                                                        >
                                                            5
                                                        </span>
                                                        <span
                                                            className="text-white ml-4"
                                                            data-oid="a6q6yqf"
                                                        >
                                                            return (
                                                        </span>
                                                    </div>
                                                    <div className="flex" data-oid="t_ux6az">
                                                        <span
                                                            className="text-gray-500 w-8 text-right mr-4"
                                                            data-oid="r4x_lqy"
                                                        >
                                                            6
                                                        </span>
                                                        <span
                                                            className="text-white ml-8"
                                                            data-oid="jxu9skj"
                                                        >
                                                            &lt;
                                                        </span>
                                                        <span
                                                            className="text-red-400"
                                                            data-oid="8cr6i5o"
                                                        >
                                                            View
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="4h79nq_"
                                                        >
                                                            {' '}
                                                        </span>
                                                        <span
                                                            className="text-green-400"
                                                            data-oid="4isosws"
                                                        >
                                                            style
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="3u_tmz3"
                                                        >
                                                            =
                                                        </span>
                                                        <span
                                                            className="text-yellow-400"
                                                            data-oid="emy9oul"
                                                        >
                                                            {'{'}
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="mv18nde"
                                                        >
                                                            styles.container
                                                        </span>
                                                        <span
                                                            className="text-yellow-400"
                                                            data-oid="3ia6gr5"
                                                        >
                                                            {'}'}
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="c0jgodu"
                                                        >
                                                            &gt;
                                                        </span>
                                                    </div>
                                                    <div className="flex" data-oid="1v:2-j3">
                                                        <span
                                                            className="text-gray-500 w-8 text-right mr-4"
                                                            data-oid="-mw2a:l"
                                                        >
                                                            7
                                                        </span>
                                                        <span
                                                            className="text-white ml-12"
                                                            data-oid="-oxobj3"
                                                        >
                                                            &lt;
                                                        </span>
                                                        <span
                                                            className="text-red-400"
                                                            data-oid="5_sxrqk"
                                                        >
                                                            Text
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="d2bxr1n"
                                                        >
                                                            &gt;
                                                        </span>
                                                        <span
                                                            className="text-green-400"
                                                            data-oid="zdaey48"
                                                        >
                                                            Welcome to Lynx Studio
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="wwmi1cd"
                                                        >
                                                            &lt;/
                                                        </span>
                                                        <span
                                                            className="text-red-400"
                                                            data-oid="ivysiaq"
                                                        >
                                                            Text
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="lu6040x"
                                                        >
                                                            &gt;
                                                        </span>
                                                    </div>
                                                    <div className="flex" data-oid="voe._fi">
                                                        <span
                                                            className="text-gray-500 w-8 text-right mr-4"
                                                            data-oid="yux3l2k"
                                                        >
                                                            8
                                                        </span>
                                                        <span
                                                            className="text-white ml-8"
                                                            data-oid="o-ahjf7"
                                                        >
                                                            &lt;/
                                                        </span>
                                                        <span
                                                            className="text-red-400"
                                                            data-oid="baw2eip"
                                                        >
                                                            View
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="b6pjb_h"
                                                        >
                                                            &gt;
                                                        </span>
                                                    </div>
                                                    <div className="flex" data-oid="9fd.y25">
                                                        <span
                                                            className="text-gray-500 w-8 text-right mr-4"
                                                            data-oid="t_7xaud"
                                                        >
                                                            9
                                                        </span>
                                                        <span
                                                            className="text-white ml-4"
                                                            data-oid="4qcjg3a"
                                                        >
                                                            );
                                                        </span>
                                                    </div>
                                                    <div className="flex" data-oid="snurf24">
                                                        <span
                                                            className="text-gray-500 w-8 text-right mr-4"
                                                            data-oid="6_emaoy"
                                                        >
                                                            10
                                                        </span>
                                                        <span
                                                            className="text-white"
                                                            data-oid="v5np1ua"
                                                        >
                                                            {'}'}
                                                        </span>
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
            <section id="features" className="relative py-20 px-6" data-oid="9:bbo85">
                <div className="max-w-7xl mx-auto" data-oid="_ingqh2">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                        data-oid="c2sgan_"
                    >
                        Powerful Features for{' '}
                        <span
                            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                            data-oid="vxighag"
                        >
                            Modern Development
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="wvt2v7f">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl border transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                                    activeFeature === index
                                        ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-orange-500/50 shadow-lg shadow-orange-500/10'
                                        : 'bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/60'
                                }`}
                                data-oid="e4eh3p1"
                            >
                                <div
                                    className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                                    data-oid=":p5mxx0"
                                >
                                    {feature.icon}
                                </div>
                                <h3
                                    className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors duration-300"
                                    data-oid=".d25x2."
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                                    data-oid="77_261w"
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
                data-oid="ltwrbll"
            >
                <div className="max-w-7xl mx-auto" data-oid="o07_bhk">
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        data-oid=":iig3z:"
                    >
                        <div data-oid="r_--r_a">
                            <div
                                className="text-4xl font-bold text-orange-500 mb-2"
                                data-oid="1_-.llw"
                            >
                                10K+
                            </div>
                            <div className="text-gray-400" data-oid="x.orjn7">
                                Designs Converted
                            </div>
                        </div>
                        <div data-oid="vkm4tpz">
                            <div
                                className="text-4xl font-bold text-blue-500 mb-2"
                                data-oid="2nxlnxk"
                            >
                                500+
                            </div>
                            <div className="text-gray-400" data-oid="00k7.ra">
                                Happy Developers
                            </div>
                        </div>
                        <div data-oid="rg_5s6k">
                            <div
                                className="text-4xl font-bold text-green-500 mb-2"
                                data-oid="yus5nmh"
                            >
                                95%
                            </div>
                            <div className="text-gray-400" data-oid=":ht51sm">
                                Code Accuracy
                            </div>
                        </div>
                        <div data-oid="f0yx2dk">
                            <div
                                className="text-4xl font-bold text-purple-500 mb-2"
                                data-oid="88x8kda"
                            >
                                24/7
                            </div>
                            <div className="text-gray-400" data-oid="2dy2mfk">
                                AI Support
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6" data-oid="m0zhbl1">
                <div className="max-w-4xl mx-auto text-center" data-oid="97gy:7o">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" data-oid="a3hl0x_">
                        Ready to accelerate your{' '}
                        <span
                            className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                            data-oid="oiphrzw"
                        >
                            development workflow?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8" data-oid="zwbtnhh">
                        Join thousands of developers who are already building faster with Lynx
                        Studio.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="xq6dlmp"
                    >
                        <button
                            className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                            data-oid="39ynq8q"
                        >
                            Start Free Trial
                        </button>
                        <button
                            className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:border-gray-500 active:scale-95"
                            data-oid="7sd8-wz"
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
                    background:
                        'linear-gradient(135deg, #ff6b35 0%, #f7931e 25%, #ffd23f 50%, #ff6b35 75%, #8b5cf6 100%)',
                    backgroundSize: '400% 400%',
                    animation: 'gradientShift 15s ease infinite',
                }}
                data-oid="-q-0f.v"
            >
                <style jsx data-oid=":rclo24">{`
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
                <div
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                    data-oid="rbg.:a4"
                ></div>
                <div className="relative z-10 max-w-7xl mx-auto" data-oid="ij_j08g">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="apwkh17">
                        <div data-oid="eod57v:">
                            <div className="flex items-center space-x-2 mb-4" data-oid="t_mi:4f">
                                <div
                                    className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
                                    data-oid="7wp1ggl"
                                >
                                    <span
                                        className="text-white font-bold text-sm"
                                        data-oid="08tuo1r"
                                    >
                                        LS
                                    </span>
                                </div>
                                <span className="text-xl font-semibold" data-oid="w_ybb:a">
                                    Lynx Studio
                                </span>
                            </div>
                            <p className="text-gray-400" data-oid="mmjyj1q">
                                Transform your design workflow with AI-powered code generation.
                            </p>
                        </div>
                        <div data-oid="xb:2y28">
                            <h4 className="font-semibold mb-4" data-oid="8pi2bg_">
                                Product
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="tu75n72">
                                <div data-oid="pexmjfk">Features</div>
                                <div data-oid="e1zlb1-">Pricing</div>
                                <div data-oid="_ie-pde">API</div>
                                <div data-oid="bb6jtoi">Integrations</div>
                            </div>
                        </div>
                        <div data-oid=":92ajnp">
                            <h4 className="font-semibold mb-4" data-oid="xn3._3_">
                                Resources
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="kfu0t16">
                                <div data-oid="gar:dc2">Documentation</div>
                                <div data-oid="a19_y3d">Tutorials</div>
                                <div data-oid="oe._xl-">Blog</div>
                                <div data-oid="oi-6qpz">Community</div>
                            </div>
                        </div>
                        <div data-oid="qr.jjpx">
                            <h4 className="font-semibold mb-4" data-oid=".c49y-l">
                                Company
                            </h4>
                            <div className="space-y-2 text-gray-400" data-oid="9s7bbwx">
                                <div data-oid="kzh.atb">About</div>
                                <div data-oid="k6hl9or">Careers</div>
                                <div data-oid="_hxzalu">Contact</div>
                                <div data-oid="kzh__0c">Privacy</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400"
                        data-oid="mn7xc14"
                    >
                        <p data-oid="zse3xqz">&copy; 2024 Lynx Studio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
