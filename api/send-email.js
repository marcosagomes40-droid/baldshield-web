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

    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'E-mail do cliente não informado',
      });
    }

    // 1) Email interno para BaldShield
    const internalResult = await resend.emails.send({
      from: 'BaldShield <contato@baldshield.com>',
      to: 'contato@baldshield.com',
      subject: `Novo contato do site: ${assunto || 'Sem assunto'}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Novo contato pelo site</h2>
          <p><strong>Nome:</strong> ${nome || '-'}</p>
          <p><strong>E-mail:</strong> ${email || '-'}</p>
          <p><strong>Assunto:</strong> ${assunto || '-'}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${mensagem || '-'}</p>
        </div>
      `,
      replyTo: email,
    });

    let autoReplyResult = null;
    let autoReplyError = null;

    // 2) Auto-resposta para o cliente
    try {
      autoReplyResult = await resend.emails.send({
        from: 'BaldShield <contato@baldshield.com>',
        to: email,
        subject: 'Recebemos sua mensagem | BaldShield',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto;">
            <h2 style="margin-bottom: 16px;">Olá${nome ? `, ${nome}` : ''}!</h2>

            <p>Recebemos sua mensagem com sucesso e agradecemos seu contato com a <strong>BaldShield</strong>.</p>

            <p>Nosso time vai analisar sua solicitação e retornar o mais breve possível.</p>

            <div style="margin: 24px 0; padding: 16px; background: #f6f6f6; border-radius: 8px;">
              <p style="margin: 0 0 8px 0;"><strong>Resumo da sua mensagem:</strong></p>
              <p style="margin: 0;"><strong>Assunto:</strong> ${assunto || '-'}</p>
              <p style="margin: 8px 0 0 0;"><strong>Mensagem:</strong> ${mensagem || '-'}</p>
            </div>

            <p>Seguimos à disposição.</p>

            <p style="margin-top: 24px;">
              <strong>BaldShield</strong><br />
              Proteção solar feita para quem é careca
            </p>
          </div>
        `,
      });
    } catch (error) {
      autoReplyError = error?.message || 'Falha ao enviar auto-resposta';
      console.error('Erro na auto-resposta:', error);
    }

    return res.status(200).json({
      success: true,
      internalResult,
      autoReplyResult,
      autoReplyError,
    });
  } catch (error) {
    console.error('Erro ao enviar email:', error);

    return res.status(500).json({
      success: false,
      error: error?.message || 'Erro ao enviar email',
    });
  }
}
