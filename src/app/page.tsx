import type { Metadata } from 'next';
import Link from 'next/link';
import { readFile, readdir } from 'fs/promises';
import path from 'path';
import { ArrowRight, LifeBuoy, PenTool, Rocket, Search } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Neurelix | IA, automacao e sites sob medida',
  description: 'Solucoes sob medida para vender mais, atender melhor e automatizar rotinas.',
};

type Objective = {
  id: string;
  title: string;
  result: string;
  bullets: string[];
  messageGoal: string;
};

type DemoPreview = {
  id: string;
  title: string;
  description: string;
  route: string;
};

const objectives: Objective[] = [
  {
    id: 'pedidos-contatos',
    title: 'Receber pedidos e contatos',
    result: 'Mais pedidos chegam organizados e ninguem fica sem resposta.',
    bullets: ['Botao de pedido', 'Atendimento rapido', 'Fila organizada'],
    messageGoal: 'receber pedidos e contatos',
  },
  {
    id: 'agenda-confirmacao',
    title: 'Agendar e confirmar horarios',
    result: 'Agenda automatica com confirmacao e lembretes.',
    bullets: ['Horarios disponiveis', 'Confirmacao rapida', 'Lembrete no WhatsApp'],
    messageGoal: 'agendar e confirmar horarios',
  },
  {
    id: 'crm-vendas',
    title: 'Organizar clientes e vendas',
    result: 'Tudo do cliente em um painel simples e claro.',
    bullets: ['Cadastro centralizado', 'Historico de atendimento', 'Controle de oportunidades'],
    messageGoal: 'organizar clientes e vendas',
  },
  {
    id: 'integracoes-pagamentos',
    title: 'Integrar sistemas e pagamentos',
    result: 'Pagamentos e sistemas falando entre si.',
    bullets: ['Pagamentos integrados', 'Status atualizado', 'Menos retrabalho'],
    messageGoal: 'integrar sistemas e pagamentos',
  },
  {
    id: 'relatorios-rotinas',
    title: 'Automatizar relatorios e rotinas',
    result: 'Relatorios prontos sem planilha e sem esforco manual.',
    bullets: ['Relatorios por periodo', 'Alertas inteligentes', 'Rotinas automaticas'],
    messageGoal: 'automatizar relatorios e rotinas',
  },
  {
    id: 'apps-iot',
    title: 'Apps e IoT (quando precisa hardware)',
    result: 'Controle equipamentos pelo celular com seguranca.',
    bullets: ['Aplicativo sob medida', 'Monitoramento remoto', 'Alertas em tempo real'],
    messageGoal: 'apps e IoT com hardware',
  },
];

const miniCases = [
  {
    id: 'case-1',
    problem: 'Problema: pedidos perdidos no WhatsApp.',
    solution: 'Solucao: fluxo de pedido simples e organizado.',
    result: 'Resultado: atendimento mais rapido e previsivel.',
  },
  {
    id: 'case-2',
    problem: 'Problema: agenda cheia de remarcacoes.',
    solution: 'Solucao: confirmacao automatica e lembretes.',
    result: 'Resultado: rotina mais estavel e menos faltas.',
  },
];

const faqs = [
  {
    question: 'Quanto tempo leva?',
    answer: 'Depende do objetivo e da etapa combinada. Voce recebe um prazo simples logo no inicio.',
  },
  {
    question: 'Preciso ter dominio e hospedagem?',
    answer: 'Se voce ja tem, otimo. Se nao tiver, a gente orienta e ajuda a configurar.',
  },
  {
    question: 'Voces integram com WhatsApp?',
    answer: 'Sim. Podemos integrar botoes, formularios e fluxos de atendimento.',
  },
  {
    question: 'Da para fazer por etapas?',
    answer: 'Sim. Entregamos o essencial primeiro e evoluimos conforme voce valida.',
  },
  {
    question: 'Como funciona o suporte?',
    answer: 'Apos a entrega, voce conta com suporte e ajustes combinados.',
  },
  {
    question: 'Como voces cobram?',
    answer: 'Orcamento baseado no escopo. Voce sabe o que entra e o que fica para depois.',
  },
];

