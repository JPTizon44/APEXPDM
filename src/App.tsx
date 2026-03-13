/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  ArrowRight,
  Instagram, 
  Facebook, 
  Zap, 
  Target, 
  TrendingUp, 
  ShieldCheck,
  ChevronRight,
  BarChart3,
  Activity,
  Globe,
  Search,
  MousePointer2,
  Menu,
  X,
  Plus,
  Minus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';

// Expert Data
const EXPERT = {
  name: "APEX Performance",
  fullName: "APEX Performance Digital Marketing",
  profession: "Publicidade e Marketing",
  city: "São Paulo",
  whatsapp: "5511980734210",
  whatsappDisplay: "(11) 980734210",
  instagram: "https://www.instagram.com/apexpdm?igsh=aW53MWRwMW9kN2V5&utm_source=qr",
  facebook: "https://www.facebook.com/profile.php?id=61580754715547&mibextid=wwXIfr&rdid=LksacRd44Js4ydRr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17s4fL3j5S%2F%3Fmibextid%3DwwXIfr#",
  heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
  expertImage: "https://i.imgur.com/BHRurXUl.jpeg",
  decorations: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504868584819-f8e905263543?q=80&w=2076&auto=format&fit=crop"
  ],
  logo: "https://i.imgur.com/MdVOBpK.jpeg"
};

const WHATSAPP_LINK = `https://wa.me/${EXPERT.whatsapp}?text=Olá! Gostaria de agendar meu primeiro orçamento gratuito.`;

const CHART_DATA = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Fev', revenue: 7500 },
  { month: 'Mar', revenue: 12000 },
  { month: 'Abr', revenue: 21000 },
  { month: 'Mai', revenue: 38000 },
  { month: 'Jun', revenue: 65000 },
];

const SERVICES = [
  {
    icon: Globe,
    title: "Criação de Sites",
    desc: "Landing Pages e sites institucionais de alta performance, focados em converter visitantes em clientes reais.",
    tags: ["SEO", "UX/UI", "Mobile First"]
  },
  {
    icon: MousePointer2,
    title: "Tráfego Pago",
    desc: "Gestão estratégica de anúncios no Meta Ads e Google Ads para atrair o público certo no momento certo.",
    tags: ["Meta Ads", "Google Ads", "ROI"]
  },
  {
    icon: Search,
    title: "SEO Estratégico",
    desc: "Otimização para mecanismos de busca para que sua empresa seja encontrada organicamente por quem precisa.",
    tags: ["Keywords", "Backlinks", "Content"]
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    desc: "Configuração de tracking avançado para medir cada centavo investido e otimizar resultados continuamente.",
    tags: ["Analytics", "GTM", "Dashboards"]
  }
];

