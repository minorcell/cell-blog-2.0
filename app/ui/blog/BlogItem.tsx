import Image from "next/image";
import { formatTimestamp } from "@/app/utils/tool";
import { BlogType } from "@/app/lib/type/type";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function BlogItem({ blog }: Readonly<{ blog: BlogType }>) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${blog.id}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      className="duration-500 w-full flex mb-8 rounded-2xl shadow-box-insert shadow-blog-card cursor-pointer bg-white"
    >
      <Image
        src={blog.cover}
        width={100}
        height={100}
        alt={blog.title}
        className="duration-500 w-96 h-60 object-cover rounded-l-2xl border-none rounded-r-none m-0"
      />
      <div className="ml-4 flex-1 flex flex-col pr-4">
        <span className="text-gray-600 text-base mb-2 mt-1">
          {formatTimestamp(blog.update_time)}
        </span>
        <h2 className="max-w-xl text-2xl font-bold mb-3 truncate text-nowrap border-none">
          {blog.title}
        </h2>
        <p className="text-gray-600 text-base mb-5 h-20 overflow-hidden text-ellipsis">
          {blog.intro}
        </p>
        <hr />
        <div className="flex justify-between items-center mt-auto flex-1">
          <div className="text-gray-600 text-base h-full flex items-center">
            <Eye className="mr-2" />
            {blog.looks}
            次浏览
          </div>
          <div className="text-gray-600 text-base h-full flex items-center">
            <span className="duration-500 px-3 py-1 rounded-xl bg-global text-white">
              {blog.type}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
