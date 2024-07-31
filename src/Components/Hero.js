import React from "react";

export default function Hero() {
  return (
    <>
      <div className="bg-[#11071F]">
        <div className="w-[90%] m-auto flex flex-col text-white py-10">
          <div className="pl-48">
            Hello! I Am <span className="text-[#7127BA]">Syed Muhtasham</span>
          </div>
          <div className="flex py-4">
            <div className="">
              <img className="w-[230px]" src="Me.svg" alt="" />{" "}
            </div>
            <div className="flex flex-col w-[400px] py-4 px-5">
              <span className="">A Developer who</span>
              <span className="text-5xl">
                Judges a book by its{" "}
                <span className="text-[#7127BA]">cover</span>...
              </span>
              <span className="text-sm py-2">
                Because if the cover does not impress you what else can?
              </span>
            </div>
          </div>

          <div className="flex">
            <div>
              <p className="text-5xl">I'm a Software Engineer.|</p>
              <p className="py-2">
                Currently, I'm a Software Engineer at{" "}
                <span className="text-blue-700">Coderarcle</span>
              </p>
              <div className="w-[600px]">
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
