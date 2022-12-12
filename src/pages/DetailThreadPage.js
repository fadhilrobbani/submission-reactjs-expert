import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailThread from '../components/DetailThread';
import { asyncReceiveDetailThread } from '../states/detailThread/action';
import {
  asyncDownVotesThread,
  asyncNeutralVotesThread,
  asyncUpVotesThread,
} from '../states/threads/action';

function DetailThreadPage() {
  const { detailThread = null, authUser } = useSelector((states) => states);
  const { id } = useParams();
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

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(id));
  }, [dispatch]);

  if (!detailThread) return null;
  return (
    <div>
      <DetailThread
        authUserId={authUser.id || ''}
        threadId={detailThread.id}
        title={detailThread.title}
        body={detailThread.body}
        category={detailThread.category}
        createdAt={detailThread.createdAt}
        owner={detailThread.owner}
        upVotesBy={detailThread.upVotesBy}
        downVotesBy={detailThread.downVotesBy}
        comments={detailThread.comments}
        onUpVotes={onUpVotesHandler}
        onDownVotes={onDownVotesHandler}
        onNeutralVotes={onNeutralVotesHandler}
      />
    </div>
  );
}

export default DetailThreadPage;
