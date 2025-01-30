import { highlightText } from "../../../shared/lib/highlight";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui";

interface PostDetailDialogProps {
  open;
  onOpenChange;
  selectedPost;
  searchQuery;
}

export const PostDetailDialog = ({ open, onOpenChange, selectedPost, searchQuery }: PostDetailDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost?.title, searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost?.body, searchQuery)}</p>
          {renderComments(selectedPost?.id)}
        </div>
      </DialogContent>
    </Dialog>
  );
};
