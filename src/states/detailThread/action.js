import { showLoading, hideLoading } from 'react-redux-loading-bar';
import swal from 'sweetalert';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
  ADD_COMMENT_DETAIL_THREAD: 'ADD_COMMENT_DETAIL_THREAD',
};

function receiveDetailThreadActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_DETAIL_THREAD,
    payload: {
      detailThread,
    },
  };
}

function addCommentDetailThreadActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT_DETAIL_THREAD,
    payload: {
      comment,
    },
  };
}

function asyncReceiveDetailThread(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const detailThread = await api.getDetailThread(id);
      dispatch(receiveDetailThreadActionCreator(detailThread));
    } catch (error) {
      swal(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddCommentDetailThread({ id, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ id, content });
      dispatch(addCommentDetailThreadActionCreator(comment));
    } catch (error) {
      swal(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  asyncReceiveDetailThread,
  receiveDetailThreadActionCreator,
  addCommentDetailThreadActionCreator,
  asyncAddCommentDetailThread,
};
