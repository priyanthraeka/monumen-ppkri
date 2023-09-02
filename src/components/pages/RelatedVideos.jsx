import { VIDEOS } from "@/utils/videos";

const RelatedVideos = () => {
  return (
    <div className="bg-[#222] py-20">
      <div className="max-w-[1080px] px-5 text-white m-auto">
        <h1 className="text-5xl text-center font-yatra-one mb-14">
          Video Terkait
        </h1>
        <div className="flex flex-row justify-center items-start flex-1 flex-wrap gap-3 font-rubik text-lg">
          {VIDEOS.map((item, index) => (
            <div
              key={index}
              className="bg-[#333] flex flex-col w-[500px] items-start justify-center p-5"
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
      </div>
    </div>
  );
};

export default RelatedVideos;
