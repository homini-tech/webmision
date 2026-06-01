import { NextResponse } from "next/server";

/**
 * Endpoint de captación de leads.
 * PLACEHOLDER: integrar con el CRM / servicio de email del desarrollador
 * (p. ej. Resend, SendGrid, HubSpot, un Google Sheet, etc.).
 * Por ahora valida y registra el lead en consola del servidor.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email } = data ?? {};
    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Datos incompletos" }, { status: 400 });
    }
    // TODO: enviar a CRM / email aquí.
    console.log("[LEAD] Nueva consulta:", data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida" }, { status: 400 });
  }
}
