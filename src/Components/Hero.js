import React from "react";

export default function Hero() {
  return (
    <>
      <div className="bg-[#11071F] z-10 relative overflow-hidden">
      <img className="absolute right-[1000px] !z-[0]" src="herogradient.svg" alt="" />
      <img className="w-[900px] absolute left-[1050px] bottom-1 !z-[0]" src="herogradient2.svg" alt="" />
        <div className="w-[90%] m-auto flex flex-col text-white py-10">
          <div className="pl-48">
            Hello! I Am <span className="text-[#7127BA]">Syed Muhtasham</span>
          </div>
          <div className="flex py-4 z-10">
            <div className="">
              <img className="w-[200px] pt-6" src="Me.svg" alt="" />{" "}
            </div>
            <div className="flex flex-col w-[400px] py-10 px-5">
              <span className="">A Developer who</span>
              <span className="text-5xl">
                Judges a book by its{" "}
                <span className="text-[#7127BA]">cover</span>...
              </span>
              <span className="text-[12px] py-2">
                Because if the cover does not impress you what else can?
              </span>
            </div>
          </div>

          <div className="flex z-10 pt-3">
            <div>
              <p className="text-5xl">I'm a Software Engineer.|</p>
              <p className="py-2">
                Currently, I'm a Front-end Developer at{" "}
                <span className="text-blue-600">Coderarcle.</span>
              </p>
              <div className="w-[60%]">
                <p className=" pt-6">
                  A self-taught Front-end Developer, functioning in the industry
                  for 3+ years now. I make meaningful and delightful digital
                  products that create an equilibrium between user needs and
                  business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
