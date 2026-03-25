import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: 'RESEND_API_KEY não configurada',
      });
    }

    const resend = new Resend(apiKey);

    const body =
      typeof req.body === 'string'
        ? JSON.parse(req.body || '{}')
        : req.body || {};

    const { nome, email, assunto, mensagem } = body;

    const result = await resend.emails.send({
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

    return res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.error('Erro ao enviar email:', error);

    return res.status(500).json({
      success: false,
      error: error?.message || 'Erro ao enviar email',
    });
  }
}