const titleFromSlug = (slug: string) => {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const fallbackPreviews: DemoPreview[] = [
  {
    id: 'agendamento',
    title: 'Agenda Facil',
    description: 'Agendamento com confirmacao e lembrete rapido.',
    route: '/demos/agendamento.html',
  },
  {
    id: 'dashboard',
    title: 'Painel de Vendas',
    description: 'Resumo simples para acompanhar pedidos.',
    route: '/demos/dashboard.html',
  },
  {
    id: 'institucional',
    title: 'Site Institucional',
    description: 'Landing page com CTA direto para contato.',
    route: '/exemplos',
  },
];

const getDemoPreviews = async (): Promise<DemoPreview[]> => {
  try {
    const demosDir = path.join(process.cwd(), 'public', 'demos');
    const metaPath = path.join(demosDir, 'demos.json');
    let meta: Array<{ name: string; description?: string }> = [];

    try {
      const raw = await readFile(metaPath, 'utf-8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        meta = parsed;
      }
    } catch (err) {
      // Ignore missing meta file.
    }

    const files = (await readdir(demosDir)).filter((entry) => entry.endsWith('.html'));
    const metaMap = new Map(meta.map((demo) => [demo.name, demo.description || '']));

    const previews: DemoPreview[] = files.map((entry) => {
      const slug = entry.replace(/\.html$/, '');
      return {
        id: slug,
        title: titleFromSlug(slug),
        description: metaMap.get(slug) || 'Demonstracao ao vivo para entender a experiencia.',
        route: `/demos/${entry}`,
      };
    });

    const fallback = [...previews];
    fallbackPreviews.forEach((item) => {
      if (!fallback.find((preview) => preview.route === item.route)) {
        fallback.push(item);
      }
    });

    return fallback.slice(0, 3);
  } catch (err) {
    return fallbackPreviews;
  }
};

export default async function HomePage() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER || '5566999999999';
  const buildWhatsAppLink = (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const previewCards = await getDemoPreviews();

  return (
    <main className={styles.page}>
      <div className={styles.gridOverlay} />

      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>
              IA, automacao e sites que fazem seu negocio vender e atender melhor.
            </h1>
            <p className={styles.heroSubtitle}>
              Solucoes sob medida, sem burocracia: do site ao WhatsApp e automacoes internas.
            </p>
            <div className={styles.heroActions}>
              <a
                href={buildWhatsAppLink('Ola! Quero entender qual solucao serve para o meu negocio.')}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryCta}
              >
                Falar no WhatsApp
                <ArrowRight className={styles.ctaIcon} />
              </a>
              <Link href="/exemplos" className={styles.secondaryCta}>
                Ver exemplos funcionando
              </Link>
            </div>
            <div className={styles.heroPills}>
              {['Orcamento rapido', 'Entrega por etapas', 'Suporte pos-entrega'].map((pill) => (
                <span key={pill} className={styles.heroPill}>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Escolha seu objetivo</h2>
            <p className={styles.sectionSubtitle}>
              Escolha o que voce quer resolver. A gente monta o caminho ideal para o seu negocio.
            </p>
          </div>

          <div className={styles.objectiveGrid}>
            {objectives.map((objective) => {
              const message = `Ola! Quero ${objective.messageGoal}. Meu negocio e [tipo]. Hoje eu tenho [cenario]. Quero melhorar [meta].`;
              return (
                <div key={objective.id} className={styles.objectiveCard}>
                  <h3 className={styles.objectiveTitle}>{objective.title}</h3>
                  <p className={styles.objectiveResult}>{objective.result}</p>
                  <ul className={styles.objectiveList}>
                    {objective.bullets.map((bullet) => (
                      <li key={bullet} className={styles.objectiveListItem}>
                        <span className={styles.objectiveDot} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.objectiveActions}>
                    <a
                      href={buildWhatsAppLink(message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.objectivePrimary}
                    >
                      Quero isso
                    </a>
                    <Link href="/solucoes" className={styles.objectiveSecondary}>
                      Ver solucoes
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Veja funcionando (ao vivo)</h2>
            <p className={styles.sectionSubtitle}>
              Provas rapidas para voce sentir a experiencia antes de falar com a gente.
            </p>
          </div>

          <div className={styles.previewGrid}>
            {previewCards.length === 0 ? (
              <div className={styles.previewEmpty}>
                Nenhuma demonstracao disponivel no momento.
              </div>
            ) : (
              previewCards.map((preview) => (
                <div key={preview.id} className={styles.previewCard}>
                  <div className={styles.previewFrame}>
                    <iframe
                      title={`Previa ${preview.title}`}
                      src={preview.route}
                      className={styles.previewIframe}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.previewContent}>
                    <div>
                      <h3 className={styles.previewTitle}>{preview.title}</h3>
                      <p className={styles.previewDescription}>{preview.description}</p>
                    </div>
                    <a
                      href={preview.route}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.previewButton}
                    >
                      Abrir exemplo
                      <ArrowRight className={styles.ctaIcon} />
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className={styles.sectionHeaderAlt}>
            <h3 className={styles.sectionTitleAlt}>Resultados em projetos reais</h3>
            <p className={styles.sectionSubtitle}>
              Histories reais de negocios que organizaram o atendimento e ganharam tempo.
            </p>
          </div>

          <div className={styles.casesGrid}>
            {miniCases.map((caseItem) => (
              <div key={caseItem.id} className={styles.caseCard}>
                <p className={styles.caseLine}>{caseItem.problem}</p>
                <p className={styles.caseLine}>{caseItem.solution}</p>
                <p className={styles.caseResult}>{caseItem.result}</p>
                <Link href="/cases" className={styles.caseLink}>
                  Ver case
                  <ArrowRight className={styles.ctaIcon} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.splitSection}>
            <div>
              <h2 className={styles.sectionTitle}>Como funciona</h2>
              <div className={styles.stepsList}>
                {[
                  { title: 'Descoberta', text: 'Entendemos seu objetivo e o que mais trava hoje.', icon: Search },
                  { title: 'Prototipo', text: 'Voce aprova o caminho antes de construir tudo.', icon: PenTool },
                  { title: 'Entrega', text: 'Implementacao por etapas para voce ja usar.', icon: Rocket },
                  { title: 'Suporte', text: 'Acompanhamos depois da entrega para ajustes.', icon: LifeBuoy },
                ].map((step) => (
                  <div key={step.title} className={styles.stepCard}>
                    <div className={styles.stepIcon}>
                      <step.icon className={styles.icon} />
                    </div>
                    <div>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepText}>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className={styles.sectionTitle}>Perguntas rapidas</h2>
              <div className={styles.faqList}>
                {faqs.map((faq) => (
                  <details key={faq.question} className={styles.faqItem}>
                    <summary className={styles.faqSummary}>
                      <span>{faq.question}</span>
                      <span className={styles.faqToggle}>+</span>
                    </summary>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Preco transparente</h2>
            <p className={styles.sectionSubtitle}>
              O valor depende do escopo e do que ja existe no seu negocio.
            </p>
          </div>

          <div className={styles.pricingGrid}>
            <div className={styles.pricingCardHighlight}>
              <h3 className={styles.pricingTitle}>Microsolucoes a partir de R$ 100</h3>
              <p className={styles.pricingText}>
                Ajustes rapidos, paginas simples e melhorias pontuais.
              </p>
              <Link href="/precos" className={styles.pricingLink}>
                Solicitar agora
                <ArrowRight className={styles.ctaIcon} />
              </Link>
            </div>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingTitle}>Projeto sob medida</h3>
              <p className={styles.pricingText}>
                Planejamento completo com entregas por etapas e acompanhamento.
              </p>
              <a
                href={buildWhatsAppLink('Ola! Quero falar sobre um projeto sob medida.')}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pricingLink}
              >
                Falar com especialista
                <ArrowRight className={styles.ctaIcon} />
              </a>
            </div>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingTitle}>Consultoria por hora</h3>
              <p className={styles.pricingText}>
                Direcionamento rapido para destravar decisoes tecnicas e estrategicas.
              </p>
              <a
                href={buildWhatsAppLink('Ola! Quero agendar uma consultoria rapida.')}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pricingLink}
              >
                Agendar conversa
                <ArrowRight className={styles.ctaIcon} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCtaSection}>
        <div className={styles.container}>
          <div className={styles.finalCtaBox}>
            <h2 className={styles.finalCtaTitle}>
              Me diga o seu objetivo e eu te respondo com um plano simples.
            </h2>
            <div className={styles.finalCtaActions}>
              <a
                href={buildWhatsAppLink('Ola! Quero falar sobre uma solucao para o meu negocio.')}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryCta}
              >
                Chamar no WhatsApp
                <ArrowRight className={styles.ctaIcon} />
              </a>
              <Link href="/exemplos" className={styles.secondaryCta}>
                Ver exemplos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
