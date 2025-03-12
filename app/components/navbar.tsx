import React from "react";

export default function Navbar() {
  return (
    <div className="w-130 pl-10 pt-20 inset-y-0 fixed left-0 top-0 bg-gray-800 text-white p-4 rounded-2xl m-5">
      <h1 className="text-5xl font-bold">Thomas Marchand</h1>

      <h2 className="text-3xl font-medium">Developpeur JavaScript</h2>
      <p className="text-3xl font-medium">Spé. Back-end</p>

      <div className="flex flex-col mt-50">
        <a className="text-xl" href="#about">
          À propos
        </a>
        <a className="text-xl my-4" href="#xp">
          Expériences
        </a>
        <a className="text-xl" href="#project">
          Projets
        </a>
      </div>
    </div>
  );
}
