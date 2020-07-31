import * as fromBlogpost from "./blogpost.actions";

describe("loadBlogposts", () => {
  it("should return an action", () => {
    expect(fromBlogpost.loadBlogpostsResponse().type).toBe(
      "[Blogpost] Load Blogposts"
    );
  });
});
