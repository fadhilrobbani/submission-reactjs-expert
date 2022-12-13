import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailThread from '../components/DetailThread';
import {
  asyncAddCommentDetailThread,
  asyncReceiveDetailThread,
} from '../states/detailThread/action';
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

  const onAddCommentHandler = (comment) => {
    dispatch(asyncAddCommentDetailThread({ id, content: comment }));
  };

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(id));
  }, [dispatch]);

  if (!detailThread) return null;
  return (
    <div className=" text-slate-200  justify-center items-center p-10 pb-20 flex flex-col gap-7">
      <DetailThread
        authUserId={authUser?.id || ''}
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
        onAddComment={onAddCommentHandler}
      />
    </div>
  );
}

export default DetailThreadPage;
