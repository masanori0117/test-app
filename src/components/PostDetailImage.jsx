export default function PostDetailImage({ imageUrl }) {
  if (!imageUrl) return null;
  return (
    <img
      src={imageUrl}
      alt="投稿画像"
      className="w-full h-auto mb-4"
    />
  );
}

