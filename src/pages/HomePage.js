import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import ThreadsList from '../components/ThreadsList';
import {
  asyncDownVotesThread,
  asyncNeutralVotesThread,
  asyncUpVotesThread,
  filterThreadsActionCreator,
} from '../states/threads/action';
import AddThreadButton from '../components/AddThreadButton';
import CategoriesList from '../components/CategoriesList';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const onUpVotesHandler = (threadId) => {
    dispatch(asyncUpVotesThread(threadId));
  };
  const onDownVotesHandler = (threadId) => {
    dispatch(asyncDownVotesThread(threadId));
  };
  const onNeutralVotesHandler = ({ threadId, voteTypeBefore }) => {
    dispatch(asyncNeutralVotesThread({ threadId, voteTypeBefore }));
  };

  const onSetCategoryHandler = (category) => {
    dispatch(filterThreadsActionCreator(category));
  };

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadsList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
    authUserId: authUser ? authUser.id : '',
  }));
  return (
    <div className=" text-slate-200  justify-center items-center p-10 pb-20 flex flex-col gap-7">
      <CategoriesList onSetCategory={onSetCategoryHandler} threads={threads} />
      <ThreadsList
        threads={threadsList}
        onUpVotes={onUpVotesHandler}
        onDownVotes={onDownVotesHandler}
        onNeutralVotes={onNeutralVotesHandler}
      />
      <AddThreadButton />
    </div>
  );
}

export default HomePage;
