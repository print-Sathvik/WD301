import { Member } from "../../pages/members/MemberList";

export interface CommentListState {
  comments: CommentDetails[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export enum CommentListAvailableAction {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",

  CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
}

export type CommentActions =
  | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }
  | {
      type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS;
      payload: CommentPostDetails;
    }
  | { type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: CommentListAvailableAction.CREATE_COMMENT_REQUEST }
  | { type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS }
  | {
      type: CommentListAvailableAction.CREATE_COMMENT_FAILURE;
      payload: string;
    };

export type CommentDetailsPayload = Omit<CommentDetails, "id" | "task_id">;

// A type to hold dispatch actions in a context.
export type CommentsDispatch = React.Dispatch<CommentActions>;

export type CommentDetails = {
  id: number;
  description: string;
  task_id: number;
  owner: number;
  createdAt: string;
  updatedAt: string;
  User: Omit<Member, "organisation_id">;
};

export type CommentPostDetails = {
  description: string;
  owner: string;
};

export type Comments = {
  [k: string]: CommentDetails;
};
