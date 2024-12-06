import { IAuthState } from "../../Domain/Store";
import { LOGIN_SUCCESS, LOGOUT_REQUEST, ME_SUCCESS } from "../actions/authActions";

const initialState: IAuthState = {
  logginIn: false, 
  loggedIn: false, 
  user: null,
  suggestions: []
};

// A partir del estado inicial y de la action se actualiza el estado
export function authReducer(state: IAuthState = initialState, action): IAuthState {
  switch (action.type) {
   
    case LOGOUT_REQUEST.type:
      localStorage.setItem('access_token', 'false');
      return {
        ...state,
        logginIn: false,
        loggedIn: false,
        user: null
      };

    case LOGIN_SUCCESS.type:

      localStorage.setItem('access_token', action.payload.access_token);

      return Object.assign({}, state, {
        loggedIn: true,
        logginIn: false
      });
      
    case ME_SUCCESS.type:
      
      return Object.assign({}, state, {
        loggedIn: true,
        user: action.payload
      });

    default:
      return state
  }
}