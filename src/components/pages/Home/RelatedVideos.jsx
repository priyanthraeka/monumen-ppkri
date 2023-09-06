import CustomContainer from "@/components/CustomContainer/CustomContainer";
import Title from "@/components/Title";
import { VIDEOS } from "@/utils/videos";

const RelatedVideos = () => {
  return (
    <CustomContainer>
      <Title>Video Terkait</Title>
      <div className="flex flex-row justify-center items-start flex-wrap gap-3 font-rubik text-lg mt-10">
        {VIDEOS.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] flex flex-col w-[480px] items-start justify-center p-5"
          >
            <div className="aspect-video w-full">
              <iframe
                src={item.source}
                title={item.title}
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="font-yatra-one text-xl mt-3">{item.title}</p>
            <div className="text-sm text-slate-400">
              <div className="flex flex-col mt-3">
                <span>Sumber: {item.sourceName}</span>
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
          Semua Video
        </a>
      </div>
    </CustomContainer>
  );
};

export default RelatedVideos;
