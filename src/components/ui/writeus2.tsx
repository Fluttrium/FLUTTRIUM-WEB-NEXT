"use client";
import type React from "react";
import { useState } from "react";
import { useTranslations } from "use-intl";

export function FeedbackForm2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const t = useTranslations("Writeus");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, description }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setDescription("");
        setSuccess(true);
      } else {
        const errorData = await response.json();
        console.error("Ошибка отправки:", errorData);
        alert("Произошла ошибка при отправке формы. Попробуйте еще раз.");
      }
    } catch (error) {
      console.error("Ошибка сети:", error);
      alert("Произошла ошибка сети. Проверьте подключение к интернету.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full py-10 px-8 max-w-5xl mx-auto text-center">
      {/* Main content */}
      <div className="relative z-10">
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
            disabled={loading}
            className="flex items-center justify-center w-full px-8 py-2 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition-all duration-200 text-sm rounded-full disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          >
            {loading ? "Отправка..." : t("button")}
          </button>
          {success && (
            <p className="mt-4 text-green-400 font-medium text-sm">
              Форма успешно отправлена!
            </p>
          )}
        </form>

        <p className="mt-4 text-sm text-white">{t("p2")}</p>
      </div>
    </div>
  );
}
