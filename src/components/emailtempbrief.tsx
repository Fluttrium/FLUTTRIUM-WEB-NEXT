import type * as React from "react";

interface EmailTemplatePropsBrief {
  form: {
    task: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    source: string;
    nda: boolean;
    description: string;
  };
}

export const EmailTemplateBrief: React.FC<
  Readonly<EmailTemplatePropsBrief>
> = ({ form }) => (
  <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
    <h1>Новая заявка с сайта</h1>
    <p>
      <strong>Задача:</strong> {form.task}
    </p>
    <p>
      <strong>Имя:</strong> {form.name}
    </p>
    <p>
      <strong>Компания:</strong> {form.company}
    </p>
    <p>
      <strong>Email:</strong> {form.email}
    </p>
    <p>
      <strong>Телефон:</strong> {form.phone}
    </p>
    <p>
      <strong>Источник:</strong> {form.source}
    </p>
    <p>
      <strong>Нужен NDA:</strong> {form.nda ? "Да" : "Нет"}
    </p>
    <p>
      <strong>Описание задачи:</strong> {form.description}
    </p>
  </div>
);
