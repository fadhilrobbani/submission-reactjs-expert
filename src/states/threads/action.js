import { showLoading, hideLoading } from 'react-redux-loading-bar';
import swal from 'sweetalert';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  UP_VOTES_THREADS: 'UP_VOTES_THREADS',
  DOWN_VOTES_THREADS: 'DOWN_VOTES_THREADS',
  NEUTRAL_VOTES_THREADS: 'NEUTRAL_VOTES_THREADS',
  // ADD_THREAD: 'ADD_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function upVotesThreadCreator({ threadId, authUserId }) {
  return {
    type: ActionType.UP_VOTES_THREADS,
    payload: {
      threadId,
      authUserId,
    },
  };
}

function downVotesThreadCreator({ threadId, authUserId }) {
  return {
    type: ActionType.DOWN_VOTES_THREADS,
    payload: {
      threadId,
      authUserId,
    },
  };
}

function neutralVotesThreadCreator({ threadId, authUserId }) {
  return {
    type: ActionType.NEUTRAL_VOTES_THREADS,
    payload: {
      threadId,
      authUserId,
    },
  };
}

function asyncUpVotesThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(showLoading());
    dispatch(upVotesThreadCreator({ threadId, authUser }));
    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      swal(error.message);
      dispatch(downVotesThreadCreator({ threadId, authUser }));
    }
    dispatch(hideLoading());
  };
}

function asyncDownVotesThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(showLoading());
    dispatch(downVotesThreadCreator({ threadId, authUser }));
    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      swal(error.message);
      dispatch(upVotesThreadCreator({ threadId, authUser }));
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVotesThread({ threadId, voteTypeBefore }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(showLoading());
    dispatch(neutralVotesThreadCreator({ threadId, authUser }));
    try {
      await api.neutralVoteThread(threadId);
    } catch (error) {
      swal(error.message);
      if (voteTypeBefore === 1) {
        dispatch(upVotesThreadCreator({ threadId, authUser }));
      }

      if (voteTypeBefore === -1) {
        dispatch(downVotesThreadCreator({ threadId, authUser }));
      }
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  upVotesThreadCreator,
  downVotesThreadCreator,
  neutralVotesThreadCreator,
  asyncUpVotesThread,
  asyncDownVotesThread,
  asyncNeutralVotesThread,
};
