"use client";

import React from "react";

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
    { title: "Оборудование", image: <img src="" alt="Equipment" /> },
    { title: "Электроника", image: <img src="" alt="Electronics" /> },
    { title: "Автомобильная промышленность", image: <img src="" alt="Automotive" /> },
    { title: "Мода", image: <img src="" alt="Fashion" /> },
    { title: "Ювелирные изделия", image: <img src="" alt="Jewelry" /> },
    { title: "Мебель", image: <img src="" alt="Equipment" /> },
    { title: "Здоровье и красотв", image: <img src="" alt="Electronics" /> },
    { title: "Разработка ПО", image: <img src="" alt="Automotive" /> },
    { title: "Ритейл", image: <img src="" alt="Fashion" /> },
    { title: "FMCG", image: <img src="" alt="Jewelry" /> },
    { title: "Искусство", image: <img src="" alt="Fashion" /> },
    { title: "Хоби", image: <img src="" alt="Jewelry" /> },
    // Добавьте другие направления по мере необходимости...
  ];
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold mb-20">Отраслевые решения</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-20">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md flex flex-col items-center justify-center w-24 h-24 hover:bg-gray-200 transition mb-20"
          >
            {industry.image && (
              <div className="flex items-center justify-center mb-1">{industry.image}</div>
            )}
            <p className="text-xs text-center">{industry.title}</p>
          </div>
        ))}
      </div>
    </div>
  );  
}
