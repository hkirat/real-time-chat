import React, { useState } from 'react';

interface Props {
  id: number, 
  content: string;
  upvotes: number;
  downvotes: number;
  onUpvote: (id: number) => void;
  onDownvote: (id: number) => void;
}

const Voting = ({ id, content, upvotes, downvotes, onUpvote, onDownvote }: Props) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);

  const handleUpvote = () => {
    if (!isUpvoted) {
      onUpvote(id);
      setIsUpvoted(true);
      if (isDownvoted) {
        onDownvote(id);
        setIsDownvoted(false);
      }
    }
  };

  const handleDownvote = () => {
    if (!isDownvoted) {
      onDownvote(id);
      setIsDownvoted(true);
      if (isUpvoted) {
        onUpvote(id);
        setIsUpvoted(false);
      }
    }
  };

  return (
    <div className="border border-gray-700 p-2 mb-4 rounded-lg w-[98%] mx-auto shadow-md bg-blue-500">
      <p className="mb-2">{content}</p>
      <div className="flex items-center">
        <button
          className={`mr-2 p-2 border rounded-full ${isUpvoted ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={handleUpvote}
        >
          Upvote
        </button>
        <span className="mr-2">{upvotes}</span>
        <button
          className={`p-2 border rounded-full ${isDownvoted ? 'bg-red-500 text-white' : 'bg-gray-200 mr-2'}`}
          onClick={handleDownvote}
        >
          Downvote
        </button>
        <span className='mr-2'>{downvotes}</span>
      </div>
    </div>
  );
};

export default Voting;
