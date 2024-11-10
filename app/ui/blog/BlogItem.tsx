import Image from "next/image";
import { formatTimestamp } from "@/app/utils/tool";
import { BlogType } from "@/app/lib/type/type";
import { Eye } from "lucide-react";

export default function BlogItem({ blog }: Readonly<{ blog: BlogType }>) {
  return (
    <div className="duration-500 w-3/5 flex mb-8 rounded-2xl hover:shadow-xl cursor-pointer">
      <Image
        src={blog.cover}
        width={100}
        height={100}
        alt={blog.title}
        className="duration-500 w-60 h-60 object-cover rounded-2xl"
      />
      <div className="ml-4 flex-1 flex flex-col pr-4">
        <p className="text-gray-600 text-base mb-3">
          {formatTimestamp(blog.update_time)}
        </p>
        <h2 className="max-w-xl text-2xl font-bold mb-3 truncate text-nowrap">
          {blog.title}
        </h2>
        <p className="text-gray-600 text-base mb-5 h-20 overflow-hidden text-ellipsis">
          {blog.intro}
        </p>
        <hr />
        <div className="flex justify-between items-center mt-auto flex-1">
          <p className="text-gray-600 text-base h-full flex items-end pb-1">
            <Eye className="mr-2" />
            {blog.looks}
            次浏览
          </p>
          <p className="text-gray-600 text-base h-full flex items-end">
            <span className="px-2 py-1 bg-slate-200 rounded-xl">
              {blog.type}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
