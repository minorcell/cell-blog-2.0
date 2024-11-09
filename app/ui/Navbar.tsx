import Links from "@/app/ui/global/Links";
import SearchInput from "@/app/ui/global/SearchInput";
import { Fingerprint } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-4/5 h-full flex items-center justify-center">
      <Links />
      <SearchInput />
      <div className="duration-500 ml-12 border w-9 h-9 p-1 flex items-center justify-center rounded-xl text-global cursor-pointer hover:bg-global hover:text-white">
        <Fingerprint className="animate-pulse" />
      </div>
    </div>
  );
};

export default Navbar;
