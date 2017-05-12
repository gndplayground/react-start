import { combineReducers } from 'redux';
import update from 'immutability-helper';

const user = (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return update(state, {
        user: {
          $set: action.payload,
        },
      });

    default:
      return state || {};
  }
};

const reducers = combineReducers({
  user,
});

export default reducers;
