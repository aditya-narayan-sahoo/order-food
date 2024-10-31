const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center p-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          className="w-64 p-4 m-4 bg-white rounded-lg shadow-md overflow-hidden relative animate-pulse"
          key={index}
        >
          <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
          <div className="bg-gray-300 rounded-md mt-2 h-5 w-4/5 mb-2"></div>
          <div className="bg-gray-300 rounded-md mt-2 h-4 w-3/5 mb-2"></div>
          <div className="bg-gray-300 rounded-md mt-2 h-4 w-4/5 mb-1"></div>
          <div className="bg-gray-300 rounded-md mt-2 h-4 w-5/6 mb-1"></div>
          <div className="bg-gray-300 rounded-md mt-2 h-4"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
