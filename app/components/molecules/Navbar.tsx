"use client";

import { useEffect, useMemo, useState } from "react";

import IconBarsArrowUp from "@/app/components/atoms/icons/IconBarsArrowUp";
import IconBarsArrowDown from "@/app/components/atoms/icons/IconBarsArrowDown";
import AnchorNavigation from "@/app/components/molecules/AnchorNavigation";
import HeaderNavbar from "@/app/components/molecules/HeaderNavbar";
import IconsNavbar from "@/app/components/molecules/IconsNavbar";

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      setOpenNavbar(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useMemo(() => {
    if (scrollY === 0) {
      setOpenNavbar(true);
    }
  }, [scrollY]);

  const style = openNavbar
    ? "pt-10 sm:pt-5 md:flex md:flex-col md:justify-between md:py-10 md:inset-y-0 md:w-64 lg:w-80 xl:w-130"
    : "w-10 h-10";

  return (
    <div
      className={`bg-indigo-900 text-indigo-50 shadow-3xl p-4 rounded-xl m-5 fixed top-0 left-0 inset-x-0  transition-all duration-1000 ease-in-out ${style}`}
    >
      <button
        className="absolute top-0 left-0 transform translate-x-[9px] translate-y-[9px] md:hidden"
        onClick={() => setOpenNavbar(!openNavbar)}
      >
        {openNavbar ? <IconBarsArrowUp /> : <IconBarsArrowDown />}
      </button>

      {openNavbar && (
        <>
          <div className="flex justify-between xs:justify-around md:flex-col md:justify-between md:h-1/2 xl:h-7/12">
            <HeaderNavbar />

            <AnchorNavigation />
          </div>

          <IconsNavbar />
        </>
      )}
    </div>
  );
}
