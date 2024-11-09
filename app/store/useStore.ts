import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    id: number;
    name: string;
    intro: string;
    avatar: string;
    role: 0 | 1; // 0: 普通用户 1: 管理员
}

interface StoreState {
    globalIsLogin: boolean;
    setGlobalIsLogin: (isLogin: boolean) => void;
    user: User;
    setUser: (user: User) => void;
    clearUser: () => void;

}

const useStore = create<StoreState>()(
    persist(
        (set) => ({
            globalIsLogin: false,
            setGlobalIsLogin: (globalIsLogin: boolean) => set({ globalIsLogin }),
            user: {
                id: 0,
                name: '',
                intro: '',
                avatar: '',
                role: 0,
            },
            setUser: (user: User) => set({ user }),
            clearUser: () => set({
                globalIsLogin: false,
                user: {
                    id: 0,
                    name: '',
                    intro: '',
                    avatar: '',
                    role: 0,
                },
            }),
        }),
        {
            name: "user-storage",
            partialize: (state) => ({ user: state.user, globalIsLogin: state.globalIsLogin }),
        }
    )
);

export default useStore;
