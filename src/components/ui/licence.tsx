import Image from 'next/image';
import './Particles.css'; // Импортируйте CSS

const Licence = () => {
  return (
    <div className="relative mt-12 p-8 bg-transparent rounded-3xl shadow-lg w-full">
      {/* Эффект частиц */}
      <div className="particles"></div>

      <div className="flex flex-col md:flex-row items-center justify-center relative z-10">
        <div className="flex-1 max-w-md w-full md:w-2/3 mr-0 md:mr-8 mb-8 md:mb-0">
          <h3 className="text-4xl font-semibold text-white mb-4">Лицензирование</h3>
          <p className="text-lg mb-6 text-white">
            Вместе с приложением передаем лицензию на его использование. Она предполагает, что кодом можно бесконечно пользоваться и улучшать.
          </p>
          <h3 className="text-4xl font-semibold text-white mb-4">Развитие без ограничений</h3>
          <p className="text-lg mb-6 text-white">
            Архитектура универсального приложения позволяет масштабировать каждый его компонент горизонтально и вертикально.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <Image
            src="/projects/case5.png" // Замените на путь к вашему изображению
            alt="Mockup телефона"
            width={800} // Ширина изображения
            height={800} // Высота изображения
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Дополнительная кнопка или действие может быть здесь */}
      <div className="flex justify-center mt-12">
        {/* Вы можете добавить кнопку или другой контент */}
      </div>
    </div>
  );
};

export default Licence;
