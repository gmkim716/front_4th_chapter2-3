import { useNavigate } from "react-router-dom";
import { usePostStore } from "../../entities/post/model/store";

export const UpdateURL = () => {
  const navigate = useNavigate();
  const { skip, limit, searchQuery, sortBy, sortOrder, selectedTag } = usePostStore();

  const params = new URLSearchParams();
  if (skip) params.set("skip", skip.toString());
  if (limit) params.set("limit", limit.toString());
  if (searchQuery) params.set("search", searchQuery);
  if (sortBy) params.set("sortBy", sortBy);
  if (sortOrder) params.set("sortOrder", sortOrder);
  if (selectedTag) params.set("tag", selectedTag);
  navigate(`?${params.toString()}`);
};
