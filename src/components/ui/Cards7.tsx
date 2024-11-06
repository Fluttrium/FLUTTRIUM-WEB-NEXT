"use client";

import React from "react";
import Image from "next/image";

export function CardHoverEffectDemo7() {
  return (
    <>
     
      {/* Секция для отраслевых решений */}
      <div className="justify-center mt-10">
        <IndustrySolutions />
      </div>
    </>
  );
}

type ProjectItem = {
  title: string;
  image?: JSX.Element;
};

interface HoverEffectProps {
  items: ProjectItem[];
}

// Обновленный компонент для отраслевых решений с маленькими карточками
export function IndustrySolutions() {
  const industries = [
    { title: "Оборудование", image: <Image alt='tools' src='/icons/screwdriver.png' width='100' height='100'/> },
    { title: "Электроника", image: <Image alt='tools' src='/icons/circuit.png' width='100' height='100'/> },
    { title: "Автомобильная промышленность", image: <Image alt='tools' src='/icons/electric-car.png' width='100' height='100'/>},
    { title: "Мода", image: <Image alt='tools' src='/icons/fashion.png' width='100' height='100'/> },
    { title: "Ювелирные изделия", image: <Image alt='tools' src='/icons/jewelry.png' width='100' height='100'/> },
    { title: "Мебель", image: <Image alt='tools' src='/icons/furnitures.png' width='100' height='100'/> },
    { title: "Здоровье и красотв", image: <Image alt='tools' src='/icons/healthcare.png' width='100' height='100'/> },
    { title: "Разработка ПО", image: <Image alt='tools' src='/icons/coding.png' width='100' height='100'/> },
    { title: "Ритейл", image: <Image alt='tools' src='/icons/store.png' width='100' height='100'/> },
    { title: "FMCG", image: <Image alt='tools' src='/icons/grocery-cart.png' width='100' height='100'/> },
    { title: "Искусство", image: <Image alt='tools' src='/icons/img.png' width='100' height='100'/> },
    { title: "Хоби", image: <Image alt='tools' src='/icons/hobbies.png' width='100' height='100'/> },
    // Добавьте другие направления по мере необходимости...
  ];
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold mb-20">Отраслевые решения</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-20">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md flex flex-col items-center justify-center w-32 h-32 bg-gray-200 transition mb-16"
          >
            {industry.image && (
              <div className="flex items-center justify-center object-cover ">{industry.image}</div>
            )}
            <p className="text-xs text-center text-black">{industry.title}</p>
          </div>
        ))}
      </div>
    </div>
  );  
}
