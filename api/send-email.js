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

    // =============================
    // EMAIL INTERNO
    // =============================
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

    // =============================
    // AUTO-RESPOSTA COM LOGO
    // =============================
    try {
      autoReplyResult = await resend.emails.send({
        from: 'BaldShield <contato@baldshield.com>',
        to: email,
        subject: 'Recebemos sua mensagem | BaldShield',
        html: `
          <div style="background:#0b0b0b; padding:40px 20px; font-family: Arial, sans-serif;">
            <div style="max-width:600px; margin:0 auto; background:#111; border-radius:12px; overflow:hidden; border:1px solid #222;">

              <!-- HEADER COM LOGO -->
              <div style="padding:24px; text-align:center; border-bottom:1px solid #222;">
                
                <img 
                  src="https://www.baldshield.com/logo.png"
                  alt="BaldShield"
                  width="140"
                  style="display:block; margin:0 auto 12px auto;"
                />

                <p style="color:#888; margin:0; font-size:12px;">
                  Proteção solar feita para quem é careca
                </p>

              </div>

              <!-- BODY -->
              <div style="padding:32px 24px; color:#eaeaea;">

                <h2 style="margin-top:0; font-size:20px;">
                  Olá${nome ? `, ${nome}` : ''}.
                </h2>

                <p style="color:#cfcfcf; line-height:1.6;">
                  Recebemos sua mensagem com sucesso.
                </p>

                <p style="color:#cfcfcf; line-height:1.6;">
                  Você está falando com uma marca que está criando o 
                  <strong style="color:#ff6a00;">
                    primeiro protetor solar pensado para carecas no Brasil
                  </strong>.
                </p>

                <p style="color:#cfcfcf; line-height:1.6;">
                  Nosso time já está analisando sua mensagem e retornaremos em breve.
                </p>

                <!-- RESUMO -->
                <div style="background:#1a1a1a; padding:16px; border-radius:8px; margin:24px 0;">
                  <p style="margin:0 0 8px 0; color:#999; font-size:12px;">
                    Resumo da sua mensagem
                  </p>
                  <p style="margin:0;">
                    <strong>Assunto:</strong> ${assunto || '-'}
                  </p>
                  <p style="margin:8px 0 0 0;">
                    <strong>Mensagem:</strong> ${mensagem || '-'}
                  </p>
                </div>

                <!-- CTA -->
                <div style="text-align:center; margin:32px 0;">
                  <a href="https://www.baldshield.com" 
                    style="background:#ff6a00; color:#fff; padding:14px 22px; border-radius:6px; text-decoration:none; font-weight:bold; display:inline-block;">
                    Acompanhar lançamento
                  </a>
                </div>

                <!-- SOCIAL -->
                <p style="text-align:center; color:#888; font-size:13px;">
                  Siga também:
                </p>

                <p style="text-align:center;">
                  <a href="https://instagram.com/baldshield.br" style="color:#ff6a00; text-decoration:none;">
                    @baldshield.br
                  </a>
                </p>

              </div>

              <!-- FOOTER -->
              <div style="padding:16px; text-align:center; border-top:1px solid #222;">
                <p style="color:#666; font-size:12px; margin:0;">
                  BaldShield © ${new Date().getFullYear()}
                </p>
              </div>

            </div>
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
