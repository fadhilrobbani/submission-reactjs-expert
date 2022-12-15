import React from 'react';
import PropTypes from 'prop-types';

function CategoriesList({ onSetCategory, threads, categories }) {
  return (
    <div className=" bg-slate-500  rounded-lg p-1">
      {threads.map((thread) => (
        <button
          className={
            categories === thread.category
              ? 'm-3 p-2 rounded-lg  bg-teal-600 ring-1 ring-slate-100 hover:bg-teal-600'
              : 'm-3 ring-1 p-2 ring-slate-100 rounded-lg bg-transparent hover:bg-teal-600'
          }
          type="button"
          key={thread.id}
          onClick={() => onSetCategory(thread.category)}
        >
          #{thread.category}
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
  categories: PropTypes.string.isRequired,
};

export default CategoriesList;
