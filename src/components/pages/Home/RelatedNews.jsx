"use client";

import Image from "next/image";
import { NEWS } from "@/utils/news";
import CustomContainer from "@/components/CustomContainer/CustomContainer";
import Title from "@/components/Title";
const RelatedNews = () => {
  return (
    <CustomContainer>
      <Title>Berita Terkait</Title>
      <div className="flex flex-col gap-3 mt-10">
        {NEWS.map((item, index) => (
          <div key={index} className="bg-[#111]">
            <div className="h-full flex flex-col lg:flex-row items-center gap-2">
              <Image
                src={item.image}
                alt="Image"
                width={1280}
                height={960}
                className="min-w-[320px] lg:max-w-[320px] w-full"
              />
              <div className="flex flex-col p-5">
                <p className="font-yatra-one text-lg md:text-xl lg:text-2xl overflow-ellipsis">
                  {item.title}
                </p>
                <p className="text-base text-justify mt-3">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-fit mx-auto mt-10">
        <a
          href="/berita"
          className="bg-white border border-white text-black text-base py-3 px-6 transition-colors duration-300 hover:bg-[#111] hover:text-white"
        >
          Semua Berita
        </a>
      </div>
    </CustomContainer>
  );
};

export default RelatedNews;
