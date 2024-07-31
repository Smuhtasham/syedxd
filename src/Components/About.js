import React from "react";

export default function About() {
  return (
    <>
      <div className=" bg-[#11071F] relative">
      <img className="w-[600px] absolute left-[54%] bottom-6 !z-[0]" src="herogradient2.svg" alt="" />
        <div className="w-[90%] m-auto flex py-10 ">
        <div className="flex flex-col text-white w-[650px] gap-2">
        <p className="pt-10 font-semibold text-3xl">About Me</p>
          <p>
            I am a passionate web developer with a strong foundation in computer
            science, holding a bachelor's degree in the field. My expertise lies
            in creating dynamic and responsive web applications using a variety
            of modern technologies.
          </p>
          <p className="pt-12 font-semibold text-lg">Skills</p>
          <p>
            <span className="font-semibold underline">HTML & CSS:</span>{" "}
            Proficient in crafting semantic, accessible, and SEO-friendly web
            pages.
          </p>
          <p>
            <span className="font-semibold underline">JavaScript:</span> Skilled
            in writing clean, efficient, and modular code for both front-end and
            back-end development.
          </p>
          <p>
            <span className="font-semibold underline">Tailwind CSS:</span>{" "}
            Experienced in utilizing Tailwind for rapid UI development and
            custom styling.
          </p>
          <p>
            <span className="font-semibold underline">React:</span> Adept at
            building interactive and stateful user interfaces with React,
            including component-based architecture and state management.
          </p>
        </div>
        <div className="z-10">
          <img className="pl-28 pt-2 " src="profile.png" alt="" />
        </div>
      </div>
      </div>
    </>
  );
}
