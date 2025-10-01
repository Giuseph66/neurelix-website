import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { name, email, phone, message } = req.body;

  // Validação dos campos
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Campos obrigatórios não preenchidos' 
    });
  }

  // Validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: 'Email inválido' 
    });
  }

  try {
    // Aqui você pode implementar o envio do email usando um serviço como Resend, Nodemailer, etc.
    // Por enquanto, apenas simulando o envio para demonstração
    
    console.log('Formulário de contato recebido:');
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Telefone:', phone || 'Não informado');
    console.log('Mensagem:', message);
    
    // Em uma implementação real, você usaria um serviço de envio de email como:
    // 1. Resend
    // 2. SendGrid
    // 3. Nodemailer com SMTP
    // 4. Outro serviço de email
    
    // Exemplo com Resend (descomente e configure após instalação):
    /*
    import { Resend } from 'resend';
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Você deve usar um domínio verificado
      to: process.env.CONTACT_EMAIL || 'destinatario@exemplo.com',
      subject: `Nova mensagem de contato de ${name}`,
      text: `Nome: ${name}\\nEmail: ${email}\\nTelefone: ${phone || 'Não informado'}\\nMensagem: ${message}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
             <p><strong>Mensagem:</strong> ${message}</p>`
    });
    */

    return res.status(200).json({ 
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
    });
  } catch (error) {
    console.error('Erro ao processar o formulário de contato:', error);
    return res.status(500).json({ 
      message: 'Erro interno ao processar a mensagem' 
    });
  }
}