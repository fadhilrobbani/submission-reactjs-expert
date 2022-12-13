import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

function CommentSection({ authUserId, onAddComment }) {
  const [comment, setComment] = useInput();
  return (
    <div className="mt-5 bg-slate-500 p-3 rounded-lg w-full h-full">
      <p className="font-semibold text-lg ">Write Comment</p>
      {authUserId ? (
        <div className="mt-4">
          <textarea
            className="bg-slate-500 text-slate-200 
               border border-slate-400 py-2 px-4 rounded-md w-full"
            type="text"
            value={comment}
            placeholder="Write Something ..."
            onChange={setComment}
          />
          <button
            type="button"
            onClick={() => onAddComment(comment)}
            className=" text-slate-100 bg-teal-600 px-3 py-2 w-full mt-3 rounded-md hover:bg-teal-800 "
          >
            Create
          </button>
        </div>
      ) : (
        <p className="underline">
          <Link to="/login">Please login to comment</Link>
        </p>
      )}
    </div>
  );
}

CommentSection.propTypes = {
  authUserId: PropTypes.string.isRequired,
  onAddComment: PropTypes.func.isRequired,
};

export default CommentSection;
