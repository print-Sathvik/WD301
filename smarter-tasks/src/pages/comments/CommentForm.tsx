import { useParams } from "react-router-dom";
import { useCommentsDispatch } from "../../context/comment/context";
import { addComment, refreshComments } from "../../context/comment/actions";
import { useState } from "react";

const CommentForm = () => {
  const commentDispatch = useCommentsDispatch();
  let { projectID, taskID } = useParams();
  const [comment, setComment] = useState<string>("");

  const handleCommentPost = async () => {
    try {
      // Invoke the actual API and create a task.
      const userDataStr = localStorage.getItem("useData");
      const data = {
        description: comment,
        owner: userDataStr ? JSON.parse(userDataStr).id : "",
      };
      addComment(commentDispatch, projectID ?? "", taskID ?? "", data);
      refreshComments(commentDispatch, projectID ?? "", taskID ?? "");
      setComment("");
    } catch (error) {
      console.error("Operation failed:", error);
    }
  };

  return (
    <div className="py-2 mt-2 flex">
      <input
        type="text"
        id="commentBox"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        className="outline-none border-b border-black w-full inline-block"
        placeholder="Add a comment..."
      />
      <button
        id="addCommentBtn"
        onClick={handleCommentPost}
        className="bg-blue-600 text-white font-bold p-1 ml-2 rounded inline-block"
      >
        Comment
      </button>
    </div>
  );
};

export default CommentForm;
