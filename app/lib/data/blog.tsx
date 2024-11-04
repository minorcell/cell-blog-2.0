import request from "@/app/lib/api/request";

export function getBlogType() {
  return request("api/blog/type");
}
