'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Cloud,
  CreditCard,
  FileText,
  LayoutDashboard,
  LifeBuoy,
  MessageCircle,
  Monitor,
  Search,
  Smartphone,
  Users,
  X,
} from 'lucide-react';
import NeurelixLogo from '@/components/NeurelixLogo';
import BrandBackground from '@/components/BrandBackground';
import styles from './page.module.css';

type Category = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  forWho: string;
  deliverables: string[];
  timeline: string;
  options: {
    basic: string;
    complete: string;
  };
};

type Props = {
  whatsappNumber: string;
};

const categories: Category[] = [
  {
    id: 'pedidos-contatos',
    title: 'Receber pedidos e contatos',
    summary: 'Seu cliente chama e o pedido já chega organizado.',
    bullets: ['Botão de pedido rápido', 'Respostas automáticas', 'Fila organizada'],
    forWho: 'Lojas, lanchonetes e prestadores que atendem no WhatsApp.',
    deliverables: [
      'Página simples de pedido',
      'Botões de ação rápida',
      'Registro organizado de contatos',
      'Avisos de novo pedido',
      'Treinamento curto para uso',
    ],
    timeline: '2–4 semanas',
    options: {
      basic: 'Fluxo essencial de pedidos e contatos.',
      complete: 'Inclui painel simples e automações extras.',
    },
  },
  {
    id: 'agenda-confirmacao',
    title: 'Agendar e confirmar horários',
    summary: 'Agenda automática com confirmação e lembrete para reduzir faltas.',
    bullets: ['Horários disponíveis', 'Lembrete por WhatsApp', 'Confirmação rápida'],
    forWho: 'Clínicas, salões e serviços que trabalham com horário marcado.',
    deliverables: [
      'Calendário de horários',
      'Confirmação automática',
      'Lembretes antes do horário',
      'Painel básico de agenda',
      'Ajuste de regras por dia',
    ],
    timeline: '3–5 semanas',
    options: {
      basic: 'Agenda com confirmação e lembretes.',
      complete: 'Inclui painel com histórico e filtros.',
    },
  },
  {
    id: 'crm-portal',
    title: 'Organizar clientes e vendas (CRM/Portal)',
    summary: 'Tudo do cliente num lugar só para acompanhar vendas.',
    bullets: ['Cadastro centralizado', 'Histórico de atendimento', 'Controle de oportunidades'],
    forWho: 'Empresas que precisam acompanhar clientes e negociações.',
    deliverables: [
      'Cadastro único de clientes',
      'Histórico de conversas',
      'Etapas de venda visíveis',
      'Avisos de follow-up',
      'Relatórios simples de status',
    ],
    timeline: '4–6 semanas',
    options: {
      basic: 'Cadastro + acompanhamento simples.',
      complete: 'Com portal do cliente e alertas.',
    },
  },
  {
    id: 'integracoes-pagamentos',
    title: 'Integrar sistemas e pagamentos',
    summary: 'Vendas e pagamentos sincronizados sem retrabalho.',
    bullets: ['Pagamentos integrados', 'Atualização automática', 'Menos digitação'],
    forWho: 'Negócios que usam mais de um sistema e querem unificar tudo.',
    deliverables: [
      'Fluxo de pagamento integrado',
      'Atualização automática de status',
      'Notificações de confirmação',
      'Relatório de recebimentos',
      'Checklist de implantação',
    ],
    timeline: '3–5 semanas',
    options: {
      basic: 'Integração principal + notificações.',
      complete: 'Inclui conciliação e relatórios.',
    },
  },
  {
    id: 'relatorios-rotinas',
    title: 'Automatizar relatórios e rotinas',
    summary: 'Relatórios prontos e tarefas repetitivas no automático.',
    bullets: ['Relatórios por período', 'Alertas inteligentes', 'Rotina sem planilha'],
    forWho: 'Gestores que precisam de visão rápida e menos trabalho manual.',
    deliverables: [
      'Relatórios com filtros',
      'Envio automático por período',
      'Alertas de variação',
      'Painel com indicadores-chave',
      'Guia simples de uso',
    ],
    timeline: '2–4 semanas',
    options: {
      basic: 'Relatórios essenciais prontos.',
      complete: 'Inclui painel e alertas extras.',
    },
  },
  {
    id: 'apps-iot',
    title: 'Apps e IoT (quando precisa hardware)',
    summary: 'Controle do seu negócio pelo celular e equipamentos conectados.',
    bullets: ['Aplicativo sob medida', 'Monitoramento remoto', 'Alertas em tempo real'],
    forWho: 'Operações que dependem de equipamentos e controle remoto.',
    deliverables: [
      'Aplicativo sob medida',
      'Painel de monitoramento',
      'Alertas instantâneos',
      'Configuração assistida',
      'Treinamento para equipe',
    ],
    timeline: '4–8 semanas',
    options: {
      basic: 'Aplicativo + monitoramento.',
      complete: 'Inclui integrações e automações.',
    },
  },
];

