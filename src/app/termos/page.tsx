import type { Metadata } from 'next';
import NeurelixLogo from '@/components/NeurelixLogo';

export const metadata: Metadata = {
  title: 'Termos de Serviço - Neurelix',
  description: 'Termos de serviço da Neurelix referentes ao uso de nossas soluções de IA e automação.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black neural-grid text-[#E6EDF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <NeurelixLogo size={40} colorClassName="text-green-400" />
            <span>Termos de Serviço</span>
          </h1>
          <p className="text-lg text-[#E6EDF3]/80">
            Termos aplicáveis ao uso de nossas soluções de IA e automação
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-green-400">1. Aceitação dos Termos</h2>
          <p className="mb-4">
            Ao contratar nossos serviços ou utilizar nossas soluções, você ("Cliente") concorda 
            integralmente com estes Termos de Serviço, estabelecendo uma relação contratual 
            entre você e a Neurelix ("Nós").
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">2. Escopo dos Serviços</h2>
          <p className="mb-4">
            Nossos serviços incluem o desenvolvimento de soluções digitais personalizadas, 
            como websites, aplicativos, integrações de API, sistemas de automação e 
            assistentes de IA, conforme detalhado no contrato ou proposta específica.
          </p>
          <p className="mb-4">
            O escopo exato de cada projeto será definido previamente em documento 
            específico, acordado entre as partes.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">3. Propriedade Intelectual</h2>
          <p className="mb-4">
            O Cliente detém todos os direitos sobre o conteúdo, marcas, logotipos e 
            outros materiais fornecidos para o projeto.
          </p>
          <p className="mb-4">
            A Neurelix retém os direitos sobre frameworks, bibliotecas e componentes 
            genéricos desenvolvidos internamente que possam ser utilizados em múltiplos projetos.
          </p>
          <p className="mb-4">
            O código fonte e outros materiais desenvolvidos especificamente para o 
            Cliente serão transferidos após o pagamento integral do projeto, exceto 
            se acordado de outra forma em contrato específico.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">4. Limites de Suporte</h2>
          <p className="mb-4">
            O suporte pós-entrega está limitado ao período acordado no contrato, 
            geralmente 30 dias para correções de bugs críticos.
          </p>
          <p className="mb-4">
            Solicitações de novas funcionalidades ou alterações substanciais 
            estarão sujeitas a novos termos e cobrança adicional.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">5. Isenção de Responsabilidade Técnica</h2>
          <p className="mb-4">
            Nossas soluções são fornecidas "como estão", sem garantias expressas ou implícitas.
          </p>
          <p className="mb-4">
            A Neurelix não se responsabiliza por perdas de dados, lucros ou 
            interrupções de negócios decorrentes do uso ou falha das soluções.
          </p>
          <p className="mb-4">
            A responsabilidade total da Neurelix será limitada ao valor pago 
            pelo Cliente pelo serviço em questão.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">6. Dados e Privacidade</h2>
          <p className="mb-4">
            Tratamos todos os dados com rigorosa conformidade com a Lei Geral de 
            Proteção de Dados (LGPD) e regulamentações aplicáveis.
          </p>
          <p className="mb-4">
            O Cliente é responsável por garantir que os dados fornecidos para 
            processamento ou integração estejam em conformidade com as leis de privacidade.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">7. Modificações</h2>
          <p className="mb-4">
            Estes termos podem ser atualizados periodicamente. Alterações 
            significativas serão comunicadas ao Cliente com antecedência.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">8. Lei Aplicável</h2>
          <p className="mb-4">
            Estes termos são regidos pelas leis da República Federativa do Brasil. 
            Eventuais disputas serão resolvidas nos foros competentes do domicílio do Cliente.
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