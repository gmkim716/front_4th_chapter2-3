import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Post, postApi } from "../../../entities/post";

/**
 * 게시물 추가 mutation
 */
export const useAddPostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newPost: Post) => postApi.addPost(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] }); // ?
    },
  });
};

/**
 * 게시물 수정 mutation
 */
export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedPost: Post) => postApi.updatePost(updatedPost),
    onSuccess: (updatedPost: Post) => {
      queryClient.setQueryData(["posts", updatedPost.id], updatedPost); // 특정 게시물의 상세 캐시 수정
      queryClient.invalidateQueries({ queryKey: ["posts"] }); // 게시물 목록 캐시 무효화
    },
  });
};

/**
 * 게시물 삭제 mutation
 */
export const useDeletePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: number) => postApi.deletePost(postId),
    onSuccess: (_, deletedPostId: number) => {
      queryClient.removeQueries({ queryKey: ["posts", deletedPostId] }); // 특정 게시물의 상세 캐시 제거
      queryClient.invalidateQueries({ queryKey: ["posts"] }); // 게시물 목록 캐시 무효화
    },
  });
};

/**
 * 게시물 검색 mutation
 */
export const useSearchPostsMutation = () => {
  return useMutation({
    mutationFn: (searchQuery: string) => postApi.searchPosts(searchQuery),
  });
};
