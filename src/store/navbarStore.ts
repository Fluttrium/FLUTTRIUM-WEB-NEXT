import { create } from "zustand";

interface NavbarStore {
  showButton: boolean;
  setShowButton: (show: boolean) => void;
}

export const useNavbarStore = create<NavbarStore>((set) => ({
  showButton: false,
  setShowButton: (show) => set({ showButton: show }),
}));
