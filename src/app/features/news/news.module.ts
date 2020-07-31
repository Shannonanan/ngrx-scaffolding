import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { BlogpostsEffects } from "./effects/blogposts.effects";
import { BlogpostsComponent } from "./container/blogposts/blogposts.component";
import { CommentsEffects } from './effects/comments.effects';

@NgModule({
  declarations: [BlogpostsComponent],
  imports: [CommonModule, EffectsModule.forFeature([BlogpostsEffects, CommentsEffects])]
})
export class NewsModule {}
