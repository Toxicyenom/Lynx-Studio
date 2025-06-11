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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden" data-oid="q6rz2rm">
            {/* Navigation */}
            <nav className="relative z-50 px-6 py-4 flex justify-between items-center border-b border-gray-800/50 backdrop-blur-sm" data-oid="xkspztm">
                <div className="flex items-center space-x-2" data-oid="so8x--0">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center" data-oid="zx-9pr8">
                        <span className="text-white font-bold text-sm" data-oid="xlg66vg">F2C</span>
                    </div>
                    <span className="text-xl font-semibold" data-oid="zady9-v">Lynx Studio</span>
                </div>
                <div className="hidden md:flex items-center space-x-8" data-oid="_9.08u9">
                    <a href="#features" className="text-gray-300 hover:text-white transition-colors" data-oid="5yr_.ce">Features</a>
                    <a href="#pricing" className="text-gray-300 hover:text-white transition-colors" data-oid="0v5pf9j">Pricing</a>
                    <a href="#docs" className="text-gray-300 hover:text-white transition-colors" data-oid="uly7d4m">Docs</a>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all" data-oid="br.0mn3">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative" data-oid="2cgbh3w">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10" data-oid="8i256i."></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" data-oid="ef7h5cw"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" data-oid="qln_63i"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20" data-oid="_j.vtuo">
                    <div className="text-center mb-16" data-oid="8r.1vsv">
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-oid="1u-q9.6">
                            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight" data-oid="-a-qkhy">
                                Transform{' '}
                                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent" data-oid="h0rw_pd">
                                    Figma Files
                                </span>
                                <br data-oid="hiqy.g4" />
                                into production-ready{' '}
                                <span className="text-gray-400" data-oid="_cm2c9a">code</span>
                            </h1>
                            
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed" data-oid="3dmh4pm">
                                Lynx Studio accelerates your entire development lifecycle with AI agents. 
                                Convert designs to React Native, React, and mobile apps, all in one place.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" data-oid="xoz2ihb">
                                <button className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all transform hover:scale-105" data-oid="lbbzcuv">
                                    Try Lynx Studio
                                </button>
                                <button className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all" data-oid="up-3x8n">
                                    Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap justify-center gap-3 mb-16" data-oid="1.6r-3s">
                            {techStack.map((tech, index) =>
              <div key={tech.name} className={`${tech.color} px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity`} data-oid="q..8cw3">
                                    <div className="w-2 h-2 bg-white rounded-full" data-oid="eofpv_u"></div>
                                    <span data-oid="zz5wy8p">{tech.name}</span>
                                </div>
              )}
                        </div>
                    </div>

                    {/* Mock Browser Window */}
                    <div className="max-w-5xl mx-auto" data-oid=":l-p9h5">
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-t-xl border border-gray-700/50 p-4" data-oid="ld:bxgo">
                            <div className="flex items-center space-x-2 mb-4" data-oid="r45gdk5">
                                <div className="w-3 h-3 bg-red-500 rounded-full" data-oid="q35r9wu"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full" data-oid="2tko6qp"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full" data-oid="1jafd2k"></div>
                                <div className="ml-4 bg-gray-800 px-4 py-1 rounded text-sm text-gray-400" data-oid="066jvtz">
                                    studio.figmacode.com
                                </div>
                            </div>
                            
                            <div className="bg-black/50 rounded-lg p-6 min-h-96" data-oid="8-nlebb">
                                <div className="flex items-center justify-between mb-6" data-oid="ciu3.eu">
                                    <div className="flex items-center space-x-3" data-oid="bz6zrzy">
                                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded" data-oid="mpobfxb"></div>
                                        <span className="text-white font-medium" data-oid=":4x4c8o">My Figma Project</span>
                                    </div>
                                    <button className="bg-blue-600 px-4 py-2 rounded text-sm" data-oid="6382jh4">Generate Code</button>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="18n5iqh">
                                    <div className="space-y-3" data-oid="b4aw0w3">
                                        <div className="h-4 bg-gray-700 rounded w-3/4" data-oid="t0e.4ur"></div>
                                        <div className="h-4 bg-gray-700 rounded w-1/2" data-oid="r3-r8hn"></div>
                                        <div className="h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded" data-oid=":w-pf7k"></div>
                                    </div>
                                    <div className="space-y-2" data-oid="0rlte67">
                                        <div className="text-green-400 text-sm font-mono" data-oid="7lj18z8">// Generated React Native Code</div>
                                        <div className="bg-gray-900 p-4 rounded text-sm font-mono" data-oid="zoybvid">
                                            <div className="text-blue-400" data-oid="vj-782g">import React from 'react';</div>
                                            <div className="text-purple-400" data-oid="fogom-t">const Component = () => {`{`}</div>
                                            <div className="text-gray-300 ml-4" data-oid="akls48t">return (</div>
                                            <div className="text-yellow-400 ml-8" data-oid="jyf.pat">&lt;View style={`{styles.container}`}&gt;</div>
                                            <div className="text-gray-500 ml-12" data-oid="pz14o0z">...</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Features Section */}
            <section id="features" className="relative py-20 px-6" data-oid="615fx.a">
                <div className="max-w-7xl mx-auto" data-oid="isbmsm_">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-oid="0fgx56g">
                        Powerful Features for{' '}
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" data-oid="mkn-7c9">
                            Modern Development
                        </span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="92m4660">
                        {features.map((feature, index) =>
            <div key={index} className={`p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
            activeFeature === index ?
            'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-orange-500/50 shadow-lg shadow-orange-500/10' :
            'bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50'}`
            } data-oid="7bu1x42">
                                <div className="text-4xl mb-4" data-oid="s.7zt90">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3" data-oid="72h.jk3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed" data-oid="stijjuy">{feature.description}</p>
                            </div>
            )}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50" data-oid="u05d0dw">
                <div className="max-w-7xl mx-auto" data-oid="z4hax7w">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-oid="870d5_o">
                        <div data-oid="ey178-i">
                            <div className="text-4xl font-bold text-orange-500 mb-2" data-oid="0nv36iz">10K+</div>
                            <div className="text-gray-400" data-oid="1md6h_p">Designs Converted</div>
                        </div>
                        <div data-oid="hn_t2g5">
                            <div className="text-4xl font-bold text-blue-500 mb-2" data-oid="m7y7j6d">500+</div>
                            <div className="text-gray-400" data-oid="glfk3gm">Happy Developers</div>
                        </div>
                        <div data-oid="8c-o1d8">
                            <div className="text-4xl font-bold text-green-500 mb-2" data-oid="vs80b3f">95%</div>
                            <div className="text-gray-400" data-oid="jurt_4q">Code Accuracy</div>
                        </div>
                        <div data-oid="d1aord4">
                            <div className="text-4xl font-bold text-purple-500 mb-2" data-oid=".-ua-a6">24/7</div>
                            <div className="text-gray-400" data-oid="q3pr:9k">AI Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6" data-oid="64qm8pv">
                <div className="max-w-4xl mx-auto text-center" data-oid="_sx-.0-">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" data-oid="bbftyy8">
                        Ready to accelerate your{' '}
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent" data-oid="lcb94:p">
                            development workflow?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8" data-oid="6tj8oxl">
                        Join thousands of developers who are already building faster with FigmaCode Studio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-oid=".q84wbx">
                        <button className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all transform hover:scale-105" data-oid=":y16pwx">
                            Start Free Trial
                        </button>
                        <button className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all" data-oid="efsyxxk">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800/50 py-12 px-6" data-oid="yx5naxv">
                <div className="max-w-7xl mx-auto" data-oid="a1o:.u4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="u_ycfkl">
                        <div data-oid="k34vc21">
                            <div className="flex items-center space-x-2 mb-4" data-oid="xohq7y2">
                                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center" data-oid="kb0-tm-">
                                    <span className="text-white font-bold text-sm" data-oid="5wefeve">F2C</span>
                                </div>
                                <span className="text-xl font-semibold" data-oid="f6i.vdx">Lynx Studio</span>
                            </div>
                            <p className="text-gray-400" data-oid="8elo:.p">
                                Transform your design workflow with AI-powered code generation.
                            </p>
                        </div>
                        <div data-oid="9e4jd60">
                            <h4 className="font-semibold mb-4" data-oid="6nfrpk9">Product</h4>
                            <div className="space-y-2 text-gray-400" data-oid="7ikvli_">
                                <div data-oid="90fdqlg">Features</div>
                                <div data-oid="34djusq">Pricing</div>
                                <div data-oid="tgb0v_.">API</div>
                                <div data-oid="r-b-_ov">Integrations</div>
                            </div>
                        </div>
                        <div data-oid="q_kz5gf">
                            <h4 className="font-semibold mb-4" data-oid="p:hxzjx">Resources</h4>
                            <div className="space-y-2 text-gray-400" data-oid="j5kmxxc">
                                <div data-oid="sey9136">Documentation</div>
                                <div data-oid="2a0f5v.">Tutorials</div>
                                <div data-oid="-iviz:p">Blog</div>
                                <div data-oid="9b.l47p">Community</div>
                            </div>
                        </div>
                        <div data-oid="ojbdan3">
                            <h4 className="font-semibold mb-4" data-oid="sj.komz">Company</h4>
                            <div className="space-y-2 text-gray-400" data-oid="ev8386u">
                                <div data-oid="x6paqy-">About</div>
                                <div data-oid="98eb42l">Careers</div>
                                <div data-oid="inqbcmi">Contact</div>
                                <div data-oid="d71nekg">Privacy</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400" data-oid="4mft583">
                        <p data-oid=":vme6ml">&copy; 2024 FigmaCode Studio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>);

}