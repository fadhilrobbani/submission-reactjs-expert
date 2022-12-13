import React from 'react';
import PropTypes from 'prop-types';

function CommentsList({ comments }) {
  return (
    <div>
      <p>{`Comments (${comments.length}): `}</p>
      <div>
        {comments.map((comment) => (
          <div className="m-3" key={comment.id}>
            <div>{comment.id}</div>
            <div>{comment.createdAt}</div>
            <div>{comment.content}</div>
            <div>{comment.owner.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};

export default CommentsList;
