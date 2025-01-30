import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "../../shared/ui";
import { Comment } from "../../types";

interface EditCommentDialogProps {
  selectedComment: Comment | null;
  showEditCommentDialog: boolean;
  updateComment: (comment: Comment) => void;
  setSelectedComment: (comment: Comment | null) => void;
  setShowEditCommentDialog: (open: boolean) => void;
}

export const EditCommentDialog = ({
  selectedComment,
  showEditCommentDialog,
  setSelectedComment,
  updateComment,
  setShowEditCommentDialog,
}: EditCommentDialogProps) => {
  return (
    <Dialog open={showEditCommentDialog} onOpenChange={setShowEditCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={selectedComment?.body || ""}
            onChange={(e) => setSelectedComment({ ...selectedComment, body: e.target.value })}
          />
          <Button onClick={updateComment}>댓글 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
