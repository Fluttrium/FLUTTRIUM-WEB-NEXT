// components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-black text-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 z-50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl font-bold text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Есть вопросы? Напишите нам!</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Имя <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-600 rounded-lg w-full p-2 bg-black text-white"
              placeholder="Поле обязательно для заполнения"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="company">Компания <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="company"
              name="company"
              className="border border-gray-600 rounded-lg w-full p-2 bg-black text-white"
              placeholder="Поле обязательно для заполнения"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-600 rounded-lg w-full p-2 bg-black text-white"
              placeholder="Поле обязательно для заполнения"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="phone">+7 <span className="text-red-500">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border border-gray-600 rounded-lg w-full p-2 bg-black text-white"
              placeholder="Поле обязательно для заполнения"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="source">Как вы о нас узнали <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="source"
              name="source"
              className="border border-gray-600 rounded-lg w-full p-2 bg-black text-white"
              placeholder="Поле обязательно для заполнения"
              required
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">
            Запросить расчет
          </button>
          <p className="text-sm text-gray-400 mt-4">
            Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Modal;
