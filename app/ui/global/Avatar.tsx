import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      src="/cell.jpg"
      width={40}
      height={40}
      alt="avatar"
      className="ml-24 rounded-full hover:animate-spin"
    />
  );
}
