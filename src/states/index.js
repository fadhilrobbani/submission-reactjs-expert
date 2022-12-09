import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    authUser: authUserReducer,
  },
});

export default store;
