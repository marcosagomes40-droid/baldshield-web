import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nome, email, assunto, mensagem } = req.body;

    await resend.emails.send({
      from: 'BaldShield <contato@baldshield.com>',
      to: 'contato@baldshield.com',
      subject: `Novo contato do site: ${assunto || 'Sem assunto'}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${nome || '-'}</p>
        <p><strong>E-mail:</strong> ${email || '-'}</p>
        <p><strong>Assunto:</strong> ${assunto || '-'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem || '-'}</p>
      `,
      replyTo: email || undefined,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({ error: 'Erro ao enviar email' });
  }
}
