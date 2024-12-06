import { legacy_createStore as createStore } from 'redux'
import appReducers from "./reducers";

let store = createStore(appReducers);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
