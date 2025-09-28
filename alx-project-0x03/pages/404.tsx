import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 mb-6">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link href="/">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
