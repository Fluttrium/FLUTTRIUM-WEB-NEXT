import {Resend} from 'resend';
import {EmailTemplate} from "@/components/emailtemp";
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(request: Request) {
    try {
        const formData = await request.json();
        const {name, email, phone, description} = formData;


        if (!name || !email || !phone || !description) {
            return new Response(JSON.stringify({error: 'All fields are required'}), {status: 400});
        }


        const {data, error} = await resend.emails.send({
            from: 'Форма обратной связи с сайта  <welcom@fluttrium.com>',
            to: ['fluttrium@gmail.com'],
            subject: 'New Feedback Form Submission',
            react: React.createElement(EmailTemplate, {
                form: {name, email, phone, description},
            }),
        });

        if (error) {
            return new Response(JSON.stringify({error: error.message}), {status: 500});
        }

        return new Response(JSON.stringify({message: 'Email sent successfully'}), {status: 200});
    } catch (error) {
        console.error('Internal Server Error:', error);

        return new Response(
            JSON.stringify({
                error: 'Internal Server Error',
                details: (error as Error).message,
            }),
            {status: 500}
        );
    }
}

