import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromBlogPostActions from "../actions/blogpost.actions";
import { catchError, flatMap, concatMap } from "rxjs/operators";
import { of, throwError, race, forkJoin } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { IBlogPostResponse } from "../models/posts.model";

@Injectable()
export class BlogpostsEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getBlogposts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBlogPostActions.loadBlogpostsRequest),
      concatMap(action =>
        this.http.get(`https://jsonplaceholder.typicode.com/posts`).pipe(
          flatMap((response: IBlogPostResponse[]) =>
            of(
              fromBlogPostActions.loadBlogpostsResponse({
                response
              })
            )
          ),
          catchError(error => {
            return of(fromBlogPostActions.loadBlogpostsFailure(error));
          })
        )
      )
    )
  );
}
