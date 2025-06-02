export default function PostDetailImage({ imageName }) {
  if (!imageName) return null;
  return (
    <img
      src={imageName}
      alt="投稿画像"
      className="w-full h-auto mb-4"
    />
  );
}

