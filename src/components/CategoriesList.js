import React from 'react';
import PropTypes from 'prop-types';

function CategoriesList({ onSetCategory, threads }) {
  return (
    <div>
      {threads.map((thread) => (
        <button
          className="m-3"
          type="button"
          key={thread.id}
          onClick={() => onSetCategory(thread.category)}
        >
          {thread.category}
        </button>
      ))}
    </div>
  );
}

CategoriesList.propTypes = {
  onSetCategory: PropTypes.func.isRequired,
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      ownerId: PropTypes.string.isRequired,
      upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      totalComments: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CategoriesList;
