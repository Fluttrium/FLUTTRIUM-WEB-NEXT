import { Resend } from 'resend';
import { EmailTemplate } from "@/components/emailtemp";
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const formData = await request.json();
        const { name, email, phone, source } = formData;

        if (!name || !email || !phone || !source) {
            return new Response(JSON.stringify({ error: 'Все поля обязательны для заполнения' }), { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Модальная форма с сайта <welcom@fluttrium.com>',
            to: ['fluttrium@gmail.com'],
            subject: 'Новая заявка из модального окна',
            react: React.createElement(EmailTemplate, {
                form: { name, email, phone, description: `Источник: ${source}` },
            }),
        });

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }

        return new Response(JSON.stringify({ message: 'Email успешно отправлен' }), { status: 200 });
    } catch (error) {
        console.error('Ошибка сервера:', error);

        return new Response(
            JSON.stringify({
                error: 'Внутренняя ошибка сервера',
                details: (error as Error).message,
            }),
            { status: 500 }
        );
    }
}


