import request from "@/app/lib/api/request";

export function getBlogList(page: number = 1, pageSize: number = 10) {
  return request.get(
    `/api/blog?page=${page}&pageSize=${pageSize}&status=published`
  );
}

export function getBlogDetail(id: string) {
  return request.get(`/api/blog/${id}`);
}
