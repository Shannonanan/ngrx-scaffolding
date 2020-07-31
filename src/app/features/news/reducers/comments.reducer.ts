import { Action, createReducer, on } from "@ngrx/store";
import { ICommentsResponse } from "../models/comments.model";
import {
  loadCommentsRequest,
  loadCommentsResponse,
  loadCommentsFailure
} from "../actions/comments.actions";

export const commentsFeatureKey = "comments";

export interface State {
  loading: boolean;
  error: any;
  comments: ICommentsResponse[];
}

export const initialState: State = {
  loading: false,
  error: undefined,
  comments: undefined
};

export const commentsReducer = createReducer(
  initialState,

  on(loadCommentsRequest, state => ({
    ...state,
    loading: true
  })),
  on(loadCommentsResponse, (state, action) => ({
    ...state,
    comments: action.response,
    loading: false
  })),
  on(loadCommentsResponse, (state, action) => ({
    ...state,
    error: state.error,
    loading: false
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return commentsReducer(state, action);
}
export const getComments = (state: State) => state.comments;
export const commentsLoading = (state: State) => state.loading;
export const commentsError = (state: State) => state.error;
