import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.UP_VOTES_THREADS:
      return threads.map((thread) => {
        if (thread.id !== action.payload.threadId) return thread;
        if (thread.downVotesBy.includes(action.payload.authUserId)) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.push(action.payload.authUserId),
            downVotesBy: thread.downVotesBy.filter(
              (id) => id !== action.payload.authUserId
            ),
          };
        }
        return thread;
      });
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.DOWN_VOTES_THREADS:
      return threads.map((thread) => {
        if (thread.id !== action.payload.threadId) return thread;
        if (thread.upVotesBy.includes(action.payload.authUserId)) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.filter(
              (id) => id !== action.payload.authUserId
            ),
            downVotesBy: thread.downVotesBy.push(action.payload.authUserId),
          };
        }
        return thread;
      });
    case ActionType.NEUTRAL_VOTES_THREADS:
      return threads.map((thread) => {
        if (thread.id !== action.payload.threadId) return thread;
        return {
          ...thread,
          upVotesBy: thread.upVotesBy.filter(
            (id) => id !== action.payload.authUserId
          ),
          downVotesBy: thread.downVotesBy.filter(
            (id) => id !== action.payload.authUserId
          ),
        };
      });
    default:
      return threads;
  }
}

export default threadsReducer;
