import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "src/app/store";
import { NewsState, newsFeatureKey } from "../news.reducer";
import { commentsFeatureKey } from "../reducers/comments.reducer";
import * as fromBlogPost from "../reducers/blogposts.reducer";
import * as fromComments from "../reducers/comments.reducer";

//#region SELECT NEWS STATE
export const newsState = createFeatureSelector<State, NewsState>(
  newsFeatureKey
);
//#endregion

//#region SELECT BLOGPOSTS - CHILD STATE
export const getBlogPostState = createSelector(
  newsState,
  state => state[fromBlogPost.blogpostsFeatureKey]
);
export const getAllBlogPosts = createSelector(
  getBlogPostState,
  fromBlogPost.getBlogPosts
);
//#endregion

//#region SELECT COMMENTS - CHILD STATE
export const getCommentsState = createSelector(
  newsState,
  state => state[fromComments.commentsFeatureKey]
);
export const getAllComments = createSelector(
  getCommentsState,
  fromComments.getComments
);
//#endregion
