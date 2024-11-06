import React from "react";
import Image from "next/image";

const FlutterInfo = () => {
    return (
        <div className="w-3/3 mx-20  rounded-lg shadow-md flex items-center"> {/* Flex для выравнивания */}
            <div className="flex-1"> {/* Текстовая часть */}
                <h2 className="text-6xl font-bold mb-4">Что такое Flutter?</h2>
                <p className="text-xl text-white-700 mb-4">
                    Flutter — это технология кроссплатформенной разработки приложений. Разработана и поддерживается Google и постоянно обновляется. Flutter позволяет писать приложение сразу для двух ОС, используя один код. Для пользователей приложение на Flutter не отличается от нативного. А для бизнеса – плюсов много.
                </p>
                <p className="text-xl text-white-700">
                    На Flutter уже работают Alibaba, Philips Hue, Hamilton, Tencent, Grab, Groupon, ГК «Дикси», «Яндекс.Драйв» и другие крупные мировые и российские компании.
                </p>
            </div>
            <Image
                src="/flutter_icon.png" // Путь к вашему SVG изображению
                alt="Flutter Logo"
                className="ml-6 w-1/3 h-auto object-contain"
                width={1000}
                height={1000}// Установлено на 1/3 ширины
            /> 
        </div>
    );
};

export default FlutterInfo;
