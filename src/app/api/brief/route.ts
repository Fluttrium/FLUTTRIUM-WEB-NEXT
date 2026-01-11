import React from "react";
import { Resend } from "resend";
import { EmailTemplateBrief } from "@/components/emailtempbrief";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { task, name, company, email, phone, source, nda, description } =
      formData;

    if (!name || !email || !phone || !description) {
      return new Response(
        JSON.stringify({ error: "Все поля обязательны для заполнения" }),
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Бриф с сайта <welcom@fluttrium.com>",
      to: ["fluttrium@gmail.com"],
      subject: "Новая заявка с сайта",
      react: React.createElement(EmailTemplateBrief, {
        form: { task, name, company, email, phone, source, nda, description },
      }),
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(
      JSON.stringify({ message: "Email успешно отправлен" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Ошибка сервера:", error);

    return new Response(
      JSON.stringify({
        error: "Внутренняя ошибка сервера",
        details: (error as Error).message,
      }),
      { status: 500 },
    );
  }
}
