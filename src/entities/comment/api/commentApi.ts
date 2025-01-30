import axios from "axios";
import { Comment } from "../../../types";

export const commentApi = {
  getComments: async (postId: number) => {
    const response = await axios.get(`/api/comments?postId=${postId}`);
    return response.data;
  },

  addComment: async (comment: Comment) => {
    const response = await axios.post("/api/comments/add", comment);
    return response.data;
  },

  updateComment: async (comment: Comment) => {
    const response = await axios.put(`/api/comments/${comment.id}`, comment);
    return response.data;
  },

  deleteComment: async (id: number) => {
    const response = await axios.delete(`/api/comments/${id}`);
    return response.data;
  },

  // likeComment: async (id: number, postId: number) => {
  //   const response = await axios.patch(`/api/comments/${id}`, { likes: 1 });
  //   return response.data;
  // }
};
