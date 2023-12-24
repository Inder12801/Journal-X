import Image from "next/image";
import { Lato } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin-ext"],
});
export default function Home() {
  return (
    <main className={"w-full  " + " " + lato.className}>
      <div className="hero-section w-full  mr-auto ml-auto h-[100vh] relative bg-hero-image flex-col items-center justify-center overflow-hidden">
        {/* Hero content */}
        <div className="hero-content pt-40 flex-col items-center justify-center  max-w-[90%] m-auto relative pl-6  h-[80%] transition-transform transform-gpu ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl lg:w-[70%] text-white font-bold leading-tight mb-4 ">
            Explore the latest articles and insights.
          </h1>
          <p className="text-left text-lg md:text-xl lg:text-xl text-white lg:w-[70%]">
            Embark on a Journey of Discovery. Uncover Stories, Thoughts, and
            Expertise on a Myriad of Topics. <br />
            Our Writers Share Insights and Perspectives that Ignite Curiosity.
          </p>
          <button
            className={
              "btn bg-transparent text-white hover:bg-black hover:text-white hover:border-black text-xl rounded-none mt-4" +
              " " +
              lato.className
            }
          >
            Explore More
          </button>
        </div>
      </div>
    </main>
  );
}
