const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center p-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="w-64 p-2 m-2 bg-white rounded-lg shadow-md" key={index}>
          <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
          <div className="bg-gray-300 rounded-md mt-2 h-5 w-4/5"></div>
          <div className="bg-gray-300 rounded-md mt-2 h-4 w-3/5"></div>
          <div className="bg-gray-300 rounded-md mt-2 h-4"></div>
          <div className="bg-gray-300 rounded-md mt-2 h-4"></div>
          <div className="bg-gray-300 rounded-md mt-2 h-4"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
