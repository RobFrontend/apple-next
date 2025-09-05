"use client";
import Image from "next/image";
import watchseries from "../watchseries/watchseries";
import { useEffect, useState } from "react";

function SeriesCarousel() {
  const watchArr = watchseries;
  const [isCurrentKv, setIsCurrentKv] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const slideKv = () => {
      setIsSliding(true);
      setTimeout(() => {
        setIsSliding(false);
        setIsCurrentKv((kv) => (kv + 1) % watchArr.length);
      }, 500);
    };
    const interval = setInterval(() => {
      slideKv();
    }, 5000);
    return () => clearInterval(interval);
  }, [isCurrentKv, watchArr]);

  const prevKv = (isCurrentKv - 1 + watchArr.length) % watchArr.length;
  const nextKv = (isCurrentKv + 1) % watchArr.length;

  return (
    <div className="mx-auto">
      <div
        className={
          "flex w-[300%] translate-x-[-33%] content-center justify-center transition-all duration-500"
        }
      >
        <div
          key={watchArr[prevKv].id}
          className="px-3 opacity-20 transition-all duration-500"
        >
          <Image
            src={watchArr[prevKv].assetXL}
            width={1200}
            height={800}
            alt={watchArr[prevKv].title}
            className="max-xl:hidden"
          />
          <Image
            src={watchArr[prevKv].assetXL}
            width={800}
            height={560}
            alt={watchArr[prevKv].title}
            className="max-md:hidden min-xl:hidden"
          />
          <Image
            src={watchArr[prevKv].assetSM}
            width={350}
            height={1000}
            alt={watchArr[prevKv].title}
            className="min-md:hidden"
          />
        </div>
        <div
          key={watchArr[isCurrentKv].id}
          className="px-3 transition-all duration-500"
        >
          <Image
            src={watchArr[isCurrentKv].assetXL}
            width={1200}
            height={800}
            alt={watchArr[isCurrentKv].title}
            className="max-xl:hidden"
          />
          <Image
            src={watchArr[isCurrentKv].assetXL}
            width={800}
            height={560}
            alt={watchArr[isCurrentKv].title}
            className="max-md:hidden min-xl:hidden"
          />
          <Image
            src={watchArr[isCurrentKv].assetSM}
            width={350}
            height={1000}
            alt={watchArr[isCurrentKv].title}
            className="min-md:hidden"
          />
        </div>
        <div
          key={watchArr[nextKv].id}
          className=" px-3 opacity-20 transition-all duration-500"
        >
          <Image
            src={watchArr[nextKv].assetXL}
            width={1200}
            height={800}
            alt={watchArr[nextKv].title}
            className="max-xl:hidden"
          />
          <Image
            src={watchArr[nextKv].assetXL}
            width={800}
            height={560}
            alt={watchArr[nextKv].title}
            className="max-md:hidden min-xl:hidden"
          />
          <Image
            src={watchArr[nextKv].assetSM}
            width={350}
            height={1000}
            alt={watchArr[nextKv].title}
            className="min-md:hidden"
          />
        </div>
      </div>
      <div className="p-8 flex content-center justify-center gap-6">
        {watchArr.map((w) => (
          <button
            key={w.id}
            className={
              isCurrentKv === w.id
                ? "p-1.5 rounded-[999px] bg-black transition-all duration-500"
                : "bg-black/40 p-1.5 rounded-[999px] hover:bg-black/80 cursor-pointer transition-all duration-500"
            }
            onClick={() => setIsCurrentKv(w.id)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default SeriesCarousel;
