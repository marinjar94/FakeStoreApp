import { LOGIN_SUCCESS, AuthActionTypes } from '../actions/authActions';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default authReducer;
