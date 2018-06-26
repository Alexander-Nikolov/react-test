import * as ActionTypes from '../actiontypes/user';

const initialState = {
	user: {
	    username: '',
        password: '',
	    isLogged: false
    }
};

export default function User(state=initialState, action) {
	
  switch(action.type) {
    case ActionTypes.USER_LOGIN: {
        return {
            ...state,
            user: {
                ...action.user,
                isLogged: true
            }

        };
    }

    default:
      return state;
  }
}
