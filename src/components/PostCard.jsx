import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link className="block text-inherit hover:text-inherit no-underline" to={`/posts/${post.id}`}>
      <div className="border border-gray-300 p-4 mb-6 shadow-sm flex flex-col">
        <div className="flex justify-between">
          <p className="text-sm text-gray-500 mb-2">
            {new Date(post.createdAt).toLocaleDateString("ja-JP")}
          </p>
          <div className="flex gap-2">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="text-blue-700 border border-blue-700 text-xs px-2 py-1 rounded font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <h1 className="text-2xl mb-4 mt-2 font-semibold text-left">{post.title}</h1>
        <div
          className="text-left mb-3 font-medium line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </Link>
  );
}
