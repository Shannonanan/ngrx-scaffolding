import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import * as fromNews from "../features/news/news.reducer";
import * as fromComments from "../features/news/reducers/comments.reducer";

export interface State {
  [fromNews.newsFeatureKey]: fromNews.NewsState;
}

export const reducers: ActionReducerMap<State> = {
  [fromNews.newsFeatureKey]: fromNews.reducers
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
