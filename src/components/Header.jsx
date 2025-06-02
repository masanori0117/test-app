export default function Header() {
  return (
    <header className="w-full bg-[#333] text-white px-6 py-6 flex justify-between items-center fixed top-0 left-0 z-10">
      <a href="#" className="text-base font-extrabold hover:text-white">Blog</a>
      <a href="#" className="text-white font-extrabold hover:text-white">お問い合わせ</a>
    </header>
  );
}