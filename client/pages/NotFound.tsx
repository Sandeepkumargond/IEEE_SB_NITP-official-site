import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ieee-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-ieee-primary mb-4">404</h1>
        <p className="text-2xl text-ieee-blue mb-8">Oops! Page not found</p>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. This might be a placeholder page that hasn't been built yet.
        </p>
        <a 
          href="/" 
          className="inline-block bg-ieee-primary text-white px-8 py-3 rounded-[15px] font-semibold hover:bg-ieee-primary/90 transition-colors shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
        >
          Return to Home
        </a>
        <p className="text-sm text-gray-500 mt-6">
          Continue prompting to fill in this page contents if you want it built!
        </p>
      </div>
    </div>
  );
};

export default NotFound;
