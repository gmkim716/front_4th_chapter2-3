import { create } from "zustand";
import { Post } from "./types";

interface PostStore {
  posts: Post[];
  total: number;
  loading: boolean;
  selectedPost: Post | null;

  // TODO: pagination으로 묶기
  skip: number;
  limit: number;

  // TODO: filters로 묶기
  searchQuery: string;
  selectedTag: string;
  sortBy: string;
  sortOrder: "asc" | "desc";

  setPosts: (posts: Post[]) => void;
  setTotal: (total: number) => void;
  setLoading: (isLoading: boolean) => void;
  setSelectedPost: (post: Post | null) => void;
  setSkip: (skip: number) => void;
  setLimit: (limit: number) => void;
  setSearchQuery: (query: string) => void;
  setSelectedTag: (tag: string) => void;
  setSortBy: (sortBy: string) => void;
  setSortOrder: (sortOrder: "asc" | "desc") => void;
}

export const usePostStore = create<PostStore>((set) => ({
  // State
  posts: [],
  total: 0,
  loading: false,
  selectedPost: null,

  skip: 0,
  limit: 10,
  searchQuery: "",
  selectedTag: "",
  sortBy: "",
  sortOrder: "asc",

  // Actions
  setPosts: (posts: Post[]) => set({ posts }),
  setTotal: (total: number) => set({ total }),
  setLoading: (isLoading: boolean) => set({ loading: isLoading }),
  setSelectedPost: (post: Post | null) => set({ selectedPost: post }),
  setSkip: (skip: number) => set({ skip }),
  setLimit: (limit: number) => set({ limit }),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setSelectedTag: (tag: string) => set({ selectedTag: tag }),
  setSortBy: (sortBy: string) => set({ sortBy: sortBy }),
  setSortOrder: (sortOrder: "asc" | "desc") => set({ sortOrder: sortOrder }),
}));
