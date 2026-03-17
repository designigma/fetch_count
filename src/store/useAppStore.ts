import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { type Post } from '../types';

interface AppState {
  data: Post[];
  fetchCount: number;
  isLoading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
  resetCount: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      data: [],
      fetchCount: 0,
      isLoading: false,
      error: null,

      fetchData: async () => {
        set({ isLoading: true, error: null });
        try {
          // Using JSONPlaceholder mock API
          const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10');
          set({ 
            data: response.data, 
            fetchCount: get().fetchCount + 1,
            isLoading: false 
          });
        } catch {
          set({ error: 'Failed to fetch data', isLoading: false });
        }
      },

      resetCount: () => {
        set({ fetchCount: 0 });
      },
    }),
    {
      name: 'app-storage', // unique name for localStorage key
    }
  )
);