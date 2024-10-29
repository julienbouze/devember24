import Challenges from "@/components/Challenges";
import DayChallenge from "@/components/DayChallenge";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start m-2 w-full h-full">
      <div className="flex flex-col w-11/12 sm:w-10/12 p-8 gap-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-end">
            <h1 className={`text-lg sm:text-xl md:text-3xl lg:text-5xl`}>Welcome to <span className="text-cyan-300">Devember'24</span></h1>
            <h2 className={`text-sm sm:text-base lg:text-lg`}>Starting <span className="text-cyan-300">November 1st, 2024</span></h2>
          </div>
        </div>
        <DayChallenge />
        <Challenges />
        <Footer />
      </div>
    </div>
  );
}
