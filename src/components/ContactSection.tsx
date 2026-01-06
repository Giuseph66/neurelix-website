'use client';

import { Mail, MessageCircle, Github, Linkedin, MapPin, Send, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
    return (
        <section id="contato" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-neutral-900 border-t border-green-500/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos conversar?</h2>
                    <p className="text-lg text-[#E6EDF3]/80 max-w-2xl mx-auto">
                        Estamos prontos para transformar sua ideia em realidade. Entre em contato e descubra como podemos ajudar.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-neutral-900/50 p-8 rounded-xl border border-green-500/20">
                        <h3 className="text-xl font-bold mb-6 text-[#00E5FF]">Envie uma mensagem</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1 text-[#E6EDF3]/80">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-black/50 border border-green-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-[#E6EDF3]"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#E6EDF3]/80">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-black/50 border border-green-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-[#E6EDF3]"
                                    placeholder="seu.email@exemplo.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#E6EDF3]/80">Como podemos ajudar?</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-black/50 border border-green-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-[#E6EDF3]"
                                    placeholder="Descreva seu projeto..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-blue-500 text-black rounded-md font-semibold hover:from-green-600 hover:to-blue-600 transition-colors flex items-center justify-center"
                            >
                                Enviar <Send className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-green-400">Canais de Atendimento</h3>
                            <div className="space-y-4">
                                <Link
                                    href={`https://wa.me/${process.env.WHATSAPP_NUMBER || '5566999999999'}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-neutral-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mr-4 group-hover:bg-green-500/20 transition-colors">
                                        <MessageCircle className="h-6 w-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">WhatsApp</h4>
                                        <p className="text-sm text-[#E6EDF3]/60">Resposta rápida</p>
                                    </div>
                                    <ArrowRight className="h-5 w-5 ml-auto text-[#E6EDF3]/40 group-hover:text-green-400 transition-colors" />
                                </Link>

                                <a
                                    href={`mailto:${process.env.EMAIL_PROFISSIONAL || 'contato@neurelix.com.br'}`}
                                    className="flex items-center p-4 bg-neutral-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors">
                                        <Mail className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">E-mail</h4>
                                        <p className="text-sm text-[#E6EDF3]/60">Para orçamentos detalhados</p>
                                    </div>
                                    <ArrowRight className="h-5 w-5 ml-auto text-[#E6EDF3]/40 group-hover:text-blue-400 transition-colors" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4 text-[#E6EDF3]">Redes Sociais</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/Giuseph66"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-neutral-900/50 rounded-full border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/10 transition-colors"
                                >
                                    <Github className="h-6 w-6 text-[#E6EDF3]" />
                                </a>
                                <a
                                    href={process.env.LINKEDIN_URL || 'https://linkedin.com/in/giuseph-giangareli'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-neutral-900/50 rounded-full border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/10 transition-colors"
                                >
                                    <Linkedin className="h-6 w-6 text-[#E6EDF3]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
