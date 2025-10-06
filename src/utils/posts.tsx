import getPostBySlug  from "../utils";

export const getPost = async (slug: string) => {
  const post = getPostBySlug(slug);
  return post;
};

export { getPostBySlug };
