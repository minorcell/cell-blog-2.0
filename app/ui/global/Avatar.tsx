import Image from "next/image";
import Link from "next/link";
export default function Avatar() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center rounded-full shadow-slate-100"
    >
      <Image
        src="/cell.jpg"
        width={125}
        height={125}
        alt="avatar"
        className="rounded-full hover:animate-spin cursor-pointer"
      />
    </Link>
  );
}
