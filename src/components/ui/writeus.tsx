'use client'
import React, { useState } from "react";

export function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", { name, email, phone, description });
  };

  return (
    <div className="relative w-full py-10 px-8 max-w-5xl mx-auto text-center">

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-white">Напишите нам!</h2>
        <p className="text-lg mb-4 text-white">
          Сделаем удобный цифровой продукт для ваших клиентов вместе!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white"
            required
          />
          <input
            type="tel"
            placeholder="+7"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white"
            required
          />
          <textarea
            placeholder="Описание проекта"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white"
            rows={4}
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center w-full px-8 py-2 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-sm"
          >
            Оставить заявку
          </button>
        </form>

        <p className="mt-4 text-sm text-white">
          Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.
        </p>
      </div>
    </div>
  );
}
