import { LOGIN_SUCCESS, LOGOUT_REQUEST, ME_SUCCESS, TOKEN_VERIFIED } from "../actions/authActions";

const initialState = {
  logginIn: false, 
  loggedIn: false, 
  user: null,
  suggestions: []
};

// A partir del estado inicial y de la action se actualiza el estado
export function authReducer(state = initialState, action) {
  switch (action.type) {

    case TOKEN_VERIFIED.type:
      localStorage.setItem('access_token', action.payload);
      return Object.assign({}, state, {
        loggedIn: true,
        logginIn: false
      });
   
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