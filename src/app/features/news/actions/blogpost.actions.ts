import { createAction, props } from "@ngrx/store";
import {
  LOAD_BLOGPOSTS_REQUEST,
  LOAD_BLOGPOSTS_FAIL,
  LOAD_BLOGPOSTS_RESPONSE
} from "../../../shared/constants";
import { IBlogPostResponse } from "src/app/features/news/models/posts.model";

export const loadBlogpostsRequest = createAction(LOAD_BLOGPOSTS_REQUEST);

export const loadBlogpostsResponse = createAction(
  LOAD_BLOGPOSTS_RESPONSE,
  props<{ response: IBlogPostResponse[] }>()
);

export const loadBlogpostsFailure = createAction(
  LOAD_BLOGPOSTS_FAIL,
  props<{ error: any }>()
);
