import React from "react";
import Image from "next/image";

const FlutterInfo = () => {
    return (
        <div className="w-full mx-4 sm:mx-20 rounded-lg shadow-md flex flex-col sm:flex-row items-center z-50"> {/* Flex для выравнивания на мобильных и десктопных экранах */}
            <div className="flex-1 text-center sm:text-left sm:px-20 mb-8 sm:mb-0"> {/* Текстовая часть с отступами */}
                <h2 className="text-4xl sm:text-6xl font-bold mb-4">Что такое Flutter?</h2>
                <p className="text-xl text-white-700 mb-4">
                    Flutter — это технология кроссплатформенной разработки приложений. Разработана и поддерживается Google и постоянно обновляется. Flutter позволяет писать приложение сразу для двух ОС, используя один код. Для пользователей приложение на Flutter не отличается от нативного. А для бизнеса – плюсов много.
                </p>
                <p className="text-xl text-white-700">
                    На Flutter уже работают Alibaba, Philips Hue, Hamilton, Tencent, Grab, Groupon, ГК «Дикси», «Яндекс.Драйв» и другие крупные мировые и российские компании
                </p>
            </div>
            <Image
                src="/flutter_icon.png" // Путь к вашему SVG изображению
                alt="Flutter Logo"
                className="w-3/4 sm:w-1/3 h-auto object-contain"
                width={1000}
                height={1000}
            /> 
        </div>
    );
};

export default FlutterInfo;
