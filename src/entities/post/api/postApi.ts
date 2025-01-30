import axios from "axios";
import { Post } from "../model/types";

// 순수한 API 호출 로직을 정합니다
export const postApi = {
  getPosts: async (limit: number, skip: number) => {
    const response = await axios.get(`/api/posts?limit=${limit}&skip=${skip}`);
    return response.data;
  },

  getTags: async () => {
    const response = await axios.get("api/posts/tags");
    return response.data;
  },

  searchPosts: async (query: string) => {
    const response = await axios.get(`api/posts/search?q=${query}`);
    return response.data;
  },

  getPostsByTag: async (tag: string) => {
    const response = await axios.get(`/api/posts/tag/${tag}`);
    return response.data;
  },

  // tip: 게시물을 생성할 때는 Partial을 사용하는 것이 유연한 방식을 제공할 수 있습니다
  addPost: async (post: Partial<Post>) => {
    const response = await axios.post("/api/posts/add", post);
    return response.data;
  },

  updatePost: async (selectedPost: Post) => {
    const reponse = await axios.put(`/api/posts/${selectedPost.id}`, selectedPost);
    return reponse.data;
  },

  deletePost: async (id: number) => {
    const response = await axios.delete(`/api/posts/${id}`);
    return response.data;
  },
};
