
import CustomImage from "./image";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-[50%]">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-purple-700">DIfoundation</span> DAO
        </h1>
        <p className="mt-4 text-lg">
          A decentralized lending and stacking platform.
        </p>
        <div className="flex space-x-4 ">
          <button className="mt-6 px-6 py-3 cursor-pointer bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-800 transition">
            Get Started
          </button>
          <button className="mt-6 px-6 py-3 cursor-pointer bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-800 transition">
            Learn More
          </button>
        </div>
      </div>
      <CustomImage width1={400} height1={300} width2={400} height2={300} />
    </section>
  );
}
