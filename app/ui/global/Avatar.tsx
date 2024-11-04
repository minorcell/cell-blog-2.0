import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
  return (
    <Link href="/" className="rounded-full">
      <Image
        src="/cell.jpg"
        width={125}
        height={125}
        alt="avatar"
        className="rounded-full hover:animate-spin"
        priority
      />
    </Link>
  );
}
