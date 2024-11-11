"use client";

import useStore from "@/app/store/useStore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { loginServer } from "@/app/lib/data/user";

interface LoginRegisterFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

const LoginRegisterForm: React.FC<LoginRegisterFormProps> = ({ setIsOpen }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const setUser = useStore((state) => state.setUser);
  const setGlobalIsLogin = useStore((state) => state.setGlobalIsLogin);
  const globalIsLogin = useStore((state) => state.globalIsLogin);

  useEffect(() => {
    if (globalIsLogin) {
      setIsOpen(false);
    }
  }, [globalIsLogin]);

  const handleToggle = () => setIsLogin(!isLogin);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleClick = (event: React.FormEvent) => {
    event.preventDefault();
    if (isLogin) login();
  };

  async function login() {
    try {
      const { name, password } = userInfo;
      const response = await loginServer({ name, password });
      if (response.data) {
        setUser(response.data);
        setGlobalIsLogin(true);
        toast.success("🎉登录成功~", {
          icon: false,
          position: "top-center",
          autoClose: 4000,
          pauseOnHover: true,
          theme: "colored",
        });
        setIsOpen(false);
      } else {
        toast.error("😢登录失败，请检查用户名和密码~", {
          icon: false,
          position: "top-center",
          autoClose: 4000,
          pauseOnHover: true,
          theme: "colored",
        });
      }
    } catch (error) {
      setGlobalIsLogin(false);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-[35vw] bg-white rounded-xl p-8 pt-4">
        <h2 className="text-2xl font-semibold text-center mb-6 text-global">
          {isLogin ? "登录" : "注册"}
        </h2>

        <form onSubmit={handleClick}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              <span className="text-global inline-block mr-1">*</span>用户名
            </label>
            <input
              required
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
              type="text"
              id="username"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-xl focus:outline-none"
              placeholder="请输入用户名"
            />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700">
              <span className="text-global inline-block mr-1">*</span>密码
            </label>
            <input
              required
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-xl focus:outline-none"
              placeholder="请输入密码"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-10 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {!isLogin && (
            <div className="mb-4 relative">
              <label htmlFor="confirmPassword" className="block text-gray-700">
                <span className="text-global inline-block mr-1">*</span>确认密码
              </label>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                value={userInfo.confirmPassword}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, confirmPassword: e.target.value })
                }
                id="confirmPassword"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-xl focus:outline-none"
                placeholder="请确认密码"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-2 top-10 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-global text-white font-semibold rounded-xl"
          >
            {isLogin ? "登录" : "注册"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            {isLogin ? "还没有账号？" : "已有账号？"}
            <button
              onClick={handleToggle}
              className="text-global hover:underline ml-2"
            >
              {isLogin ? "注册" : "登录"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
