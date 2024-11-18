import * as React from 'react';

interface EmailTemplateProps {
    form: { name: string; email: string; phone: string; description: string };
}


export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({form}) => (
    <div>
        <h1>{form.name}!</h1>
        <h1>{form.email}</h1>
        <h1>{form.phone}</h1>
        <p>{form.description}</p>
    </div>
);