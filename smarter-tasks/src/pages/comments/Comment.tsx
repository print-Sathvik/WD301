import { CommentDetails } from "../../context/comment/types";

const Comment = (props: { comment: CommentDetails }) => {
  return (
    <div className="comment py-2">
      <p>{props.comment.description}</p>
      <span>
        <p
          className="float-left text-slate-500 dark:text-white text-sm"
          id="timestamp"
        >
          {props.comment.createdAt}
        </p>
        <p className="float-right text-slate-500 dark:text-white text-sm">
          {props.comment.User.name}
        </p>
      </span>
      <br />
    </div>
  );
};

export default Comment;
