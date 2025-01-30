import { useQuery } from "@tanstack/react-query";
import { postApi } from "../../../entities/post";

/**
 * 게시물 목록 조회 query
 */
export const usePostsQuery = (limit: number, skip: number) => {
  return useQuery({
    queryKey: ["posts", limit, skip],
    queryFn: () => postApi.getPosts(limit, skip),
  });
};

/**
 * 태그 목록 조회
 */
export const useTagsQuery = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: postApi.getTags,
  });
};

/**
 * 태그별 게시물 목록 조회
 */
export const usePostsByTagQuery = (tag: string) => {
  return useQuery({
    queryKey: ["posts", tag],
    queryFn: () => postApi.getPostsByTag(tag),
  });
};
