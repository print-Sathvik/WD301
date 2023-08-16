import { useParams } from "react-router-dom";
import {
  useCommentsDispatch,
  useCommentsState,
} from "../../context/comment/context";
import { refreshComments } from "../../context/comment/actions";
import { useEffect } from "react";
import Comment from "./Comment";

export const CommentList = () => {
  const commentsState = useCommentsState();
  const commentDispatch = useCommentsDispatch();
  let { projectID, taskID } = useParams();
  useEffect(() => {
    if (projectID && taskID)
      refreshComments(commentDispatch, projectID, taskID);
  }, [projectID, taskID, commentDispatch]);

  if (commentsState.isLoading) {
    return <>Loading...</>;
  }
  return (
    <div>
      {commentsState.comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};
