import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, Play } from 'lucide-react';
import { readFile, readdir, stat } from 'fs/promises';
import path from 'path';
import NeurelixLogo from '@/components/NeurelixLogo';
import demoStyles from '../admin/dashboard/page.module.css';

export const metadata: Metadata = {
  title: 'Exemplos - Neurelix',
  description: 'Veja demonstrações interativas de nossas soluções em funcionamento.',
};

const titleFromSlug = (slug: string) => {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const getDemos = async () => {
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
      // Ignore missing or invalid meta file.
    }

    const entries = (await readdir(demosDir)).filter((entry) => entry.endsWith('.html'));
    const metaMap = new Map(meta.map((demo) => [demo.name, demo.description || '']));

    const demos = await Promise.all(
      entries.map(async (entry) => {
        const slug = entry.replace(/\.html$/, '');
        const filePath = path.join(demosDir, entry);
        try {
          const info = await stat(filePath);
          return {
            id: slug,
            title: titleFromSlug(slug),
            description: metaMap.get(slug) || 'Demonstração interativa disponível para visualização.',
            route: `/demos/${entry}`,
            date: info.mtime.toLocaleDateString('pt-BR'),
          };
        } catch (err) {
          return null;
        }
      })
    );

    return demos.filter((demo): demo is NonNullable<typeof demo> => Boolean(demo));
  } catch (err) {
    return [];
  }
};

export default async function ExamplesPage() {
  const examples = await getDemos();
  return (
    <div className="min-h-screen bg-black neural-grid text-[#E6EDF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <NeurelixLogo size={40} colorClassName="text-green-400" />
            <span>Exemplos Interativos</span>
          </h1>
          <p className="text-xl text-[#E6EDF3]/80 max-w-3xl mx-auto">
            Não apenas falamos, nós mostramos. Teste nossas soluções em ambientes de demonstração reais.
          </p>
        </div>

        <div className="mb-16">
          {examples.length === 0 ? (
            <div className="text-center text-[#E6EDF3]/70">
              Nenhuma demo disponível no momento.
            </div>
          ) : (
            <div className={demoStyles.demoGrid}>
              {examples.map((example) => (
                <div key={example.id} className={demoStyles.demoCard}>
                  <div className={demoStyles.demoPreview}>
                    <iframe
                      title={`Prévia ${example.title}`}
                      src={example.route}
                      className={demoStyles.demoFrame}
                      loading="lazy"
                    />
                  </div>
                  <div className={demoStyles.demoContent}>
                    <div className={demoStyles.demoHeader}>
                      <div className={demoStyles.projectCell}>
                        <div className={demoStyles.projectIcon}>
                          <FileText />
                        </div>
                        <span className={demoStyles.projectName}>{example.title}</span>
                      </div>
                      <div className={demoStyles.statusCell}>
                        <div className={demoStyles.statusDot} />
                        <span className={demoStyles.statusText}>Ativo</span>
                      </div>
                    </div>
                    <p className={demoStyles.demoDescription}>{example.description}</p>
                    <div className={demoStyles.demoMeta}>
                      <Link href={example.route} className={demoStyles.demoLink}>
                        Abrir demo <ArrowRight size={12} />
                      </Link>
                      <span className={demoStyles.demoDate}>{example.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-green-500/20 text-center">
          <h2 className="text-2xl font-bold mb-4">Quer ver mais?</h2>
          <p className="text-[#E6EDF3]/80 mb-8 max-w-2xl mx-auto">
            Temos dezenas de outros cases e exemplos privados. Agende uma demonstração personalizada para ver soluções específicas para o seu setor.
          </p>
          <Link
            href="#contato"
            className="inline-flex items-center px-8 py-4 bg-green-500 text-black rounded-lg font-bold hover:bg-green-400 transition-colors"
          >
            Agendar demonstração <Play className="ml-2 h-5 w-5 fill-current" />
          </Link>
        </div>
      </div>
    </div>
  );
}
