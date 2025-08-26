'use client';
import React, {useState} from 'react';
import { useTranslations } from '@/hooks/useTranslations';

export function FeedbackForm() {
    const { messages } = useTranslations();
    const m: any = (messages as any).FlutterPage;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, email, phone, description}),
            });

            if (response.ok) {
                console.log("Форма успешно отправлена!");
                // Очищаем поля формы
                setName('');
                setEmail('');
                setPhone('');
                setDescription('');
                // Показываем уведомление об успехе
                alert(m?.feedback?.success || 'Спасибо! Ваша заявка отправлена.');
            } else {
                const errorData = await response.json();
                console.error('Ошибка отправки:', errorData);
                alert(m?.feedback?.error || 'Произошла ошибка при отправке формы. Попробуйте еще раз.');
            }
        } catch (error) {
            console.error('Ошибка сети:', error);
            alert(m?.feedback?.networkError || 'Произошла ошибка сети. Проверьте подключение к интернету.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative w-full py-8 md:py-10 px-4 md:px-8 max-w-5xl mx-auto text-center">
            {/* Main content */}
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{m?.feedback?.title}</h2>
                <p className="text-base md:text-lg mb-4 text-white">{m?.feedback?.subtitle}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder={m?.feedback?.form?.name}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                        required
                    />
                    <input
                        type="email"
                        placeholder={m?.feedback?.form?.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                        required
                    />
                    <input
                        type="tel"
                        placeholder={m?.feedback?.form?.phone}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                        required
                    />
                    <textarea
                        placeholder={m?.feedback?.form?.description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                        rows={4}
                        required
                    />
                    <button
                        type="submit"
                        className="flex items-center justify-center w-full px-8 py-2 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-sm rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? (m?.feedback?.form?.sending || 'Отправка...') : (m?.feedback?.form?.submit || 'Отправить')}
                    </button>
                </form>

                <p className="mt-4 text-sm text-white">{m?.feedback?.privacy}</p>
            </div>
        </div>
    );
}
