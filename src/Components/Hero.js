import React from "react";

export default function Hero() {
  return (
    <>
      <div className="bg-[#11071F]">
        <div className="w-[90%] m-auto flex flex-col text-white py-20">
          <div className="pl-48">Hello! I Am Syed Muhtasham</div>
          <div className="flex py-8">
            <div className="">
              <img className="w-[230px]" src="Me.svg" alt="" />{" "}
            </div>
            <div className="flex flex-col w-[400px] py-4 px-5">
              <span className="">A Designer who</span>
              <span className="text-5xl">Judges a book by its cover...</span>
              <span className="text-sm py-2">Because if the cover does not impress you what else can?</span>
            </div>
          </div>

          <div>
            <p className="text-5xl">I'm a Software Engineer.|</p>
            <p className="py-2">Currently, I'm a Software Engineer at Coderarcle</p>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}