const includes = [
  { id: 'design', label: 'Design responsivo', icon: Monitor },
  { id: 'seo', label: 'SEO básico (Google)', icon: Search },
  { id: 'whats', label: 'Integração com WhatsApp', icon: MessageCircle },
  { id: 'admin', label: 'Painel administrativo (opcional)', icon: LayoutDashboard },
  { id: 'deploy', label: 'Hospedagem/Deploy assistido', icon: Cloud },
  { id: 'support', label: 'Suporte pós-entrega', icon: LifeBuoy },
];

const steps = [
  {
    id: 'descoberta',
    title: 'Descoberta',
    text: 'Entendemos seu objetivo, seu público e o que mais dói hoje.',
  },
  {
    id: 'prototipo',
    title: 'Protótipo',
    text: 'Você vê a solução antes de construir e aprova ajustes.',
  },
  {
    id: 'entrega',
    title: 'Entrega',
    text: 'Implementamos por etapas, sem travar o seu dia a dia.',
  },
  {
    id: 'suporte',
    title: 'Suporte',
    text: 'Acompanhamos depois da entrega para ajustes e evolução.',
  },
];

const faqs = [
  {
    question: 'Quanto custa?',
    answer: 'Depende do objetivo e do tamanho. Fazemos orçamento rápido e transparente.',
  },
  {
    question: 'Em quanto tempo fica pronto?',
    answer: 'Damos um prazo típico e entregamos por etapas para você já usar o básico.',
  },
  {
    question: 'Preciso já ter site ou sistema?',
    answer: 'Não. Podemos começar do zero ou melhorar o que você já usa.',
  },
  {
    question: 'Vocês dão suporte depois?',
    answer: 'Sim, oferecemos suporte pós-entrega e planos de evolução.',
  },
  {
    question: 'E se eu não souber explicar?',
    answer: 'Ajudamos a traduzir sua necessidade e mostramos um protótipo simples.',
  },
  {
    question: 'Posso começar pequeno?',
    answer: 'Sim, começamos com o essencial e evoluímos quando fizer sentido.',
  },
];

