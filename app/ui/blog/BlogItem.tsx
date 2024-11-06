import Image from "next/image";
import { formatTimestamp } from "@/app/utils/tool";
import { BlogType } from "@/app/lib/type/type";

export default function BlogItem({ blog }: Readonly<{ blog: BlogType }>) {
  return (
    <div className="cursor-pointer overflow-hidden will-change-auto duration-500 flex flex-col w-[24%] h-96 items-center justify-between border rounded-xl mb-8 hover:rounded-none hover:shadow-2xl">
      <div className="h-3/5 w-full bg-white relative border-b">
        <Image
          src={`http:8.137.124.251:4399${blog.cover}`}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-2/5 w-full flex flex-col items-center justify-between px-4">
        <div className="h-1/3 flex justify-start items-center text-2xl font-bold text-center w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {blog.title.length > 15
            ? blog.title.substring(0, 15) + ".."
            : blog.title}
        </div>
        <div className="text-gray-300  h-2/3 flex flex-col items-center justify-evenly text-base w-full">
          <p className="w-full h-14 text-xl overflow-hidden text-ellipsis whitespace-wrap line-clamp-2">
            {blog.description}
          </p>
          <div className="w-full flex-1 flex items-center justify-between">
            {/*  类型  */}
            <div className="w-[35%] flex items-center bg-white rounded-full pl-2 text-black overflow-x-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="mr-1"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M10.537 2.164a3 3 0 0 1 2.244.727l.15.14l7.822 7.823a3 3 0 0 1 .135 4.098l-.135.144l-5.657 5.657a3 3 0 0 1-4.098.135l-.144-.135L3.03 12.93a3 3 0 0 1-.878-2.188l.011-.205l.472-5.185a3 3 0 0 1 2.537-2.695l.179-.021zM8.024 8.025a2 2 0 1 0 2.829 2.829a2 2 0 0 0-2.829-2.829"
                  />
                </g>
              </svg>
              {blog.type}
            </div>
            {/*  浏览量  */}
            <div className="w-[30%] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="mr-2"
              >
                <path
                  fill="currentColor"
                  d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                />
              </svg>
              {blog.view}
            </div>
            {/*  发布时间 */}
            <div className="w-[30%] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="mr-2"
              >
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"
                  />
                </g>
              </svg>
              {formatTimestamp(blog.create_date)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
