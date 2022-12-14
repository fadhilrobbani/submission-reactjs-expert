import React from 'react';
import PropTypes from 'prop-types';
// import {
//   AiOutlineLike,
//   AiOutlineDislike,
//   AiFillLike,
//   AiFillDislike,
// } from 'react-icons/ai';
import parse from 'html-react-parser';
import postedAt from '../utils';

function CommentItem({ comment }) {
  return (
    <div
      className="flex flex-col gap-4 bg-slate-500 rounded-lg p-4 relative"
      key={comment.id}
    >
      <div className="flex flex-row  items-center gap-3">
        <div className="mask mask-squircle w-12 h-12">
          <img src={comment.owner.avatar} alt="avatar" />
        </div>
        <div className="font-bold text-lg">{comment.owner.name}</div>
      </div>
      <div>
        <div className="absolute top-4 right-4">
          {postedAt(comment.createdAt)}
        </div>
        <div className="px-2">{parse(comment.content)}</div>
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CommentItem;
