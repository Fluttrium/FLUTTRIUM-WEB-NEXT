import Image from 'next/image';
import Link from 'next/link';

const BookDemo = () => {
  return (
    <div className="mt-12 p-8 bg-transparent rounded-3xl shadow-lg">
      <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center text-white">Забронировать демо</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-8 md:mb-0 text-center">
          <p className="text-2xl md:text-4xl mb-4 text-white"> {/* Уменьшен отступ между текстом и кнопкой */}
            Закажите демо, и менеджер Flutter продемонстрирует вам универсальное приложение в действии
          </p>
          <div className="flex justify-center">
            <Link href="/flutter">
              <button className="flex items-center px-8 md:px-12 py-3 md:py-4 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-lg md:text-xl">
                Забронировать демо
                <svg
                  className="ml-2 w-6 h-6 md:w-8 md:h-8"
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
        <div className="w-full md:w-2/4 flex justify-center md:mt-0"> {/* Убраны отступы сверху */}
          <Image
            src="/iPhone 16 Pro.png"
            alt="Mockup телефона"
            width={1000}
            height={1000}
            className="object-contain rounded-lg shadow-lg w-full md:w-4/4"
          />
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
