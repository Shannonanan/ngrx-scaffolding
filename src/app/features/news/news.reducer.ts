import { Action, createReducer, on, combineReducers } from "@ngrx/store";
import * as fromComments from "./reducers/comments.reducer";
import * as fromBlogPosts from "./reducers/blogposts.reducer";

export const newsFeatureKey = "news";

export interface NewsState {
  [fromComments.commentsFeatureKey]: fromComments.State;
  [fromBlogPosts.blogpostsFeatureKey]: fromBlogPosts.State;
}

export function reducers(state: NewsState | undefined, action: Action) {
  return combineReducers({
    [fromComments.commentsFeatureKey]: fromComments.reducer,
    [fromBlogPosts.blogpostsFeatureKey]: fromBlogPosts.reducer
  })(state, action);
}