const FAQS = [
  {
    q: "Quanto tempo leva para ver resultados?",
    a: "Com tráfego pago, os resultados (leads e vendas) podem começar a aparecer nos primeiros dias. Para SEO e sites, o impacto é mais gradual, mas gera autoridade a longo prazo."
  },
  {
    q: "Vocês atendem empresas pequenas?",
    a: "Sim! Temos planos escaláveis que atendem desde profissionais autônomos que estão começando até grandes empresas que buscam escala agressiva."
  },
  {
    q: "Preciso ter um site para começar os anúncios?",
    a: "Não é obrigatório, mas altamente recomendado. Se você não tiver, nós desenvolvemos uma Landing Page de alta conversão para maximizar seu investimento."
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={EXPERT.logo} alt={EXPERT.name} className="w-10 h-10 object-cover rounded-full shadow-lg border border-white/10" referrerPolicy="no-referrer" />
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">{EXPERT.name}</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Serviços', 'Resultados', 'Diferenciais', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors">
              {item}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-zinc-950 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-400 transition-all active:scale-95">
            Falar com Especialista
          </a>
        </div>

        <button className="md:hidden text-zinc-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/5 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {['Serviços', 'Resultados', 'Diferenciais', 'FAQ'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-zinc-400">
                  {item}
                </a>
              ))}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-zinc-950 px-6 py-4 rounded-xl text-center font-bold">
                Falar com Especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface FAQItemProps {
  q: string;
  a: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left group">
        <span className="text-lg font-medium group-hover:text-emerald-400 transition-colors">{q}</span>
        {isOpen ? <Minus className="text-emerald-500" /> : <Plus className="text-zinc-500" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-zinc-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden selection:bg-emerald-500/30 relative">
      <Navbar />
      
      {/* 1. HERO SECTION - Refined Split Layout */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 uppercase tracking-widest"
            >
              Performance Digital de Elite
            </motion.span>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
              Escalamos seu <br/>
              <span className="text-gradient">Faturamento</span> <br/>
              com Dados.
            </h1>
            
            <p className="text-zinc-400 text-xl mb-10 leading-relaxed max-w-lg font-light">
              Não vendemos apenas anúncios. Construímos <span className="text-white font-medium">máquinas de vendas</span> previsíveis para empresas que buscam o próximo nível.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-emerald-500 text-zinc-950 font-bold py-5 px-10 rounded-2xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)]"
              >
                Começar Escala Agora
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <a href="#serviços" className="flex items-center justify-center gap-3 border border-white/10 hover:bg-white/5 py-5 px-10 rounded-2xl transition-all">
                Ver Serviços
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-zinc-950" alt="" />
                ))}
              </div>
              <p className="text-sm text-zinc-500 font-medium">
                <span className="text-zinc-100">+50 empresas</span> já escalaram conosco.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-[3rem] blur-3xl animate-pulse" />
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={EXPERT.heroImage} 
                alt="Digital Marketing Team" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              {/* Floating Stat Cards - Improved Positioning */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 glass p-5 rounded-2xl border-emerald-500/20 backdrop-blur-xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-emerald-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">ROI Médio</p>
                    <p className="text-xl font-display font-bold text-emerald-400">12.5x</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 glass p-5 rounded-2xl border-cyan-500/20 backdrop-blur-xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Activity className="text-cyan-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Conversão</p>
                    <p className="text-xl font-display font-bold text-cyan-400">+340%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="serviços" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              Soluções de <span className="text-gradient">Alta Performance</span>
            </motion.h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
              Combinamos tecnologia, design e psicologia de vendas para criar estratégias que dominam o mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-emerald-500/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-500">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-2 py-1 bg-white/5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE CHART SECTION */}
      <section id="resultados" className="py-32 px-6 bg-zinc-900/30 relative section-optimized">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Crescimento <br/>
              <span className="text-gradient">Exponencial</span> <br/>
              é o nosso padrão.
            </h2>
            <p className="text-zinc-400 text-xl mb-12 font-light leading-relaxed">
              Não acreditamos em sorte. Acreditamos em processos validados e otimização constante baseada em dados reais de mercado.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-display font-bold text-emerald-400 mb-2">8.4x</p>
                <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">ROI Médio</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-cyan-400 mb-2">+50%</p>
                <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Retenção</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[3rem] border-emerald-500/10"
          >
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DATA}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="month" stroke="#ffffff20" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#ffffff20" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `R$${v/1000}k`} />
                  <Tooltip contentStyle={{ backgroundColor: '#09090b', border: '1px solid #ffffff10', borderRadius: '12px' }} />
                  <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={4} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-zinc-500 text-xs mt-8 uppercase tracking-widest font-bold">Curva de faturamento média de novos clientes</p>
          </motion.div>
        </div>
      </section>

      {/* 4. DIFFERENTIALS SECTION */}
      <section id="diferenciais" className="py-32 px-6 section-optimized">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-display font-bold mb-6">Por que a <br/> APEX?</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-8">
                Diferente de agências tradicionais, somos focados em performance pura. Se não gera lucro, não faz sentido.
              </p>
              <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:underline">
                Agendar Auditoria Gratuita <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                { icon: ShieldCheck, title: "Transparência", desc: "Dashboards em tempo real para você acompanhar cada centavo investido." },
                { icon: Zap, title: "Agilidade", desc: "Testes rápidos e escala agressiva assim que o ROI é validado." },
                { icon: Target, title: "Foco em Vendas", desc: "Não buscamos curtidas, buscamos conversões que pagam as contas." },
                { icon: Activity, title: "Otimização", desc: "Ajustes diários nas campanhas para garantir o menor custo por lead." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section id="faq" className="py-32 px-6 bg-zinc-900/20 section-optimized">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-20">Dúvidas Frequentes</h2>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-10 leading-tight"
          >
            Pronto para <span className="text-gradient">Dominar</span> seu Mercado?
          </motion.h2>
          <p className="text-zinc-400 text-xl md:text-2xl mb-16 font-light max-w-2xl mx-auto">
            Não deixe sua concorrência levar seus clientes. Garanta sua estratégia personalizada hoje.
          </p>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-emerald-500 text-zinc-950 font-black text-2xl py-8 px-16 rounded-[2rem] shadow-[0_20px_50px_rgba(16,185,129,0.4)]"
          >
            <MessageCircle className="w-8 h-8" />
            <span>Falar com Especialista</span>
          </motion.a>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-20 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={EXPERT.logo} alt={EXPERT.name} className="w-12 h-12 object-contain rounded-xl" referrerPolicy="no-referrer" />
              <span className="font-display font-bold text-xl tracking-tight">{EXPERT.name}</span>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed font-light">
              Transformamos dados em faturamento. A agência de performance focada no crescimento real do seu negócio.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              {['Serviços', 'Resultados', 'Diferenciais', 'FAQ'].map(item => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-emerald-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-emerald-400 transition-all" title="WhatsApp">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href={EXPERT.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-emerald-400 transition-all" title="Instagram"><Instagram size={20} /></a>
              <a href={EXPERT.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-emerald-400 transition-all" title="Facebook"><Facebook size={20} /></a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} {EXPERT.fullName}. Todos os direitos reservados.</p>
          <p>Feito com foco em performance.</p>
        </div>
      </footer>
    </div>
  );
}
