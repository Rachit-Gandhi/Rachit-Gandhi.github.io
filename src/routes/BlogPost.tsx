import { useParams } from "react-router-dom";
import SamplePost from "../content/blogs/sample.mdx";

const posts: Record<string, React.FC> = {
  "sample-post": SamplePost,
};

export default function BlogPost() {
  const { slug } = useParams();
  const Post = slug ? posts[slug] : null;

  if (!Post) return <div>Post not found.</div>;

  return (
    <article>
      <Post />
    </article>
  );
}
