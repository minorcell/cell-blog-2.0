import request from "@/app/lib/api/request";
import { UserLogin } from "@/app/lib/type/type";

export async function loginServer(userLogin: UserLogin) {
  return request.post("/api/user/login", userLogin);
}
