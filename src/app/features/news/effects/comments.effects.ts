import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import * as commentsActions from "../actions/comments.actions";
import { ICommentsResponse } from "../models/comments.model";
import { concatMap, flatMap, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class CommentsEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getBlogposts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(commentsActions.loadCommentsRequest),
      concatMap(action =>
        this.http
          .get(
            `https://jsonplaceholder.typicode.com/posts/${action.request}/comments`
          )
          .pipe(
            flatMap((response: ICommentsResponse[]) =>
              of(
                commentsActions.loadCommentsResponse({
                  response
                })
              )
            ),
            catchError(error => {
              return of(commentsActions.loadCommentsFailure(error));
            })
          )
      )
    )
  );
}
