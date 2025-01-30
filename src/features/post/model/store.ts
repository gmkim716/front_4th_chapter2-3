import { create } from "zustand";
import { Post } from "../../../entities/post";

interface PostDialogStore {
  addDialog: {
    isOpen: boolean;
    data: Partial<Post>;
  };
  editDialog: {
    isOpen: boolean;
    selectedPost: Post | null;
  };
  detailDialog: {
    isOpen: boolean;
    selectedPost: Post | null;
  };

  openAddDialog: () => void;
  closeAddDialog: () => void;
  openEditDialog: (post: Post) => void;
  closeEditDialog: () => void;
  openDetailDialog: (post: Post) => void;
  closeDetailDialog: () => void;
  updateNewPost: (data: Partial<Post>) => void;
}

export const usePostDialogStore = create<PostDialogStore>((set) => ({
  addDialog: {
    isOpen: false,
    data: { title: "", body: "", userId: 0 },
  },
  editDialog: {
    isOpen: false,
    selectedPost: null,
  },
  detailDialog: {
    isOpen: false,
    selectedPost: null,
  },

  openAddDialog: () => set((state) => ({ addDialog: { ...state.addDialog, isOpen: true } })),
  closeAddDialog: () => set((state) => ({ addDialog: { ...state.addDialog, isOpen: false } })),
  openEditDialog: (post: Post) =>
    set((state) => ({ editDialog: { ...state.editDialog, isOpen: true, selectedPost: post } })),
  closeEditDialog: () => set((state) => ({ editDialog: { ...state.editDialog, isOpen: false, selectedPost: null } })),
  openDetailDialog: (post: Post) =>
    set((state) => ({ detailDialog: { ...state.detailDialog, isOpen: true, selectedPost: post } })),
  closeDetailDialog: () =>
    set((state) => ({ detailDialog: { ...state.detailDialog, isOpen: false, selectedPost: null } })),
  updateNewPost: (data) =>
    set((state) => ({ addDialog: { ...state.addDialog, data: { ...state.addDialog.data, ...data } } })),
}));
