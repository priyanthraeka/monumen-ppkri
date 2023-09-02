import Image from "next/image";
import React from "react";
import { FaLink, FaRegCalendarAlt } from "react-icons/fa";
import { NEWS } from "@/utils/news";
const RelatedNews = () => {
  return (
    <div className="bg-[#333] py-20">
      <div className="max-w-[1080px] text-white m-auto">
        <h1 className="text-5xl text-center font-yatra-one mb-14">
          Berita Terkait
        </h1>
        <div className="flex flex-col gap-5 font-rubik text-lg px-5">
          {NEWS.map((item, index) => (
            <div
              key={index}
              className="bg-[#111] grid grid-cols-none grid-rows-[1fr_.5fr] lg:grid-cols-[.5fr_1fr] lg:grid-rows-none lg:flex-row flex-1 justify-center items-center gap-5"
            >
              <Image
                src={item.image}
                alt=""
                width={500}
                className="h-full w-full"
              />
              <div className="flex flex-col items-start justify-start p-5">
                <p className="font-yatra-one text-xl lg:mt-3">{item.title}</p>
                <p className="text-sm text-slate-400 flex gap-2 items-center">
                  <FaRegCalendarAlt size={12} />
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>Sumber: {item.sourceName}</span>
                </p>
                <p className="text-base text-justify mt-3">
                  {item.description}
                </p>
                <a
                  href={item.source}
                  className="text-base mt-3 flex gap-2 items-center hover:text-blue-500 w-fit"
                >
                  <span>Baca selengkapnya</span>
                  <FaLink size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;
