import React from "react";

const NextInfo = () => {
    return (
        <div className="w-3/3 mx-20  rounded-lg shadow-md flex items-center"> {/* Flex для выравнивания */}
            <div className="flex-1"> {/* Текстовая часть */}
                <h2 className="text-6xl font-bold mb-8">В каких ситуациях пригодится сайт на
                фреймворке Next?</h2>
                <p className="text-2xl text-white-700 mb-4">
                Создание сайтов на Next позволяет заказчику получить современный комфортный в использовании и управлении веб-ресурс, где есть все необходимое для достижения поставленных бизнес-целей. Это универсальный фреймворк, на основе которого разработчики «Веб Фокус» способны создать как онлайн-магазин под любой ассортимент, так и блог, форум или тематический портал
                </p>
            </div>
            <img
                src="/projects/knifes.png" // Путь к вашему SVG изображению
                alt="Flutter Logo"
                className="ml-6 w-1/3 h-auto object-contain" // Установлено на 1/3 ширины
            /> 
        </div>
    );
};

export default NextInfo;
