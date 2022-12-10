import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

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
}) {
  return (
    <div className="bg-slate-600 w-3/4 p-5 h-full rounded-lg shadow-lg">
      <p>{id}</p>
      <p>{title}</p>
      <div>{parse(body)}</div>
      <p>{category}</p>
      <p>{createdAt}</p>
      <div>
        {upVotesBy.map((data) => (
          <p key={data}>{data}</p>
        ))}
      </div>
      <div>
        {downVotesBy.map((data) => (
          <p key={data}>{data}</p>
        ))}
      </div>
      <p>{totalComments}</p>
      <p>{owner.name}</p>
      <div>{authUserId}</div>
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
};

export default ThreadItem;
