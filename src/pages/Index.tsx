
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-purple-500">
          Welcome to Our Website
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Explore our innovative solutions and meet our incredible team.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/team"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
          >
            Meet Our Team
          </Link>
          <a
            href="#"
            className="px-8 py-3 bg-transparent border border-purple-500 rounded-full text-white font-medium hover:bg-purple-500/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
