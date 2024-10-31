import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-5xl mb-4">
        Oops! {err.status}, Page {err.statusText}
      </h1>
      <p className="text-2xl mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="inline-block py-4 px-8 bg-green-600 text-white rounded-md transition duration-300 hover:bg-green-700"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
