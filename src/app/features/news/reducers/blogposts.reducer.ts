import { Action, createReducer, on } from "@ngrx/store";

import {
  loadBlogpostsResponse,
  loadBlogpostsRequest,
  loadBlogpostsFailure
} from "../actions/blogpost.actions";
import { IBlogPostResponse } from "../models/posts.model";

export const blogpostsFeatureKey = "blogposts";

export interface State {
  error: any;
  loading: boolean;
  blogposts: IBlogPostResponse[];
}

export const initialState: State = {
  error: undefined,
  loading: false,
  blogposts: undefined
};

export const blogPostreducer = createReducer(
  initialState,

  on(loadBlogpostsRequest, state => ({
    ...state,
    loading: true
  })),
  on(loadBlogpostsResponse, (state, action) => ({
    ...state,
    blogposts: action.response,
    loading: false
  })),
  on(loadBlogpostsFailure, state => ({
    ...state,
    error: state.error,
    loading: false
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return blogPostreducer(state, action);
}

// * -------------------  // * GET POSTS ------------------- * /
export const getBlogPosts = (state: State) => state.blogposts;

// * -------------------  // * GET LOADING------------------- * /
export const getLoading = (state: State) => state.loading;
