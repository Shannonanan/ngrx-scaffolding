import { createAction, props } from "@ngrx/store";
import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_RESPONSE,
  LOAD_COMMENTS_FAILURE
} from "src/app/shared/constants";
import { ICommentsResponse } from "../models/comments.model";

export const loadCommentsRequest = createAction(
  LOAD_COMMENTS_REQUEST,
  props<{ request: number }>()
);

export const loadCommentsResponse = createAction(
  LOAD_COMMENTS_RESPONSE,
  props<{ response: ICommentsResponse[] }>()
);

export const loadCommentsFailure = createAction(
  LOAD_COMMENTS_FAILURE,
  props<{ error: any }>()
);
