import type { Metadata } from 'next';
import NeurelixLogo from '@/components/NeurelixLogo';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Neurelix',
  description: 'Política de privacidade da Neurelix sobre coleta, uso e proteção de dados.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black neural-grid text-[#E6EDF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <NeurelixLogo size={40} colorClassName="text-green-400" />
            <span>Política de Privacidade</span>
          </h1>
          <p className="text-lg text-[#E6EDF3]/80">
            Como coletamos, usamos e protegemos suas informações
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-green-400">1. Introdução</h2>
          <p className="mb-4">
            A Neurelix ("Nós", "Companhia") respeita sua privacidade e está 
            comprometida em proteger suas informações pessoais. Esta Política 
            de Privacidade explica como coletamos, usamos, compartilhamos e 
            protegemos suas informações quando você utiliza nossos serviços, 
            websites ou aplicações.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">2. Informações que Coletamos</h2>
          <p className="mb-4">
            <strong className="text-[#00E5FF]">Informações de Contato e Comunicação:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Nome</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Empresa/Organização</li>
            <li>Cargo/função</li>
          </ul>

          <p className="mb-4">
            <strong className="text-green-400">Informações de Projeto:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Detalhes do projeto solicitado</li>
            <li>Requisitos funcionais e não funcionais</li>
            <li>Informações sobre o negócio e setor de atuação</li>
            <li>Conteúdo ou dados fornecidos para desenvolvimento</li>
          </ul>

          <p className="mb-4">
            <strong className="text-green-400">Informações Técnicas:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Endereço IP</li>
            <li>Tipo de navegador e dispositivo</li>
            <li>Data e hora de acesso</li>
            <li>Páginas visitadas</li>
            <li>Informações de cookies e tecnologias semelhantes</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">3. Como Usamos suas Informações</h2>
          <p className="mb-4">
            Utilizamos suas informações para os seguintes fins:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Responder a suas perguntas e solicitações</li>
            <li>Desenvolver e entregar os serviços contratados</li>
            <li>Personalizar sua experiência com nossos serviços</li>
            <li>Enviar comunicações relevantes sobre seus projetos</li>
            <li>Melhorar nossos produtos e serviços</li>
            <li>Cumprir obrigações legais e contratuais</li>
            <li>Garantir a segurança de nossos sistemas e clientes</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">4. Compartilhamento de Informações</h2>
          <p className="mb-4">
            Não vendemos, comercializamos ou alugamos suas informações 
            pessoais para terceiros.
          </p>
          <p className="mb-4">
            Podemos compartilhar suas informações:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Com fornecedores e parceiros que nos ajudam a operar nossos negócios</li>
            <li>Quando exigido por lei ou para cumprir processos legais</li>
            <li>Para proteger nossos direitos, propriedade ou segurança</li>
            <li>Com seu consentimento explícito</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">5. Cookies e Tecnologias Semelhantes</h2>
          <p className="mb-4">
            Utilizamos cookies e tecnologias semelhantes para melhorar sua 
            experiência e coletar informações sobre como você utiliza nossos 
            serviços. Você pode configurar seu navegador para recusar cookies, 
            mas isso pode afetar a funcionalidade de alguns serviços.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">6. Segurança da Informação</h2>
          <p className="mb-4">
            Implementamos medidas de segurança técnicas, administrativas e 
            físicas para proteger suas informações contra acesso não autorizado, 
            alteração, divulgação ou destruição.
          </p>
          <p className="mb-4">
            No entanto, nenhum método de transmissão pela internet ou método 
            de armazenamento eletrônico é 100% seguro.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">7. Retenção de Dados</h2>
          <p className="mb-4">
            Retemos suas informações pelo tempo necessário para cumprir as 
            finalidades descritas nesta Política, ou conforme exigido por lei.
          </p>
          <p className="mb-4">
            Para clientes, mantemos registros por até 5 anos após o término 
            do relacionamento comercial, exceto quando exigido por lei período maior.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">8. Seus Direitos</h2>
          <p className="mb-4">
            Você tem o direito de:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Confirmar a existência de tratamento de seus dados</li>
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Eliminar dados desnecessários, excessivos ou tratados em desconformidade</li>
            <li>Obter informações sobre a possibilidade de não fornecer consentimento</li>
            <li>Revogar o consentimento, ressalvados os casos previstos em lei</li>
          </ul>
          <p className="mb-4">
            Para exercer esses direitos, entre em contato conosco usando os 
            dados fornecidos na seção "Contato" desta Política.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">9. Contato</h2>
          <p className="mb-4">
            Para exercer seus direitos ou para qualquer dúvida sobre esta 
            Política de Privacidade, entre em contato conosco:
          </p>
          <p className="mb-4">
            <strong>Controlador:</strong> Neurelix<br />
            <strong>E-mail:</strong> {process.env.EMAIL_PROFISSIONAL || 'contato@neurelix.com.br'}<br />
            <strong>WhatsApp:</strong> https://wa.me/{process.env.WHATSAPP_NUMBER || '5566999999999'}
          </p>

          <h2 className="text-2xl font-bold mb-4 text-green-400 mt-8">10. Alterações nesta Política</h2>
          <p className="mb-4">
            Podemos atualizar esta Política de Privacidade periodicamente. 
            Alterações significativas serão comunicadas por e-mail ou através 
            de notificação em nossos serviços.
          </p>
          <p className="mb-4">
            O uso contínuo de nossos serviços após as alterações constitui 
            aceitação da nova Política de Privacidade.
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