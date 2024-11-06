import Links from "@/app/ui/global/Links";
import NavTyping from "@/app/ui/global/NavTyping";
import Avatar from "./global/Avatar";

const Navbar = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <Avatar />
      <NavTyping />
      <Links />
    </div>
  );
};

export default Navbar;
