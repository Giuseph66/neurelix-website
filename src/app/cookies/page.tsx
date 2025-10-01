import type { Metadata } from 'next';
import NeurelixLogo from '@/components/NeurelixLogo';

export const metadata: Metadata = {
  title: 'Política de Cookies - Neurelix',
  description: 'Política de cookies da Neurelix sobre uso de tecnologias de rastreamento.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black neural-grid text-[#E6EDF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <NeurelixLogo size={40} colorClassName="text-green-400" />
            <span>Política de Cookies</span>
          </h1>
          <p className="text-lg text-[#E6EDF3]/80">
            Informações sobre como utilizamos cookies e tecnologias semelhantes
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-green-400">1. O que são cookies?</h2>
          <p className="mb-4">
            Cookies são pequenos arquivos de texto que são armazenados no seu 
            dispositivo (computador, tablet, smartphone) quando você visita 
            nossos websites. Eles permitem que nossos sistemas reconheçam seu 
            dispositivo e armazenem informações específicas sobre sua visita.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">2. Finalidade dos cookies</h2>
          <p className="mb-4">
            Utilizamos cookies para as seguintes finalidades:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Garantir o funcionamento adequado do website</li>
            <li>Analisar como você interage com nossos serviços</li>
            <li>Personalizar sua experiência de navegação</li>
            <li>Medir o desempenho e eficácia de nossas funcionalidades</li>
            <li>Oferecer conteúdo relevante com base em suas preferências</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">3. Tipos de cookies que utilizamos</h2>
          
          <h3 className="text-xl font-semibold mb-2 text-green-400">Cookies estritamente necessários</h3>
          <p className="mb-4">
            Esses cookies são essenciais para que você possa navegar pelo 
            website e usar suas funcionalidades. Eles geralmente são definidos 
            apenas em resposta a ações realizadas por você que correspondem a 
            uma solicitação de serviço, como definir preferências de privacidade, 
            fazer login ou preencher formulários.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-green-400">Cookies de análise</h3>
          <p className="mb-4">
            Utilizamos ferramentas de análise, como o Google Analytics, para 
            entender como você interage com nosso website. Essas ferramentas 
            coletam informações como:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Páginas visitadas</li>
            <li>Tempo de visita</li>
            <li>Links clicados</li>
            <li>Dispositivo e navegador utilizados</li>
            <li>Localização aproximada (baseada em IP)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-green-400">Cookies de funcionalidade</h3>
          <p className="mb-4">
            Esses cookies permitem que o website lembre das escolhas que você 
            faz (como seu nome de usuário, idioma ou região) e forneça recursos 
            aprimorados e mais personalizados.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">4. Gerenciamento de cookies</h2>
          <p className="mb-4">
            Você pode controlar e/ou excluir cookies conforme desejar. A maioria 
            dos navegadores permite que você:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Visualize quais cookies estão definidos</li>
            <li>Apague cookies individualmente ou em grupo</li>
            <li>Bloqueie todos os cookies ou apenas de terceiros</li>
            <li>Configure alertas sobre cookies</li>
          </ul>
          <p className="mb-4">
            Para aprender a gerenciar cookies no seu navegador específico, 
            consulte as configurações do navegador ou a seção de ajuda.
          </p>
          <p className="mb-4">
            Se você desativar todos os cookies, muitos recursos do website 
            não funcionarão corretamente.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">5. Cookies de terceiros</h2>
          <p className="mb-4">
            Terceiros, como parceiros de análise e provedores de serviços, 
            podem utilizar cookies em nosso website. Estes cookies estão 
            sujeitos às políticas de privacidade desses terceiros.
          </p>
          <p className="mb-4">
            Nossos parceiros de análise incluem:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Google Analytics</li>
            <li>Outras ferramentas de análise (TBD)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">6. Consentimento</h2>
          <p className="mb-4">
            Ao continuar a usar nosso website, você consente o uso de cookies 
            conforme descrito nesta Política. Você pode alterar suas preferências 
            de cookies a qualquer momento.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">7. Atualizações da política</h2>
          <p className="mb-4">
            Podemos atualizar esta Política de Cookies periodicamente para 
            refletir mudanças em nossas práticas ou por razões legais e 
            regulatórias. Alterações significativas serão comunicadas a você 
            por meio de nosso website ou outros meios apropriados.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">8. Contato</h2>
          <p className="mb-4">
            Se você tiver dúvidas sobre esta Política de Cookies, entre em 
            contato conosco:
          </p>
          <p className="mb-4">
            <strong>Neurelix</strong><br />
            <strong>E-mail:</strong> {process.env.EMAIL_PROFISSIONAL || 'contato@neurelix.com.br'}<br />
            <strong>WhatsApp:</strong> https://wa.me/{process.env.WHATSAPP_NUMBER || '5566999999999'}
          </p>

          <div className="mt-12 text-center">
            <p className="text-sm text-[#E6EDF3]/60">
              Última atualização: (TBD - Data de atualização)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}