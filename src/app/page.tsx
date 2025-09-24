import Image from "next/image";
import HomeHeroText from "@/components/home/HomeHeroText";
import HomeBottomText from "@/components/home/HomeBottomText";
import Video from "@/components/home/Video";

export default function Home() {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
}
