import React from "react";

export default function Work() {
  return (
    <>
      <div className=" bg-[#11071F] relative py-10">
        <img
          className="absolute left-[32%] top-8 w-[500px]"
          src="herogradient2.svg"
          alt=""
        />
        <div className="w-[90%] m-auto flex flex-col  text-white">
          <div>
            <p className="text-4xl">Work Experience:</p>
          </div>
          <div className="grid grid-cols-2 gap-10 py-10 z-10">
            <div className="flex px-12 gap-4 py-8 items-center rounded-3xl bg-gradient-to-tr from-[#2C1250] from-20% via-purple-900 to-[#2C1250] to-70%">
              <div>
                <img src="grid1.svg" alt="" />
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  Front-end Developer <br /> (Inturnship)
                </p>
                <span>
                  Done my 6-months Inturnship at software house.</span>
                  <span className="underline underline-offset-8 font-semibold">
                    IP Solutions LTD <span>(Oct-2023/June2024)</span>
                  </span>
              </div>
            </div>
            <div className="flex px-12 gap-4 py-8 items-center rounded-3xl bg-gradient-to-br from-[#2C1250] from-20% via-purple-900 to-[#2C1250] to-70%">
              <div>
                <img src="grid2.svg" alt="" />
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  Front-end Developer <br /> (Inturnship)
                </p>
                <span>
                  Done my 6-months Inturnship at software house.</span>
                  <span className="underline underline-offset-8 font-semibold">
                    IP Solutions LTD <span>(Oct-2023/June2024)</span>
                  </span>
              </div>
            </div>
            <div className="flex px-12 gap-4 py-8 items-center rounded-3xl bg-gradient-to-br from-[#2C1250] from-20% via-purple-900 to-[#2C1250] to-70%">
              <div>
                <img src="grid3.svg" alt="" />
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  Front-end Developer <br /> (Inturnship)
                </p>
                <span>
                  Done my 6-months Inturnship at software house.</span>
                  <span className="underline underline-offset-8 font-semibold">
                    IP Solutions LTD <span>(Oct-2023/June2024)</span>
                  </span>
              </div>
            </div>
            <div className="flex px-12 gap-4 py-8 items-center rounded-3xl bg-gradient-to-tr from-[#2C1250] from-20% via-purple-900 to-[#2C1250] to-70%">
              <div>
                <img src="grid4.svg" alt="" />
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  Front-end Developer <br /> (Inturnship)
                </p>
                <span>
                  Done my 6-months Inturnship at software house.</span>
                  <span className="underline underline-offset-8 font-semibold">
                    IP Solutions LTD <span>(Oct-2023/June2024)</span>
                  </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
