import React from "react";

export default function PostCard({ post }) {
  return (
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
      <p className="text-2xl mb-4 mt-2 font-semibold text-left">{post.title}</p>
      <p className="text-m text-left mb-3 font-medium">{post.content}</p>
    </div>
  );
};
