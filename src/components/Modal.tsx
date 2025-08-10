// components/Modal.tsx
import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    // Блокировка скролла при открытии модалки
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center">
            <div className="relative bg-black text-white rounded-2xl p-6 w-10/12 md:w-2/5 lg:w-1/3 border-2 border-white max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-3xl font-bold text-gray-400 hover:text-white focus:outline-none transition-colors duration-200"
                >
                    &times;
                </button>
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
                    Есть вопросы? Напишите нам!
                </h2>
                <form>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium" htmlFor="name">
                            Имя <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border-2 border-gray-600 rounded-xl w-full p-3 bg-black text-white focus:border-white focus:outline-none transition-colors duration-200"
                            placeholder="Поле обязательно для заполнения"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium" htmlFor="phone">
                            Телефон <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="border-2 border-gray-600 rounded-xl w-full p-3 bg-black text-white focus:border-white focus:outline-none transition-colors duration-200"
                            placeholder="Поле обязательно для заполнения"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium" htmlFor="email">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border-2 border-gray-600 rounded-xl w-full p-3 bg-black text-white focus:border-white focus:outline-none transition-colors duration-200"
                            placeholder="Поле обязательно для заполнения"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium" htmlFor="source">
                            Как вы о нас узнали <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="source"
                            name="source"
                            className="border-2 border-gray-600 rounded-xl w-full p-3 bg-black text-white focus:border-white focus:outline-none transition-colors duration-200"
                            placeholder="Поле обязательно для заполнения"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg">
                        Запросить расчет
                    </button>
                    <p className="text-sm text-gray-400 mt-4 text-center leading-relaxed">
                        Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Modal;
