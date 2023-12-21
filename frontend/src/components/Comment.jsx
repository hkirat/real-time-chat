import { BiUpvote, BiDownvote } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
const Comment = (props) => {
  return (
    <div className="text-white bg-slate-700 p-3 rounded-md my-4">
      <div className="flex">
        <CgProfile className="mx-2" />
        {props.user}
      </div>
      <div className="flex">
        <div>
          <div className="flex">
            <BiUpvote className="cursor-pointer" /> {props.upvotes}
          </div>
          <div className="flex">
            <BiDownvote className="cursor-pointer" />
            {props.downvotes}
          </div>
        </div>
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default Comment;
