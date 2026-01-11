const NextDevelopmentCard3 = () => {
  return (
    <div className="relative max-w-4xl mx-auto my-20 py-6">
      {" "}
      {/* Ограничена максимальная ширина */}
      {/* Фон с решеткой */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 relative z-10">
        {" "}
        {/* Обеспечиваем, чтобы карточка была выше решетки */}
        <div className="flex flex-row items-center justify-center space-x-6">
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-gray-800 w-full">
              Отправьте запрос, чтобы получить индивидуальное предложение на
              разработку CRM
            </h3>
          </div>
          <button className="flex items-center px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-blue-600 text-white transition duration-200 text-sm z-30">
            Заказать
            <svg
              className="ml-2 w-10 h-10"
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
        </div>
      </div>
    </div>
  );
};

export default NextDevelopmentCard3;
