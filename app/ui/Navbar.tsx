import Links from "@/app/ui/global/Links";
import SearchInput from "@/app/ui/global/SearchInput";
import Avatar from "@/app/ui/global/Avatar";

const Navbar = () => {
  return (
    <div className="w-4/5 h-full flex items-center justify-center">
      <Links />
      <SearchInput />
      <Avatar />
    </div>
  );
};

export default Navbar;
