import { Post } from "../../../entities/post";
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "../../../shared/ui";
import { useEffect, useState } from "react";

interface EditPostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPost: Post | null;
  onSubmit: (post: Post) => void;
}

export const EditPostDialog = ({ open, onOpenChange, selectedPost, onSubmit }: EditPostDialogProps) => {
  const [editedPost, setEditedPost] = useState<Post | null>(null);

  useEffect(() => {
    if (selectedPost) {
      setEditedPost(selectedPost);
    }
  }, [selectedPost]);

  const handleSubmit = () => {
    if (editedPost) {
      onSubmit(editedPost);
      onOpenChange(false);
    }
  };

  if (!editedPost) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={editedPost?.title}
            onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
          />
          <Textarea
            rows={15}
            placeholder="내용"
            value={editedPost?.body}
            onChange={(e) => setEditedPost({ ...editedPost, body: e.target.value })}
          />
          <Button onClick={handleSubmit}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
