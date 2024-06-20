import { create } from 'zustand';

interface Store {
  mode: string;
}
export const useStore = create<Store>(() => ({
  mode: 'oklch',
}));
