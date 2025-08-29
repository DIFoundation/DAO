import CustomImage from "./image";

export default function HeroSection2() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
         
          <p className="mt-4 text-lg">
            Built to seamlessly improve trustless interactions across the ecosystem.
          </p>
          <div className="flex space-x-4 ">
            <button className="mt-6 px-6 py-3 cursor-pointer bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-800 transition">
              Get Started
            </button>
          
          </div>
        </div>
        <CustomImage width1={400} height1={300} width2={400} height2={300} />
      </div>
    </div>
  );
}
