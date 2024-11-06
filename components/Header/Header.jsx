"use client";
import React, { useEffect, useRef } from "react";

import Navbar from "../Navbar/Navbar";
import {
  Facebook,
  Instagram,
  MailCheckIcon,
  PhoneCallIcon,
  Youtube,
} from "lucide-react";
import NeuButton from "../Buttons/NeuButton";

export default function DemoHeaderOne() {
  const headerRef = useRef(null);

  useEffect(() => {
    // Verificar que el código solo se ejecute en el cliente
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (headerRef.current) {
          if (window.scrollY >= 76) {
            headerRef.current.classList.remove("h1-header-sticky-qs");
          } else {
            headerRef.current.classList.add("h1-header-sticky-qs");
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <>
      <header>
        <div
          ref={headerRef}
          className="fixed top-0 left-0 z-40 hidden w-full header-wrapper xl:block h1-header-sticky h1-header-sticky-qs"
        >
          <div className="2xl:px-[110px] px-5 mx-auto relative">
            <div className="w-full h-[45px] justify-between items-center pl-[50px] bg-black border border-[#e7e8e9] hidden h1-top-bar">
              <span className="hidden 2xl:block text-white">
                Bienvenidos a
                <span className="font-semibold text-masyp px-1">Sytency</span>
                aca hay que poner algo piola
              </span>
              <div className="2xl:w-[1021px] w-full h-full flex items-center justify-end">
                <div className="flex space-x-2.5 items-center mr-7">
                  <span>
                    <MailCheckIcon className="text-white" />
                  </span>
                  <span className="font-bold text-white">
                    Email : <u>info@sytency.com</u>
                  </span>
                </div>
                <div className="flex space-x-2.5 items-center mr-7">
                  <span className="text-white">
                    <PhoneCallIcon />
                  </span>
                  <span className="font-bold text-white">
                    Cel : (+99)999999
                  </span>
                </div>

                <ul className="flex space-x-[15px] items-center mr-[55px]">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      aria-label="facebook"
                      className="text-white opacity-50 hover:opacity-100 hover:text-masyp"
                      target="_blank"
                    >
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      aria-label="youtube"
                      className="text-white opacity-50 hover:opacity-100  hover:text-masyp"
                      target="_blank"
                    >
                      <Youtube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      aria-label="instagram"
                      className="text-white opacity-50 hover:opacity-100 hover:text-masyp"
                      target="_blank"
                    >
                      <Instagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-[95px] flex justify-between items-center px-[50px] border border-[#e7e8e9] bg-black border-t-0 relative">
              <div className="flex 2xl:space-x-[100px] xl:space-x-10 justify-between items-center w-full xl:w-auto">
                <div>
                  {/* <Link href="/" aria-label="logo">
                    <img
                      src="/assets/images/logo/logo2.png"
                      width={170}
                      height={100}
                      alt=""
                    />
                  </Link> */}
                  <h1 className="text-white">LOGO AQUÍ</h1>
                </div>
              </div>

              <Navbar />
              <div className="xl:flex hidden space-x-[30px] items-center">
                <NeuButton text="Contacto" href="#" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
