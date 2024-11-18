"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export function BriefForm() {
    const [file, setFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        task: "",
        name: "",
        company: "",
        email: "",
        phone: "",
        source: "",
        nda: false,
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) setFile(e.target.files[0]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/brief", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",  // Указываем, что данные отправляются в формате JSON
                },
                body: JSON.stringify({
                    task: formData.task,
                    name: formData.name,
                    company: formData.company,
                    email: formData.email,
                    phone: formData.phone,
                    source: formData.source,
                    nda: formData.nda,
                    description: formData.task,  // добавьте поле для описания задачи
                }),
            });

            if (response.ok) {
                alert("Бриф успешно отправлен!");
                setFormData({
                    task: "",
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    source: "",
                    nda: false,
                });
                setFile(null);
            } else {
                const error = await response.json();

            }
        }  finally {
            setLoading(false);
        }
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
                    <Input
                        id="task"
                        name="task"
                        placeholder="Опишите вашу задачу"
                        value={formData.task}
                        onChange={handleChange}
                        type="text"
                        className="border-none bg-gray-900 text-white placeholder-gray-500 text-lg p-4"
                        required
                    />
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
                        <input
                            type="checkbox"
                            id="nda"
                            name="nda"
                            checked={formData.nda}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Нужен NDA
                    </Label>
                </LabelInputContainer>

                <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-white text-lg mb-4">Контактные данные</h3>
                    <div className="grid grid-cols-2 gap-6">
                        <LabelInputContainer>
                            <Label htmlFor="name" className="text-white font-semibold text-lg">Имя</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Ваше имя"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                className="border-none bg-gray-900 text-white placeholder-gray-500 text-lg p-4"
                                required
                            />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="company" className="text-white font-semibold text-lg">Компания</Label>
                            <Input
                                id="company"
                                name="company"
                                placeholder="Название компании"
                                value={formData.company}
                                onChange={handleChange}
                                type="text"
                                className="border-none bg-gray-900 text-white placeholder-gray-500 text-lg p-4"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="email" className="text-white font-semibold text-lg">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Ваш email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                className="border-none bg-gray-900 text-white placeholder-gray-500 text-lg p-4"
                                required
                            />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="phone" className="text-white font-semibold text-lg">Телефон</Label>
                            <Input
                                id="phone"
                                name="phone"
                                placeholder="+7"
                                value={formData.phone}
                                onChange={handleChange}
                                type="tel"
                                className="border-none bg-gray-900 text-white placeholder-gray-500 text-lg p-4"
                            />
                        </LabelInputContainer>
                    </div>
                </div>

                <LabelInputContainer>
                    <Label htmlFor="source" className="text-white font-semibold text-lg">
                        Откуда вы узнали о нас?
                    </Label>
                    <select
                        id="source"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className="h-12 w-full rounded-md bg-gray-900 text-white px-4 text-lg"
                    >
                        <option value="">Выберите</option>
                        <option>Рейтинги</option>
                        <option>Рекомендации</option>
                        <option>Работы</option>
                        <option>СМИ</option>
                        <option>Соцсети</option>
                    </select>
                </LabelInputContainer>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-br from-blue-700 to-blue-500 text-white w-full rounded-lg h-12 font-semibold text-lg shadow-md hover:shadow-lg transition duration-300"
                >
                    {loading ? "Отправка..." : "Отправить бриф"}
                </button>

                <p className="text-gray-400 text-sm mt-6">
                    Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой
                    конфиденциальности.
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
