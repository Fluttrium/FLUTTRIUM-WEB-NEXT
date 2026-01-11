const NextDevelopmentCard2 = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4 sm:p-6 my-10 sm:my-20 py-6">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-4 sm:space-y-0">
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">
            Отправьте запрос, чтобы получить индивидуальное предложение на
            разработку сайта
          </h3>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 transition duration-200 text-xs sm:text-sm rounded-full">
          Заказать
          <svg
            className="ml-2 w-6 h-6 sm:w-8 sm:h-8"
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
  );
};

export default NextDevelopmentCard2;
