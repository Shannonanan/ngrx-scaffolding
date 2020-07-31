import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/store";

@Component({
  selector: "app-blogposts",
  templateUrl: "./blogposts.component.html",
  styleUrls: ["./blogposts.component.css"]
})
export class BlogpostsComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {}
}
