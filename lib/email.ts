import nodemailer from "nodemailer";

export interface PurchaseRequestData {
  productId: number;
  productName: string;
  productCategory: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  quantity: number;
  message?: string;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendPurchaseRequestEmail(data: PurchaseRequestData) {
  const transporter = createTransporter();

  const recipientEmail = process.env.RECIPIENT_EMAIL || "dev@vex-mx.com";

  const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; color: #1a2942; background: #f8fafc; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(10,22,40,0.10); }
    .header { background: linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%); padding: 32px 40px; text-align: center; }
    .header h1 { color: #ffffff; font-size: 24px; margin: 0 0 4px; letter-spacing: -0.5px; }
    .header p { color: #0D9488; font-size: 14px; margin: 0; }
    .badge { display: inline-block; background: #0D9488; color: #fff; border-radius: 99px; padding: 4px 16px; font-size: 12px; font-weight: 600; margin-top: 12px; }
    .content { padding: 32px 40px; }
    .section-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #0D9488; margin: 24px 0 12px; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 8px; }
    .info-item { background: #f1f5f9; border-radius: 8px; padding: 12px 16px; }
    .info-label { font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .info-value { font-size: 15px; color: #0A1628; font-weight: 600; }
    .message-box { background: #f8fafc; border-left: 4px solid #0D9488; border-radius: 0 8px 8px 0; padding: 16px 20px; margin-top: 12px; font-size: 14px; line-height: 1.6; color: #334155; }
    .footer { background: #f1f5f9; padding: 20px 40px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
    .footer strong { color: #0A1628; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔬 Nueva Solicitud de Compra</h1>
      <p>Sistema de ventas LAVSO</p>
      <span class="badge">${data.productCategory}</span>
    </div>
    <div class="content">
      <p style="font-size: 15px; color: #475569; margin-top: 0;">Se ha recibido una nueva solicitud de compra a través del sitio web.</p>

      <div class="section-title">Producto Solicitado</div>
      <div class="info-grid">
        <div class="info-item" style="grid-column: 1/-1;">
          <div class="info-label">Nombre del producto</div>
          <div class="info-value">${data.productName}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Categoría</div>
          <div class="info-value">${data.productCategory}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Cantidad solicitada</div>
          <div class="info-value">${data.quantity} unidad(es)</div>
        </div>
      </div>

      <div class="section-title">Datos del Solicitante</div>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">Nombre completo</div>
          <div class="info-value">${data.fullName}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Empresa / Institución</div>
          <div class="info-value">${data.company}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Correo electrónico</div>
          <div class="info-value"><a href="mailto:${data.email}" style="color: #0D9488;">${data.email}</a></div>
        </div>
        <div class="info-item">
          <div class="info-label">Teléfono</div>
          <div class="info-value"><a href="tel:${data.phone}" style="color: #0D9488;">${data.phone}</a></div>
        </div>
      </div>

      ${
        data.message
          ? `
      <div class="section-title">Mensaje Adicional</div>
      <div class="message-box">${data.message}</div>
      `
          : ""
      }
    </div>
    <div class="footer">
      <strong>LAVSO</strong> — Soluciones integrales para laboratorio<br>
      Retorno de Framboyán 33, Morelia, Michoacán · <a href="tel:+524433205576" style="color: #0D9488;">+52 443 320 5576</a>
    </div>
  </div>
</body>
</html>
`;

  await transporter.sendMail({
    from: `"LAVSO Web" <${process.env.SMTP_USER}>`,
    to: recipientEmail,
    replyTo: data.email,
    subject: `🔬 Nueva solicitud: ${data.productName} — ${data.fullName}`,
    html: htmlContent,
    text: `Nueva solicitud de compra\n\nProducto: ${data.productName}\nCategoría: ${data.productCategory}\nCantidad: ${data.quantity}\n\nSolicitante: ${data.fullName}\nEmpresa: ${data.company}\nEmail: ${data.email}\nTeléfono: ${data.phone}\n${data.message ? `\nMensaje: ${data.message}` : ""}`,
  });
}
