export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  token: string;
}

export const loginSuccess = (token: string): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  token,
});

export type AuthActionTypes = LoginSuccessAction;
