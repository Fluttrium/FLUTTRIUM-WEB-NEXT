import Image from "next/image";
import Link from "next/link";

const PremiumPlan = () => {
  return (
    <div className="relative p-4 sm:p-8 flex items-center justify-center min-h-screen bg-black bg-opacity-50 overflow-hidden">
      <div className="ring-container p-1 rounded-3xl relative z-10 shadow-lg animate-float">
        <div className="content-container max-w-5xl mx-auto rounded-3xl p-4 sm:p-8 bg-white bg-opacity-90">
          <h1 className="text-3xl sm:text-5xl font-bold  mb-6 sm:mb-12 text-black">
            Премиум план разработки
          </h1>
          <h2 className="text-2xl sm:text-4xl font-semibold mb-4 sm:mb-6 text-center text-black">
            c
          </h2>
          <ul className="list-disc list-inside text-base sm:text-lg mb-4 sm:mb-6 text-gray-800">
            <li>
              Разработка сложного сайта/приложения (от 10 страниц/экранов)
            </li>
            <li>Полностью кастомизированный дизайн</li>
            <li>
              Полная оптимизация под мобильные устройства и различные платформы
            </li>
            <li>Интеграция с внешними сервисами (оплата, аналитика, CRM)</li>
            <li>Полная SEO оптимизация</li>
            <li>Техническая поддержка 6 месяцев</li>
          </ul>
          <h3 className="text-xl sm:text-3xl font-semibold text-center mb-4 sm:mb-6 text-black">
            Цена: от 300 000 рублей
          </h3>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-800 text-center">
            Мы предлагаем лучшие решения для вашего бизнеса.
          </p>
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="border border-blue-600 rounded-lg p-1 shadow-lg">
              <Image
                src="/case8.png" // Замените на путь к вашему изображению
                alt="Пример премиум дизайна"
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full sm:w-auto"
              />
            </div>
          </div>
          <div className="flex justify-center mt-6 sm:mt-8">
            <Link href="/contact">
              <button className="bg-blue-600 text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition duration-300 hover:bg-blue-700">
                Заказать
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlan;
