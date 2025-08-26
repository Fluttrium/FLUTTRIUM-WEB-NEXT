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

export function IndustrySolutions() {
  const industries = [
    { title: "Оборудование", image: <Image alt='tools' src='/icons/screwdriver.png' width='100' height='100'/> },
    { title: "Электроника", image: <Image alt='tools' src='/icons/circuit.png' width='100' height='100'/> },
    { title: "Автомобильная промышленность", image: <Image alt='tools' src='/icons/electric-car.png' width='100' height='100'/>},
    { title: "Мода", image: <Image alt='tools' src='/icons/fashion.png' width='100' height='100'/> },
    { title: "Ювелирные изделия", image: <Image alt='tools' src='/icons/jewelry.png' width='100' height='100'/> },
    { title: "Мебель", image: <Image alt='tools' src='/icons/furnitures.png' width='100' height='100'/> },
    { title: "Здоровье и красота", image: <Image alt='tools' src='/icons/healthcare.png' width='100' height='100'/> },
    { title: "Разработка ПО", image: <Image alt='tools' src='/icons/coding.png' width='100' height='100'/> },
    { title: "Ритейл", image: <Image alt='tools' src='/icons/store.png' width='100' height='100'/> },
    { title: "FMCG", image: <Image alt='tools' src='/icons/grocery-cart.png' width='100' height='100'/> },
    { title: "Искусство", image: <Image alt='tools' src='/icons/img.png' width='100' height='100'/> },
    { title: "Хобби", image: <Image alt='tools' src='/icons/hobbies.png' width='100' height='100'/> },
  ];

  return (
    <div className="text-center px-4">
      <h2 className="text-3xl font-semibold mb-10 md:mb-20">Отраслевые решения</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md flex flex-col items-center justify-center w-full h-30 sm:h-32 md:h-40 bg-gray-200 transition-transform duration-300 transform hover:scale-105"
          >
            {industry.image && (
              <div className="flex items-center justify-center object-cover mb-2">{industry.image}</div>
            )}
            <p className="text-xs text-center text-black">{industry.title}</p>
          </div>
        ))}
      </div>
    </div>
  );  
}
