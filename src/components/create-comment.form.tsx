import React from "react";

type Props = {
  onSubmit: (comment: string) => (e: React.FormEvent<HTMLFormElement>) => void;
};

const CreateCommentForm = ({ onSubmit }: Props) => {
  const [comment, setComment] = React.useState("");

  return (
    <form
      onSubmit={onSubmit(comment)}
      className="flex space-x-3"
      id="create-comment-form"
    >
      <input
        type="text"
        placeholder="Add a comment..."
        onChange={e => setComment(e.target.value)}
        className="border-[1px] border-gray-300 w-full p-2 rounded-sm text-sm"
      />
      <button type="submit" className="border-[1px] text-sm px-4">
        Send
      </button>
    </form>
  );
};

export default CreateCommentForm;
