import { Comment } from "../utils/lib/services/types";

type Props = {
  comment: Comment;
};

const SingleComment = ({ comment }: Props) => {
  return (
    <div className="flex gap-x-2">
      <div>
        <div
          className="rounded-full w-8 h-8 bg-[#F2F2F2] flex items-center
        justify-center uppercase font-bold"
        >
          {comment.name.charAt(0)}
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="text-sm font-semibold">{comment.email}</p>
        <p className="text-xs">{comment.body}</p>
      </div>
    </div>
  );
};

export default SingleComment;
