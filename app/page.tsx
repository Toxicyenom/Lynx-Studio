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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden" data-oid="nd-bpxw">
            {/* Navigation */}
            <nav className="relative z-50 px-6 py-4 flex justify-between items-center border-b border-gray-800/50 backdrop-blur-sm" data-oid="095zj_s">
                <div className="flex items-center space-x-2" data-oid="zj-5g.c">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center" data-oid="t9ow_-g">
                        <span className="text-white font-bold text-sm" data-oid="e9.tggd">F2C</span>
                    </div>
                    <span className="text-xl font-semibold" data-oid="po2jk3w">FigmaCode Studio</span>
                </div>
                <div className="hidden md:flex items-center space-x-8" data-oid="3-uj5vi">
                    <a href="#features" className="text-gray-300 hover:text-white transition-colors" data-oid="1l11abg">Features</a>
                    <a href="#pricing" className="text-gray-300 hover:text-white transition-colors" data-oid="tavlg.6">Pricing</a>
                    <a href="#docs" className="text-gray-300 hover:text-white transition-colors" data-oid="gyfydr_">Docs</a>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all" data-oid="wnydjc9">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative" data-oid="bku7:d3">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10" data-oid="6:cf06d"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" data-oid="zp_zs4p"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" data-oid="xvn9vdg"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20" data-oid="qy:_.qe">
                    <div className="text-center mb-16" data-oid="f.l:.js">
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-oid="hl8kule">
                            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight" data-oid="28iz1cc">
                                Transform{' '}
                                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent" data-oid="_g:m5eh">
                                    Figma
                                </span>
                                <br data-oid="pmk-nla" />
                                into production-ready{' '}
                                <span className="text-gray-400" data-oid="zy4y825">code</span>
                            </h1>
                            
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed" data-oid="1:3uv:9">
                                FigmaCode Studio accelerates your entire development lifecycle with AI agents. 
                                Convert designs to React Native, React, and mobile apps, all in one place.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" data-oid="fnpm..0">
                                <button className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all transform hover:scale-105" data-oid="i5akgju">
                                    Try FigmaCode Studio
                                </button>
                                <button className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all" data-oid="z:hdixz">
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap justify-center gap-3 mb-16" data-oid="lam3k_q">
                            {techStack.map((tech, index) =>
              <div key={tech.name} className={`${tech.color} px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity`} data-oid="sb8je:k">
                                    <div className="w-2 h-2 bg-white rounded-full" data-oid="g6a58dz"></div>
                                    <span data-oid="ad77q.a">{tech.name}</span>
                                </div>
              )}
                        </div>
                    </div>

                    {/* Mock Browser Window */}
                    <div className="max-w-5xl mx-auto" data-oid="56d:0d.">
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-t-xl border border-gray-700/50 p-4" data-oid="cuhru1y">
                            <div className="flex items-center space-x-2 mb-4" data-oid="knc8f_2">
                                <div className="w-3 h-3 bg-red-500 rounded-full" data-oid="xo5.psk"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full" data-oid="4zvk71-"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full" data-oid="bd.fob_"></div>
                                <div className="ml-4 bg-gray-800 px-4 py-1 rounded text-sm text-gray-400" data-oid="8suuza.">
                                    studio.figmacode.com
                                </div>
                            </div>
                            
                            <div className="bg-black/50 rounded-lg p-6 min-h-96" data-oid="q84u8zz">
                                <div className="flex items-center justify-between mb-6" data-oid="hkgge5m">
                                    <div className="flex items-center space-x-3" data-oid="nux.x_0">
                                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded" data-oid="7sm1t-i"></div>
                                        <span className="text-white font-medium" data-oid="vm5gsa2">My Figma Project</span>
                                    </div>
                                    <button className="bg-blue-600 px-4 py-2 rounded text-sm" data-oid="g_u9p-5">Generate Code</button>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="di83p6f">
                                    <div className="space-y-3" data-oid="dodq:9_">
                                        <div className="h-4 bg-gray-700 rounded w-3/4" data-oid="dedk3_2"></div>
                                        <div className="h-4 bg-gray-700 rounded w-1/2" data-oid=":_s0-s."></div>
                                        <div className="h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded" data-oid="z9-fil9"></div>
                                    </div>
                                    <div className="space-y-2" data-oid="sge30:q">
                                        <div className="text-green-400 text-sm font-mono" data-oid="tyqxz.p">// Generated React Native Code</div>
                                        <div className="bg-gray-900 p-4 rounded text-sm font-mono" data-oid="7.s92w:">
                                            <div className="text-blue-400" data-oid="t9jo7fi">import React from 'react';</div>
                                            <div className="text-purple-400" data-oid="4vhfcq0">const Component = () => {`{`}</div>
                                            <div className="text-gray-300 ml-4" data-oid="3e8egtm">return (</div>
                                            <div className="text-yellow-400 ml-8" data-oid="ow3:ral">&lt;View style={`{styles.container}`}&gt;</div>
                                            <div className="text-gray-500 ml-12" data-oid="qdqc.xj">...</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Features Section */}
            <section id="features" className="relative py-20 px-6" data-oid="vpfpq_n">
                <div className="max-w-7xl mx-auto" data-oid="qmkwet7">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-oid="27qr-lp">
                        Powerful Features for{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" data-oid="o06_cwv">
                            Modern Development
                        </span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="lzd0mwm">
                        {features.map((feature, index) =>
            <div key={index} className={`p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
            activeFeature === index ?
            'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-orange-500/50 shadow-lg shadow-orange-500/10' :
            'bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50'}`
            } data-oid="vhxklpd">
                                <div className="text-4xl mb-4" data-oid="__g54i9">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3" data-oid="v8f4-h.">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed" data-oid="8ijfsom">{feature.description}</p>
                            </div>
            )}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50" data-oid="9tqa_st">
                <div className="max-w-7xl mx-auto" data-oid="v3xvend">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-oid="0s.bg_v">
                        <div data-oid="80-36o-">
                            <div className="text-4xl font-bold text-orange-500 mb-2" data-oid="o4p0vnj">10K+</div>
                            <div className="text-gray-400" data-oid="5b8gq:g">Designs Converted</div>
                        </div>
                        <div data-oid="b8yf5hp">
                            <div className="text-4xl font-bold text-blue-500 mb-2" data-oid="l:khqgl">500+</div>
                            <div className="text-gray-400" data-oid="1srw.1_">Happy Developers</div>
                        </div>
                        <div data-oid="cxdybhe">
                            <div className="text-4xl font-bold text-green-500 mb-2" data-oid="m7vkbsy">95%</div>
                            <div className="text-gray-400" data-oid="9opwpa7">Code Accuracy</div>
                        </div>
                        <div data-oid="-:g_ra6">
                            <div className="text-4xl font-bold text-purple-500 mb-2" data-oid="l029yoe">24/7</div>
                            <div className="text-gray-400" data-oid="2q0ltnn">AI Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6" data-oid="m0s-9bb">
                <div className="max-w-4xl mx-auto text-center" data-oid="3.gv8ae">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" data-oid="7x25rxk">
                        Ready to accelerate your{' '}
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent" data-oid="d7trann">
                            development workflow?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8" data-oid="9ce7z:s">
                        Join thousands of developers who are already building faster with FigmaCode Studio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-oid="-b1bs5j">
                        <button className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all transform hover:scale-105" data-oid="eb63sb1">
                            Start Free Trial
                        </button>
                        <button className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all" data-oid="jm9uill">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800/50 py-12 px-6" data-oid=".:3s68s">
                <div className="max-w-7xl mx-auto" data-oid="ifirmkh">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid=".64.1bh">
                        <div data-oid="jzcazxz">
                            <div className="flex items-center space-x-2 mb-4" data-oid="j-vosw4">
                                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center" data-oid="nobjok6">
                                    <span className="text-white font-bold text-sm" data-oid="493ndhh">F2C</span>
                                </div>
                                <span className="text-xl font-semibold" data-oid="tjyy1a5">FigmaCode Studio</span>
                            </div>
                            <p className="text-gray-400" data-oid="i9yw4yl">
                                Transform your design workflow with AI-powered code generation.
                            </p>
                        </div>
                        <div data-oid="kjf9j08">
                            <h4 className="font-semibold mb-4" data-oid="nwdpfrj">Product</h4>
                            <div className="space-y-2 text-gray-400" data-oid="0szuzyz">
                                <div data-oid="e01opnm">Features</div>
                                <div data-oid="_9ij:6e">Pricing</div>
                                <div data-oid="1dl9vgh">API</div>
                                <div data-oid="e2x7byl">Integrations</div>
                            </div>
                        </div>
                        <div data-oid="jcmdiry">
                            <h4 className="font-semibold mb-4" data-oid="00iy8i9">Resources</h4>
                            <div className="space-y-2 text-gray-400" data-oid="y_qfhqs">
                                <div data-oid="wvy5a4w">Documentation</div>
                                <div data-oid="pb8ygkt">Tutorials</div>
                                <div data-oid="94wyk.z">Blog</div>
                                <div data-oid=":j7btc.">Community</div>
                            </div>
                        </div>
                        <div data-oid="mv5wnta">
                            <h4 className="font-semibold mb-4" data-oid="3kfew4w">Company</h4>
                            <div className="space-y-2 text-gray-400" data-oid="ti4y5yi">
                                <div data-oid="rubct5p">About</div>
                                <div data-oid="4iju3jn">Careers</div>
                                <div data-oid="4-5qd_u">Contact</div>
                                <div data-oid="i58b6:y">Privacy</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400" data-oid="7un5hhm">
                        <p data-oid="enbmp6a">&copy; 2024 FigmaCode Studio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>);

}