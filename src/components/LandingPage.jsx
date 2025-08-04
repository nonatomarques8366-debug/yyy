import React, { useState, useEffect } from 'react';
import { Shield, Zap, Wifi, HardDrive, Users, MessageSquare, Smartphone, CheckCircle, ArrowRight, Star, Menu, X, Play, CreditCard, Building, DollarSign, Radio, Lock, Unlock, Cpu, Code, Rocket, ZapOff } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../mock';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(mockData.company.whatsappLink, '_blank');
  };

  const IconComponent = ({ iconName, className }) => {
    const icons = {
      Shield, Zap, Wifi, HardDrive, Users, CreditCard, Building, DollarSign, Radio, Smartphone
    };
    const Icon = icons[iconName];
    return Icon ? <Icon className={className} /> : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-x-hidden">
      {/* Cyber Grid Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* High-Tech Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Cpu className="h-7 w-7 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {mockData.company.name}
                </span>
                <div className="text-xs text-cyan-300 font-mono">MDM_REMOVAL.EXE</div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 border border-green-400/30"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Support
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-cyan-400"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20">
            <div className="px-4 py-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Cyber Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Status Badge */}
              <Badge className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 text-green-300 mb-8 font-mono">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                {mockData.hero.badge}
              </Badge>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {mockData.hero.headline}
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mb-6">
                {mockData.hero.subheadline}
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                {mockData.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-6 text-lg rounded-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border border-cyan-400/30"
                >
                  <Rocket className="w-6 h-6 mr-3" />
                  {mockData.hero.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-lg border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  View Process
                </Button>
              </div>
            </div>

            {/* Right Visual - Real Phone Unlock Photos */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto">
                {/* Locked Phone - Real Photo */}
                <div className="relative group">
                  <div className="bg-gradient-to-b from-red-600/20 to-red-800/20 p-4 rounded-2xl border border-red-500/30 backdrop-blur-sm overflow-hidden">
                    <div className="relative">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_mdmbreaker/artifacts/24lzrm14_IMG_20250803_134918_666.jpg"
                        alt="Locked Android Device with MDM"
                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                      />
                      <Lock className="w-6 h-6 text-red-500 absolute -top-2 -right-2 bg-red-900/80 rounded-full p-1 shadow-lg" />
                      <div className="text-center mt-2">
                        <p className="text-red-300 font-bold text-sm">BLOQUEADO</p>
                        <p className="text-red-500 text-xs mt-1">MDM Ativo</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-red-400 font-mono bg-gray-900/80 px-2 py-1 rounded">ANTES</div>
                </div>

                {/* Unlocked Phone - Real Photo */}
                <div className="relative group">
                  <div className="bg-gradient-to-b from-green-600/20 to-emerald-800/20 p-4 rounded-2xl border border-green-500/30 backdrop-blur-sm overflow-hidden">
                    <div className="relative">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_mdmbreaker/artifacts/jnal54e7_IMG_20250803_134921_876.jpg"
                        alt="Unlocked Android Device Home Screen"
                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                      />
                      <Unlock className="w-6 h-6 text-green-500 absolute -top-2 -right-2 bg-green-900/80 rounded-full p-1 shadow-lg" />
                      <div className="text-center mt-2">
                        <p className="text-green-300 font-bold text-sm">DESBLOQUEADO</p>
                        <p className="text-green-500 text-xs mt-1">Acesso Total</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-green-400 font-mono bg-gray-900/80 px-2 py-1 rounded">DEPOIS</div>
                </div>
              </div>

              {/* Connecting Arrow with Animation */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-gray-900/90 rounded-full p-2 border border-cyan-500/50">
                  <ArrowRight className="w-6 h-6 text-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported MDM Systems */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
              Supported MDM Systems
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              We specialize in removing enterprise-level mobile device management software
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.supportedMdmSystems.map((system, index) => (
              <Card key={index} className="bg-gray-800/50 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 backdrop-blur-sm group hover:bg-gray-700/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-orange-400/30 group-hover:to-red-400/30 transition-all">
                    <IconComponent iconName={system.icon} className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{system.name}</h3>
                  <p className="text-gray-400 text-sm">{system.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {mockData.process.title}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Professional remote unlock in 4 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.process.steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < mockData.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 z-0">
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                )}
                
                <Card className="relative z-10 bg-gray-800/50 border border-purple-500/20 hover:border-purple-400/40 backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-3 group-hover:scale-105 hover:bg-gray-700/50">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto border border-purple-400/30 group-hover:from-purple-400/30 group-hover:to-cyan-400/30 transition-all duration-300">
                      {step.number}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our Service?
            </h2>
            <p className="text-lg text-gray-400">Advanced technology meets professional expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.benefits.map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl flex items-center justify-center mx-auto border border-cyan-500/20 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 group-hover:border-cyan-400/40 transition-all duration-500 shadow-lg group-hover:shadow-cyan-500/25">
                    <IconComponent iconName={benefit.icon} className="w-12 h-12 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-gray-400">Real users, real results</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/50 border border-green-500/20 hover:border-green-400/40 backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                  
                  {/* MDM System Badge */}
                  <Badge className="mb-4 bg-red-500/20 text-red-300 border border-red-400/30 font-mono text-xs">
                    <ZapOff className="w-3 h-3 mr-1" />
                    {testimonial.mdmSystem} REMOVED
                  </Badge>
                  
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 mb-8 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.location}</p>
                        <p className="text-green-400 text-xs font-mono">{testimonial.device}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-8">
            Ready to 
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Break Free</span>?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
            Professional MDM removal service - Contact us now for instant quote
          </p>
          
          <Button 
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-12 py-6 text-xl rounded-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 border border-green-400/30"
          >
            <MessageSquare className="w-6 h-6 mr-3" />
            Start WhatsApp Chat
          </Button>

          <div className="mt-12 flex justify-center">
            <Badge className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-400/30 text-green-300 font-mono">
              <Shield className="w-5 h-5 text-green-400 mr-2" />
              100% Success Rate Guarantee
            </Badge>
          </div>
        </div>
      </section>

      {/* Tech Footer */}
      <footer className="bg-black text-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="h-7 w-7 text-white" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {mockData.company.name}
                  </span>
                  <div className="text-xs text-cyan-300 font-mono">ANDROID_UNLOCK_PRO</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8">
                Professional Android MDM removal specialists. Advanced remote unlocking technology 
                for PayJoy, Soundi, M-Kopa, and all enterprise mobile management systems.
              </p>
              <div className="flex items-center space-x-2 text-green-400">
                <MessageSquare className="w-5 h-5" />
                <span className="font-mono font-semibold">{mockData.company.whatsapp}</span>
              </div>
            </div>
            
            {/* Supported Brands */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-300">Supported Brands</h3>
              <div className="space-y-3">
                {mockData.supportedBrands.map((brand, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{brand}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-purple-300">Technical Specifications</h3>
              <div className="space-y-3">
                {mockData.technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400 text-sm leading-relaxed">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-center">
              <p className="text-gray-500 font-mono text-sm">
                © 2024 {mockData.company.name} | PROFESSIONAL_MDM_REMOVAL_SERVICE.EXE | All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;