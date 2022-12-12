import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import parse from 'html-react-parser';
import swal from 'sweetalert';
import postedAt from '../utils';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  owner,
  authUserId,
  onUpVotes,
  onDownVotes,
  onNeutralVotes,
}) {
  const isThreadUpVotes = upVotesBy.includes(authUserId);
  const isThreadDownVotes = downVotesBy.includes(authUserId);

  const onUpVotesClick = () => {
    if (!authUserId) {
      swal('You must login to like/dislike this post');
      return;
    }
    onUpVotes(id);
  };

  const onDownVotesClick = () => {
    if (!authUserId) {
      swal('You must login to like/dislike this post');
      return;
    }
    onDownVotes(id);
  };

  const onNeutralVotesClick = () => {
    if (!authUserId) {
      swal('You must login to like/dislike this post');
      return;
    }
    onNeutralVotes(id);
  };

  return (
    <div className="bg-slate-600 w-full md:w-3/4 p-5 h-full rounded-lg ">
      <div className="ring-1 rounded-lg px-2 ring-slate-100 w-fit">
        <p>#{category}</p>
      </div>
      <h1 className="text-lg font-bold mb-5 mt-2">{title}</h1>
      <div className="line-clamp-4 mb-5">{parse(body)}</div>
      <div className="flex flex-col sm:flex-row sm:gap-4  items-center p-2 w-full sm:w-fit rounded-lg bg-slate-500">
        <div className="flex flex-row gap-4">
          {isThreadUpVotes ? (
            <div className="flex flex-row">
              <AiFillLike
                className="hover:cursor-pointer"
                size={25}
                onClick={() => onNeutralVotesClick({ id, voteTypeBefore: 1 })}
              />
              <p> &nbsp;{upVotesBy.length}</p>
            </div>
          ) : (
            <div className="flex flex-row">
              <AiOutlineLike
                className="hover:cursor-pointer"
                size={25}
                onClick={() => onUpVotesClick(id)}
              />
              <p> &nbsp;{upVotesBy.length}</p>
            </div>
          )}

          {isThreadDownVotes ? (
            <div className="flex flex-row">
              <AiFillDislike
                className="hover:cursor-pointer"
                size={25}
                onClick={() => onNeutralVotesClick({ id, voteTypeBefore: -1 })}
              />
              <p> &nbsp;{downVotesBy.length}</p>
            </div>
          ) : (
            <div className="flex flex-row">
              <AiOutlineDislike
                className="hover:cursor-pointer"
                size={25}
                onClick={() => onDownVotesClick(id)}
              />
              <p> &nbsp;{downVotesBy.length}</p>
            </div>
          )}
          <div className="flex flex-row">
            <BiCommentDetail size={25} />
            <p> &nbsp;{totalComments}</p>
          </div>
        </div>
        <div className="font-semibold">Created By {owner.name || 'null'}</div>
        <div className="font-semibold">{postedAt(createdAt)}</div>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  authUserId: PropTypes.string.isRequired,
  onUpVotes: PropTypes.func.isRequired,
  onDownVotes: PropTypes.func.isRequired,
  onNeutralVotes: PropTypes.func.isRequired,
};

export default ThreadItem;
