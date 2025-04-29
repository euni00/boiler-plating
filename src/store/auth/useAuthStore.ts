import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import IAuthType from "./authType";

const useAuthStore = create<IAuthType>()(
  persist(
    (set) => ({
      accessToken: "",
      setAccessToken: (accessToken: string) =>
        set({
          accessToken,
        }),
      clearAccessToken: () =>
        set({
          accessToken: "",
        }),
    }),
    {
      name: "accessToken",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
