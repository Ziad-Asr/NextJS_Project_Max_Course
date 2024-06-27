const BlogPostPage = ({ params }) => {
  // that prop (params) is passed by default in nextjs
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p> {/* Display the end point of the current URL */}
    </main>
  );
};

export default BlogPostPage;
