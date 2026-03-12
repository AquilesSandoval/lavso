import { NextRequest, NextResponse } from "next/server";
import { sendPurchaseRequestEmail } from "@/lib/email";
import { z } from "zod";

const schema = z.object({
  productId: z.string().min(1),
  productName: z.string().min(1),
  productCategory: z.string().min(1),
  productBrand: z.string().optional(),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().min(2),
  quantity: z.coerce.number().min(1),
  message: z.string().optional(),
  variantSku: z.string().nullable().optional(),
  variantAttributes: z
    .array(z.object({ name: z.string(), value: z.string() }))
    .optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    await sendPurchaseRequestEmail(data);

    return NextResponse.json(
      { success: true, message: "Solicitud enviada correctamente" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Datos inválidos", errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