export default function SolutionsClient({ whatsappNumber }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const messageMap = useMemo(
    () => ({
      'pedidos-contatos':
        'Olá! Quero um orçamento para receber pedidos e contatos. Meu negócio é [tipo]. Preciso de: [resumo].',
      'agenda-confirmacao':
        'Olá! Quero um orçamento para agendar e confirmar horários. Meu negócio é [tipo]. Preciso de: [resumo].',
      'crm-portal':
        'Olá! Quero um orçamento para organizar clientes e vendas. Meu negócio é [tipo]. Preciso de: [resumo].',
      'integracoes-pagamentos':
        'Olá! Quero um orçamento para integrar sistemas e pagamentos. Meu negócio é [tipo]. Preciso de: [resumo].',
      'relatorios-rotinas':
        'Olá! Quero um orçamento para automatizar relatórios e rotinas. Meu negócio é [tipo]. Preciso de: [resumo].',
      'apps-iot':
        'Olá! Quero um orçamento para apps e IoT. Meu negócio é [tipo]. Preciso de: [resumo].',
    }),
    []
  );

  const buildWhatsAppLink = (message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleOpen = (category: Category) => {
    setActiveCategory(category);
  };

  const handleClose = () => {
    setActiveCategory(null);
  };

  useEffect(() => {
    if (!activeCategory) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeCategory]);

  const heroMessage = 'Olá! Quero entender qual solução serve para o meu negócio.';
  const finalMessage = 'Olá! Quero agendar uma conversa para montar uma solução sob medida.';

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroTag}>
            <NeurelixLogo size={26} colorClassName={styles.logoColor} />
            Soluções Neurelix
          </div>
          <h1 className={styles.heroTitle}>
            Soluções sob medida para vender mais, atender melhor e automatizar o seu negócio.
          </h1>
          <p className={styles.heroSubtitle}>Sites, automações, IA e integrações — sem burocracia.</p>
          <div className={styles.heroActions}>
            <Link href={buildWhatsAppLink(heroMessage)} className={styles.primaryCta}>
              Falar no WhatsApp
              <ArrowRight className={styles.ctaIcon} />
            </Link>
            <Link href="/exemplos" className={styles.secondaryCta}>
              Ver exemplos funcionando
            </Link>
          </div>
          <div className={styles.heroPills}>
            {['Orçamento rápido', 'Entrega por etapas', 'Suporte pós-entrega'].map((pill) => (
              <span key={pill} className={styles.heroPill}>
                {pill}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Escolha seu objetivo</h2>
            <p className={styles.sectionSubtitle}>
              Escolha o que você quer resolver. A gente monta o caminho ideal para o seu negócio.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <div key={category.id} className={styles.categoryCard}>
                <div className={styles.categoryIcon}>
                  {category.id === 'pedidos-contatos' && <MessageCircle className={styles.icon} />}
                  {category.id === 'agenda-confirmacao' && <Calendar className={styles.icon} />}
                  {category.id === 'crm-portal' && <Users className={styles.icon} />}
                  {category.id === 'integracoes-pagamentos' && <CreditCard className={styles.icon} />}
                  {category.id === 'relatorios-rotinas' && <FileText className={styles.icon} />}
                  {category.id === 'apps-iot' && <Smartphone className={styles.icon} />}
                </div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <p className={styles.categorySummary}>{category.summary}</p>
                <ul className={styles.categoryList}>
                  {category.bullets.map((bullet) => (
                    <li key={bullet} className={styles.categoryListItem}>
                      <span className={styles.categoryDot} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <button type="button" onClick={() => handleOpen(category)} className={styles.categoryButton}>
                  Quero essa solução
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>O que está incluso</h2>
          </div>
          <div className={styles.includeGrid}>
            {includes.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className={styles.includeCard}>
                  <div className={styles.includeIcon}>
                    <Icon className={styles.icon} />
                  </div>
                  <p className={styles.includeText}>{item.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Como funciona</h2>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={step.id} className={styles.stepCard}>
                <span className={styles.stepLabel}>Etapa {index + 1}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Preço e prazos</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = faqOpen === index;
              return (
                <button
                  type="button"
                  key={faq.question}
                  onClick={() => setFaqOpen(isOpen ? null : index)}
                  className={styles.faqItem}
                  aria-expanded={isOpen}
                >
                  <div className={styles.faqHeader}>
                    <span className={styles.faqQuestion}>{faq.question}</span>
                    <span className={styles.faqToggle}>{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && <p className={styles.faqAnswer}>{faq.answer}</p>}
                </button>
              );
            })}
          </div>
        </section>

        <section className={styles.finalCtaSection}>
          <div className={styles.finalCtaBox}>
            <h2 className={styles.finalCtaTitle}>
              Não achou exatamente sua necessidade? A gente monta sob medida.
            </h2>
            <Link href={buildWhatsAppLink(finalMessage)} className={styles.primaryCtaLarge}>
              Agendar conversa no WhatsApp
              <ArrowRight className={styles.ctaIcon} />
            </Link>
          </div>
        </section>
      </div>

      {activeCategory && (
        <div className={styles.modalRoot}>
          <button type="button" onClick={handleClose} className={styles.modalBackdrop} aria-label="Fechar modal" />
          <div className={styles.modalPanel}>
            <button type="button" onClick={handleClose} className={styles.modalClose} aria-label="Fechar">
              <X className={styles.iconSmall} />
            </button>
            <div className={styles.modalContent}>
              <div>
                <h3 className={styles.modalTitle}>{activeCategory.title}</h3>
                <p className={styles.modalSubtitle}>{activeCategory.forWho}</p>
              </div>

              <div>
                <h4 className={styles.modalSectionTitle}>O que entregamos</h4>
                <ul className={styles.modalList}>
                  {activeCategory.deliverables.map((item) => (
                    <li key={item} className={styles.modalListItem}>
                      <CheckCircle2 className={styles.iconSmall} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalOptions}>
                <div className={styles.modalOptionCard}>
                  <h5 className={styles.modalOptionTitle}>Básico</h5>
                  <p className={styles.modalOptionText}>{activeCategory.options.basic}</p>
                </div>
                <div className={styles.modalOptionCardHighlight}>
                  <h5 className={styles.modalOptionTitle}>Completo</h5>
                  <p className={styles.modalOptionText}>{activeCategory.options.complete}</p>
                </div>
              </div>

              <div className={styles.modalFooter}>
                <div className={styles.modalTimeline}>
                  Prazo típico: <span>{activeCategory.timeline}</span>
                </div>
                <Link
                  href={buildWhatsAppLink(messageMap[activeCategory.id])}
                  className={styles.primaryCta}
                >
                  Pedir orçamento no WhatsApp
                  <ArrowRight className={styles.ctaIcon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
