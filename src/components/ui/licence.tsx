import Image from 'next/image';
import Link from 'next/link';

const Licence = () => {
  return (
    <div className="mt-12 p-8 bg-transparent rounded-3xl shadow-lg">
      <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center text-white">Развитие без ограничений</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-8 md:mb-0 text-center">
          <p className="text-2xl md:text-4xl mb-6 text-white">
            Архитектура универсального приложения позволяет масштабировать каждый его компонент горизонтально и вертикально
          </p>
          <div className="flex justify-center">
          </div>
        </div>
        <div className="w-3/4 md:w-2/4 flex justify-center">
          <Image
            src="/logomock/Peeling Off Sticker.png"
            alt="Mockup телефона"
            width={1000}
            height={1000}
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Licence;
