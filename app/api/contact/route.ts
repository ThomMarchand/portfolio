import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitMap = new Map<string, number>();
const COOLDOWN_MS = 60 * 60 * 1000;

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const lastSent = rateLimitMap.get(ip);
    if (lastSent && Date.now() - lastSent < COOLDOWN_MS) {
      const remainingMin = Math.ceil((COOLDOWN_MS - (Date.now() - lastSent)) / 60000);
      return NextResponse.json(
        { message: `Veuillez attendre ${remainingMin} minute(s) avant d'envoyer un nouveau message` },
        { status: 429 }
      );
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `Nouveau message de ${name}`,
      text: `De: ${name} (${email})\n\n${message}`,
    });

    rateLimitMap.set(ip, Date.now());

    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l’envoi de l’email", error);
    return NextResponse.json(
      { message: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
