import TypingContext from "@/app/ui/global/TypingContext";
import Recents from "@/app/ui/home/Recents";
import AboutWorkSpace from "@/app/ui/home/AboutWorkSpace";

export default function HomePage() {
  return (
    <div className="w-[100%] h-screen flex flex-col items-center justify-center animate-fadeIn">
      <TypingContext />
      <div className="w-3/5 flex items-start justify-between">
        <AboutWorkSpace />
        <div className="border-gray-600 border border-dashed h-full rounded-full animate-pulse" />
        <Recents />
      </div>
    </div>
  );
}
