import { useQuery } from "@tanstack/react-query";
import { postApi } from "../../../entities/post";

export const usePostsQuery = (limit: number, skip: number) => {
  return useQuery({
    queryKey: ["posts", limit, skip],
    queryFn: () => postApi.getPosts(limit, skip),
  });
};

export const useTagsQuery = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: postApi.getTags,
  });
};

export const usePostsByTagQuery = (tag: string) => {
  return useQuery({
    queryKey: ["posts", tag],
    queryFn: () => postApi.getPostsByTag(tag),
  });
};
