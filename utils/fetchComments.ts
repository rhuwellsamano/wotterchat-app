import { Comment } from "../typings";

export const fetchComments = async (splashId: string) => {
  const res = await fetch(`/api/getComments?splashId=${splashId}`);

  const comments: Comment[] = await res.json();

  return comments;
};
