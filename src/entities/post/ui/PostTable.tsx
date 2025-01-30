import { Table, TableBody, TableHead, TableHeader, TableRow } from "../../../shared/ui";
import { User } from "../../../types";
import { Post } from "../model/types";
import { PostTableRow } from "./PostTableRow";

interface PostTableProps {
  posts: Post[];
  searchQuery: string;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  updateURL: () => void;
  openUserModal: (user: User) => void;
  openPostDetail: (post: Post) => void;
  setShowEditDialog: (show: boolean) => void;
  setSelectedPost: (post: Post | null) => void;
  deletePost: (id: number) => void;
}

export const PostTable = ({
  posts,
  searchQuery,
  selectedTag,
  setSelectedTag,
  updateURL,
  openUserModal,
  openPostDetail,
  setShowEditDialog,
  setSelectedPost,
  deletePost,
}: PostTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">ID</TableHead>
          <TableHead>제목</TableHead>
          <TableHead className="w-[150px]">작성자</TableHead>
          <TableHead className="w-[150px]">반응</TableHead>
          <TableHead className="w-[150px]">작업</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post: Post) => (
          <PostTableRow
            key={post.id}
            post={post}
            searchQuery={searchQuery}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            updateURL={updateURL}
            openUserModal={openUserModal}
            openPostDetail={openPostDetail}
            setShowEditDialog={setShowEditDialog}
            setSelectedPost={setSelectedPost}
            deletePost={deletePost}
          />
        ))}
      </TableBody>
    </Table>
  );
};
