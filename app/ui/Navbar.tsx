"use client";

import { useState } from "react";
import { Fingerprint } from "lucide-react";
import { motion } from "framer-motion";
import useStore from "@/app/store/useStore";

import Links from "@/app/ui/global/Links";
import Modal from "@/app/ui/cellComponents/Modal";
import SearchInput from "@/app/ui/global/SearchInput";
import LoginRegisterForm from "@/app/ui/global/LoginRegisterForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const globalIsLogin = useStore((state) => state.globalIsLogin);
  const clearUser = useStore((state) => state.clearUser);

  const onOpen = () => {
    if (!globalIsLogin) {
      setIsOpen(true);
    } else {
      clearUser();
    }
  };
  const onClose = () => setIsOpen(false);

  return (
    <div className="w-4/5 h-full flex items-center justify-center">
      <Links />
      <SearchInput />
      <motion.div
        whileHover={{ rotate: 360, scale: 1.2 }}
        onClick={onOpen}
        className="ml-12 border w-9 h-9 p-1 flex items-center justify-center rounded-xl cursor-pointer"
      >
        <Fingerprint
          className={`duration-1000 ${
            globalIsLogin ? "text-green-500" : "text-red-500"
          }`}
        />
      </motion.div>
      <Modal isOpen={isOpen} onClose={onClose} showBottomButtons={false}>
        <LoginRegisterForm setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
};

export default Navbar;
