"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export function BriefForm() {
  const [file, setFile] = useState<File | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Brief submitted");
    // Здесь можно добавить логику для отправки данных формы на сервер
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  return (
    <div className="w-full mx-auto rounded-xl p-10 shadow-lg text-white">
      <h2 className="font-bold text-3xl text-white mb-6 tracking-wide">
        Заполните бриф
      </h2>
      <p className="text-white text-2xl mb-6">
        Оставьте заявку, либо звоните <span className="text-800">+7 (921) 011 27 94</span>
      </p>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="task" className="text-white font-semibold text-lg">
            Задача
          </Label>
          <Input id="task" placeholder="Опишите вашу задачу" type="text" className="border-none bg-gray-900 text-white placeholder-gray-500 text-lg p-4" />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="file" className="text-white font-semibold text-lg">
            Прикрепить файл
          </Label>
          <input
            type="file"
            id="file"
            className="bg-blue-700 text-white text-sm px-4 py-2 rounded"
            onChange={handleFileChange}
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="nda" className="flex items-center text-white font-semibold text-lg">
            <input type="checkbox" id="nda" className="mr-2" />
            Нужен NDA
          </Label>
        </LabelInputContainer>

        <div className="border-t border-gray-700 pt-6">
          <h3 className="text-white text-lg mb-4">Контактные данные</h3>
          <div className="grid grid-cols-2 gap-6">
            <LabelInputContainer>
              <Label htmlFor="name" className="text-white font-semibold text-lg">Имя</Label>
              <Input id="name" placeholder="Ваше имя" type="text" className="border-none bg-gray-900 text-white placeholder-gray-500 text-lg p-4" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="company" className="text-white font-semibold text-lg">Компания</Label>
              <Input id="company" placeholder="Название компании" type="text" className="border-none bg-gray-900 text-white placeholder-gray-500 text-lg p-4" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email" className="text-white font-semibold text-lg">Email</Label>
              <Input id="email" placeholder="Ваш email" type="email" className="border-none bg-gray-900 text-white placeholder-gray-500 text-lg p-4" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="phone" className="text-white font-semibold text-lg">Телефон</Label>
              <Input id="phone" placeholder="+7" type="tel" className="border-none bg-gray-900 text-white placeholder-gray-500 text-lg p-4" />
            </LabelInputContainer>
          </div>
        </div>

        <LabelInputContainer>
          <Label htmlFor="source" className="text-white font-semibold text-lg">Откуда вы узнали о нас?</Label>
          <select
            id="source"
            className="h-12 w-full rounded-md bg-gray-900 text-white px-4 text-lg"
          >
            <option>Рейтинги</option>
            <option>Рекомендации</option>
            <option>Работы</option>
            <option>СМИ</option>
            <option>Соцсети</option>
          </select>
        </LabelInputContainer>

        <button
          type="submit"
          className="bg-gradient-to-br from-blue-700 to-blue-500 text-white w-full rounded-lg h-12 font-semibold text-lg shadow-md hover:shadow-lg transition duration-300"
        >
          Отправить бриф
        </button>

        <p className="text-gray-400 text-sm mt-6">
          Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.
        </p>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
