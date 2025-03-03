import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      // Initial state
      isAuthenticated: false,
      role: "user",
      user: "user",

      // Function to log in the user
      setLogIn: (user) =>
        set(() => ({
          isAuthenticated: true,
          role: "user",
          user: "user",
        })),

      // Function to log out the user
      setLogOut: () =>
        set(() => ({
          isAuthenticated: false,
          role: null,
          user: null,
        })),
    }),
    {
      name: "auth-storage", // Key name in localStorage
      getStorage: () => localStorage, // Use localStorage to persist the data
    }
  )
);

export default useAuthStore;
