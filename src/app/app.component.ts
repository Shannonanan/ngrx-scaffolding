import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { State } from "./store";
import { loadBlogpostsRequest } from "./features/news/actions/blogpost.actions";
import * as fromSelector from "./features/news/selectors/news-selectors.selectors";
import { Observable } from "rxjs";
import { IBlogPostResponse } from "./features/news/models/posts.model";
import { loadCommentsRequest } from "./features/news/actions/comments.actions";
import { ICommentsResponse } from "./features/news/models/comments.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  getPostsObs$: Observable<IBlogPostResponse[]>;
  getCommentsObs$: Observable<ICommentsResponse[]>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(loadBlogpostsRequest());
    this.getPostsObs$ = this.store.pipe(select(fromSelector.getAllBlogPosts));

    this.getCommentsObs$ = this.store.pipe(select(fromSelector.getAllComments));
  }

  selectPost(postId) {
    this.store.dispatch(loadCommentsRequest({ request: postId }));
  }
}
