import Image from "next/image";
import { Lato } from "next/font/google";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin-ext"],
});
export default function Home() {
  return (
    <main className={"w-full bg-slate-500" + " " + lato.className}>
      <div className="hero-section w-full mr-auto ml-auto h-[100vh] relative bg-hero-image flex-col items-center">
        <div className="navbar bg-transparent m-auto text-white max-w-[90%] relative pt-4">
          <div className="flex-1 ">
            <Link className="btn btn-ghost text-2xl " href={"/"}>
              Journal X
            </Link>
          </div>
          <div className="flex-none">
            <div className="flex items-center gap-2">
              {/* search bar */}
              <input
                type="text"
                placeholder="Search a blog..."
                className={
                  " w-full bg-transparent border border-white p-2 outline-none focus:outline-white placeholder:text-white from-inherit cursor-pointer" +
                  " " +
                  lato.className
                }
              />
              <div className="border-2 border-solid border-white p-1 cursor-pointer">
                <CiSearch className="" fontSize={"30px"} />
              </div>
            </div>
            <div>
              {/* navigation buttons */}
              {/* auth buttons */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
