import { Comment } from "@/types/Comment";
import { useState } from "react";

type Post = {
  title: string;
  body: string;
};

export default function Post({ post }: { post: Post }) {
  const [comment, setComment] = useState<Comment>();

  async function getComment() {
    const res = await fetch("/api/comment");
    const data = await res.json();
    setComment(data);
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={getComment}>Show comments</button>
      <div>
        {comment && (
          <>
            <span>{comment.createdAt}</span>
            <span>{comment.user}</span>
            <p>{comment.body}</p>
          </>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/5");
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}
