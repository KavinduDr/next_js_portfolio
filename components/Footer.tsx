"use client";
import React, { useEffect, useRef } from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  const path = useRef<SVGPathElement>(null);
  let progress = 0;
  let x = 0.5;
  let reqId: number | null = null;
  let time = Math.PI / 2;

  useEffect(() => {
    setPath({ value: progress });
    const handleResize = () => setPath({ value: progress });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  interface SetPathProps {
    value: number;
  }

  const setPath = ({ value }: SetPathProps) => {
    const width = window.innerWidth * 0.7;
    if (path.current) {
      path.current.setAttributeNS(
        null,
        "d",
        `M 0 50 Q ${width * x} ${50 + value} ${width} 50`
      );
    }
  };

  const animateIn = () => {
    if (reqId !== null) {
      cancelAnimationFrame(reqId);
      time = Math.PI / 2;
    }
    setPath({ value: progress });
    reqId = requestAnimationFrame(animateIn);
  };

  const manageMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const movementY = (e as unknown as MouseEvent).movementY;
    const box = (e.target as HTMLElement).getBoundingClientRect();
    x = (e.clientX - box.left) / box.width;
    progress += movementY;
  };

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

  const animateOut = () => {
    let newProgress = progress * Math.sin(time);
    setPath({ value: newProgress });

    progress = lerp(progress, 0, 0.04);
    time += 0.2;

    if (Math.abs(progress) > 0.5) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      time = Math.PI / 2;
      progress = 0;
    }
  };

  const resetAnimation = () => {
    if (reqId !== null) {
      cancelAnimationFrame(reqId);
      animateOut();
    }
  };

  return (
    <footer className="w-full pb-10 px-4 md:px-8 lg:px-16 mb-[100px] md:mb-5">
      {/* Animated Line */}
      <div className="relative w-full h-[1px] mb-5 bg-transparent">
        <span
          onMouseEnter={animateIn}
          onMouseLeave={resetAnimation}
          onMouseMove={manageMouseMove}
          className="absolute top-[-20px] w-full h-10 z-[1] flex bg-transparent hover:h-[150px] hover:top-[-75px]"
        ></span>

        <svg className="absolute w-full h-[100px] top-[-50px]">
          <path ref={path} className="stroke-white fill-none stroke-[1px]"></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold max-w-[85vw] lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital presence to the next level?
        </h1>
        <p className="text-gray-400 text-sm md:text-base mt-4">
          Reach out today and let’s discuss how I can help you achieve your goals.
        </p>

        {/* Contact Button */}
        <a href="mailto:rmkavindudhananjaya@gmail.com" className="mt-6">
          <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 space-y-6 md:space-y-0 w-full">
        <p className="text-sm md:text-base text-gray-400">
          Copyright © 2024 Kavindu Dhananjaya
        </p>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-3">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-gray-600 transition-transform hover:scale-110"
              onClick={() => window.open(profile.link, "_blank")}
            >
              <img src={profile.img} alt={profile.id.toString()} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
