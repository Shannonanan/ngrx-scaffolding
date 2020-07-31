import * as fromComments from './comments.actions';

describe('loadCommentss', () => {
  it('should return an action', () => {
    expect(fromComments.loadCommentss().type).toBe('[Comments] Load Commentss');
  });
});
