import { usePosts } from "../hooks/usePosts";
import { PostCard } from "../components/PostCard";
import type { Route } from "./+types/home"; 

export function meta() {
  return [
    { title: "Photoblog - Home" },
    { name: "description", content: "A feed of photos and their stories." },
  ];
}

export default function Home() {
  const { posts, loading } = usePosts();

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  return (
    <div className="space-y-10 py-10">
      {[...posts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
  </div>
  );
}
