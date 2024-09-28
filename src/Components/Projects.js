import React from "react";

const Projects = () => {
  return (
    <>
      <div className="bg-[#11071F] py-10">
        <div className="w-[90%] flex m-auto relative ">
          <div className="flex flex-col w-[55%] text-[#CCD6F6] z-10">
            <div className="text-sm font-bold text-[#7127BA]">Featured Project</div>
            <div className="text-3xl font-bold">Example Project</div>
            <div className="bg-slate-500 bg-opacity-20 pt-8 pb-8 pr-8 pl-6 mt-6 rounded-lg">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </div>
          </div>
          <div className="w-[45%] z-0 pt-10"><img className="w-[500px]" src="todo.png" alt="" /></div>
        </div>
      </div>
    </>
  );
};

export default Projects;
