import Image from "next/image";
import { formatTimestamp } from "@/app/utils/tool";
import { BlogType } from "@/app/lib/type/type";

export default function BlogItem({ blog }: Readonly<{ blog: BlogType }>) {
  return (
    <div className="cursor-pointer overflow-hidden will-change-auto duration-500 flex flex-col w-[48%] h-96 items-center justify-between border rounded-xl mb-8 hover:shadow-2xl">
      <div className="h-3/5 w-full bg-white relative border-b">
        <Image
          src={blog.cover}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-2/5 w-full flex flex-col items-center justify-between px-4">
        <div className="h-1/3 flex justify-start items-center text-xl font-bold text-center w-full overflow-hidden text-ellipsis whitespace-nowrap  gradient-text">
          {blog.title.length > 20
            ? blog.title.substring(0, 20) + ".."
            : blog.title}
        </div>
        <div className="text-gray-500  h-2/3 flex flex-col items-center justify-evenly text-base w-full">
          <p className="w-full h-12 text-base overflow-hidden text-ellipsis whitespace-wrap line-clamp-2">
            {blog.intro}
          </p>
          <div className="w-full flex-1 flex items-center justify-between">
            {/*  类型  */}
            <div className="w-[35%] flex items-center bg-blue-100 rounded-xl pl-2 py-1 text-global overflow-x-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
                className="mr-4 text-global"
              >
                <path
                  fill="currentColor"
                  d="m21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4a2 2 0 0 0-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m11.77 8.27L13 19.54l-4.27-4.27A2.52 2.52 0 0 1 8 13.5a2.5 2.5 0 0 1 2.5-2.5c.69 0 1.32.28 1.77.74l.73.72l.73-.73c.45-.45 1.08-.73 1.77-.73a2.5 2.5 0 0 1 2.5 2.5c0 .69-.28 1.32-.73 1.77"
                />
              </svg>
              {blog.type}
            </div>
            {/*  浏览量  */}
            <div className="w-[30%] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="mr-4 text-global"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
                  <path d="M11.669 17.994Q6.489 17.814 3 12q3.6-6 9-6t9 6m-2 10.5a4.75 4.75 0 0 1 3.5-3.5a4.75 4.75 0 0 1-3.5-3.5a4.75 4.75 0 0 1-3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
                </g>
              </svg>
              {blog.looks}
            </div>
            {/*  发布时间 */}
            <div className="w-[30%] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
                className="mr-4 text-global"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M20.982 11.436a9 9 0 1 0-9.966 9.51" />
                  <path d="m17.8 20.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411l-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352l1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193l2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707l.414 2.41a.39.39 0 0 1-.567.411zM12 7v5l1 1" />
                </g>
              </svg>
              {formatTimestamp(blog.update_time)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
