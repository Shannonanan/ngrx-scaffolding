import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BlogpostsEffects } from './blogposts.effects';

describe('BlogpostsEffects', () => {
  let actions$: Observable<any>;
  let effects: BlogpostsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BlogpostsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(BlogpostsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
