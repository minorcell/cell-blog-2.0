import request from "@/app/lib/api/request";

export function getBlogList(page: number = 1, pageSize: number = 10) {
  return request.get(`/api/blog?page=${page}&pageSize=${pageSize}`);
}
