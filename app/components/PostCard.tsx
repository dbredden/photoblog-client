import type { Post } from "../hooks/usePosts";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <img src={post.photoWebUrl} loading="lazy" alt="Post Photo" className="w-full h-auto rounded-sm" />
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-500 dark:text-gray-400">📍 {post.location}</p>
        <p className="text-base text-gray-800 dark:text-gray-100">{post.description}</p>
        <p className="text-sm text-gray-400 dark:text-gray-500">
            Taken: {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            })}
        </p>
      </div>        
    </div>
  );
}
