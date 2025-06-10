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
    title: "Instant Code Generation",
    description: "Convert Figma designs to production-ready React Native code in seconds",
    icon: "⚡"
  },
  {
    title: "Multi-Framework Support",
    description: "Generate code for React Native, React, Vue, and more frameworks",
    icon: "🔧"
  },
  {
    title: "AI-Powered Optimization",
    description: "Smart component recognition and code optimization using advanced AI",
    icon: "🤖"
  }];


  const techStack = [
  { name: "React Native", color: "bg-blue-500" },
  { name: "Framer Motion", color: "bg-purple-500" },
  { name: "Shadcn/UI", color: "bg-green-500" },
  { name: "Tailwind CSS", color: "bg-cyan-500" }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden" data-oid="l63m7gw">
            {/* Navigation */}
            <nav className="relative z-50 px-6 py-4 flex justify-between items-center border-b border-gray-800/50 backdrop-blur-sm" data-oid="4lbh9:f">
                <div className="flex items-center space-x-2" data-oid="bkc56la">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center" data-oid="a-z-613">
                        <span className="text-white font-bold text-sm" data-oid="t0vcb88">F2C</span>
                    </div>
                    <span className="text-xl font-semibold" data-oid="qa65che">FigmaCode Studio</span>
                </div>
                <div className="hidden md:flex items-center space-x-8" data-oid="mmkgdit">
                    <a href="#features" className="text-gray-300 hover:text-white transition-colors" data-oid="nmmjg4m">Features</a>
                    <a href="#pricing" className="text-gray-300 hover:text-white transition-colors" data-oid="gva4v1-">Pricing</a>
                    <a href="#docs" className="text-gray-300 hover:text-white transition-colors" data-oid="8r5a:_i">Docs</a>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all" data-oid="i4fdcgz">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative" data-oid="b.u.li4">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10" data-oid="fqj68g3"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" data-oid="ph2w6u4"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" data-oid="mq2q::p"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20" data-oid="_ly1pqy">
                    <div className="text-center mb-16" data-oid="bjucmzq">
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-oid=":powmsw">
                            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight" data-oid="3qvga:5">
                                Transform{' '}
                                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent" data-oid=".6yh:hh">
                                    Figma
                                </span>
                                <br data-oid="alpdw8." />
                                into production-ready{' '}
                                <span className="text-gray-400" data-oid="4krb-kk">code</span>
                            </h1>
                            
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed" data-oid="zvxmg3o">
                                FigmaCode Studio accelerates your entire development lifecycle with AI agents. 
                                Convert designs to React Native, React, and mobile apps, all in one place.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" data-oid="t8p_3ew">
                                <button className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all transform hover:scale-105" data-oid="qkqz:.u">
                                    Try FigmaCode Studio
                                </button>
                                <button className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all" data-oid="i-4m_pe">
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap justify-center gap-3 mb-16" data-oid="rjrs.u5">
                            {techStack.map((tech, index) =>
              <div key={tech.name} className={`${tech.color} px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity`} data-oid="v2q-9i1">
                                    <div className="w-2 h-2 bg-white rounded-full" data-oid="7mxad7e"></div>
                                    <span data-oid=".jlcimy">{tech.name}</span>
                                </div>
              )}
                        </div>
                    </div>

                    {/* Mock Browser Window */}
                    <div className="max-w-5xl mx-auto" data-oid="soxl0u:">
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-t-xl border border-gray-700/50 p-4" data-oid="9dkcu6t">
                            <div className="flex items-center space-x-2 mb-4" data-oid="cw5h345">
                                <div className="w-3 h-3 bg-red-500 rounded-full" data-oid="s_btsai"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full" data-oid="x8gexgy"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full" data-oid="jbd9ump"></div>
                                <div className="ml-4 bg-gray-800 px-4 py-1 rounded text-sm text-gray-400" data-oid="j-xv0ib">
                                    studio.figmacode.com
                                </div>
                            </div>
                            
                            <div className="bg-black/50 rounded-lg p-6 min-h-96" data-oid="cx3xq:6">
                                <div className="flex items-center justify-between mb-6" data-oid="nqkq6q.">
                                    <div className="flex items-center space-x-3" data-oid="zz63abh">
                                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded" data-oid="gf70x.b"></div>
                                        <span className="text-white font-medium" data-oid="715s46h">My Figma Project</span>
                                    </div>
                                    <button className="bg-blue-600 px-4 py-2 rounded text-sm" data-oid="3rcjouj">Generate Code</button>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="rqgpp1x">
                                    <div className="space-y-3" data-oid="5lp:c50">
                                        <div className="h-4 bg-gray-700 rounded w-3/4" data-oid="7q5wmj_"></div>
                                        <div className="h-4 bg-gray-700 rounded w-1/2" data-oid="ylr.qrz"></div>
                                        <div className="h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded" data-oid="n6y6w1s"></div>
                                    </div>
                                    <div className="space-y-2" data-oid="uzx-psy">
                                        <div className="text-green-400 text-sm font-mono" data-oid="74c._vf">// Generated React Native Code</div>
                                        <div className="bg-gray-900 p-4 rounded text-sm font-mono" data-oid="1qcid55">
                                            <div className="text-blue-400" data-oid="8p_4scu">import React from 'react';</div>
                                            <div className="text-purple-400" data-oid="yw93gg8">const Component = () => {`{`}</div>
                                            <div className="text-gray-300 ml-4" data-oid="pmvppmr">return (</div>
                                            <div className="text-yellow-400 ml-8" data-oid="b8.x.16">&lt;View style={`{styles.container}`}&gt;</div>
                                            <div className="text-gray-500 ml-12" data-oid="ia8p5q_">...</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Features Section */}
            <section id="features" className="relative py-20 px-6" data-oid="1gitcyq">
                <div className="max-w-7xl mx-auto" data-oid="n34es_3">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-oid="_b9:90_">
                        Powerful Features for{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" data-oid="_734ngg">
                            Modern Development
                        </span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="ojt9erl">
                        {features.map((feature, index) =>
            <div key={index} className={`p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
            activeFeature === index ?
            'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-orange-500/50 shadow-lg shadow-orange-500/10' :
            'bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50'}`
            } data-oid="x_0ftk6">
                                <div className="text-4xl mb-4" data-oid="byso5y5">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3" data-oid="1pr.jih">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed" data-oid="swh_uak">{feature.description}</p>
                            </div>
            )}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50" data-oid="te-t89x">
                <div className="max-w-7xl mx-auto" data-oid="v:l1v.t">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-oid="33qfp5x">
                        <div data-oid="wunjeh7">
                            <div className="text-4xl font-bold text-orange-500 mb-2" data-oid="vlr_hdd">10K+</div>
                            <div className="text-gray-400" data-oid="g1cyxu6">Designs Converted</div>
                        </div>
                        <div data-oid="nr6fbns">
                            <div className="text-4xl font-bold text-blue-500 mb-2" data-oid="kcryt-7">500+</div>
                            <div className="text-gray-400" data-oid="oolf312">Happy Developers</div>
                        </div>
                        <div data-oid="pcgi97-">
                            <div className="text-4xl font-bold text-green-500 mb-2" data-oid="sr882y.">95%</div>
                            <div className="text-gray-400" data-oid=".frtydo">Code Accuracy</div>
                        </div>
                        <div data-oid="hi_k.df">
                            <div className="text-4xl font-bold text-purple-500 mb-2" data-oid="gofav_0">24/7</div>
                            <div className="text-gray-400" data-oid="na_bkob">AI Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6" data-oid="710xl95">
                <div className="max-w-4xl mx-auto text-center" data-oid="vlvax:0">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" data-oid="ez3i84y">
                        Ready to accelerate your{' '}
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent" data-oid="q9nev46">
                            development workflow?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8" data-oid="zwbdi0w">
                        Join thousands of developers who are already building faster with FigmaCode Studio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-oid="bme2i7s">
                        <button className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all transform hover:scale-105" data-oid="pf-0q_d">
                            Start Free Trial
                        </button>
                        <button className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all" data-oid="y4:26bh">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800/50 py-12 px-6" data-oid="k0-oisd">
                <div className="max-w-7xl mx-auto" data-oid="bd-r3s9">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="xcg4z9y">
                        <div data-oid=":9wlgu-">
                            <div className="flex items-center space-x-2 mb-4" data-oid="4n:iuzw">
                                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center" data-oid="u0319qw">
                                    <span className="text-white font-bold text-sm" data-oid="aalnzht">F2C</span>
                                </div>
                                <span className="text-xl font-semibold" data-oid="-ch8nce">FigmaCode Studio</span>
                            </div>
                            <p className="text-gray-400" data-oid="5d.902s">
                                Transform your design workflow with AI-powered code generation.
                            </p>
                        </div>
                        <div data-oid="9t0b_1d">
                            <h4 className="font-semibold mb-4" data-oid="aw.yx29">Product</h4>
                            <div className="space-y-2 text-gray-400" data-oid="y8fut3s">
                                <div data-oid="8kng2g9">Features</div>
                                <div data-oid="wj4wagj">Pricing</div>
                                <div data-oid="uvlubod">API</div>
                                <div data-oid="n_bn-ri">Integrations</div>
                            </div>
                        </div>
                        <div data-oid="k9jb1:q">
                            <h4 className="font-semibold mb-4" data-oid="m.mci7c">Resources</h4>
                            <div className="space-y-2 text-gray-400" data-oid="80.sohw">
                                <div data-oid="fgqyan5">Documentation</div>
                                <div data-oid="_wpomb.">Tutorials</div>
                                <div data-oid="4od84k.">Blog</div>
                                <div data-oid="d.o6098">Community</div>
                            </div>
                        </div>
                        <div data-oid="iho.d0i">
                            <h4 className="font-semibold mb-4" data-oid="d6uytz5">Company</h4>
                            <div className="space-y-2 text-gray-400" data-oid="ykp23c1">
                                <div data-oid="gxp69tj">About</div>
                                <div data-oid="o2wybt.">Careers</div>
                                <div data-oid="tk_g_-3">Contact</div>
                                <div data-oid="rnjheli">Privacy</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400" data-oid="tnf0jss">
                        <p data-oid="a4z2bx9">&copy; 2024 FigmaCode Studio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>);

}