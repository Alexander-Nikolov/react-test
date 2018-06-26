import * as ActionTypes from '../actiontypes/user';

export const login = user => {
  return {
      type: ActionTypes.USER_LOGIN,
      payload: user
  };
};


