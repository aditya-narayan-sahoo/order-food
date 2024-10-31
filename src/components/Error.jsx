import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-6">
      <h1 className="text-5xl mb-4">Oops! {err.status}</h1>
      <p className="text-2xl mb-8">{err.statusText}</p>
      <p className="text-lg mb-4">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="inline-block py-3 px-6 bg-green-600 text-white rounded-md transition duration-300 hover:bg-green-700"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
