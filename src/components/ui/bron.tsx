import Image from 'next/image';
import Link from 'next/link';

const BookDemo = () => {
  return (
    <div className="mt-12 p-8 bg-transparent rounded-3xl shadow-lg">
      <h2 className="text-6xl font-bold mb-8 text-center text-white">Забронировать демо</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex-1 mb-8 md:mb-0 ">
          <p className="text-4xl mb-6 text-white text-center md:text-left">
            Закажите демо, и менеджер Flutter продемонстрирует вам универсальное приложение в действии.
          </p>
          <div className="flex justify-center">
            <Link href="/flutter">
              <button className="flex items-center px-12 py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-xl">
                Обсудить проект
                <svg
                  className="ml-2 w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/iPhone 16 Pro.png" // Замените на путь к вашему изображению
            alt="Mockup телефона"
            width={800} // Ширина изображения
            height={800} // Высота изображения
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
