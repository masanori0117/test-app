import React, { useState } from "react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("送信されたデータ:", formData);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto py-10">
      <h1 className="text-xl font-bold text-left mb-10">問合わせフォーム</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-16 mb-6">
          <label className="w-40 text-left font-bold" htmlFor="name">お名前</label>
          <div className="w-full">
            <input
                className="border border-gray-300 rounded-lg p-4 w-full"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
          </div>
        </div>
        <div className="flex items-center gap-16 mb-6">
          <label className="w-40 text-left font-bold" htmlFor="email">メールアドレス</label>
          <div className="w-full">
            <input
                className="border border-gray-300 rounded-lg p-4 w-full"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
          </div>
        </div>
        <div className="flex items-center gap-16 mb-6">
          <label className="w-40 text-left font-bold" htmlFor="content" >本文</label>
          <textarea
            className="border border-gray-300 rounded-lg p-4 w-full"
            rows="8"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-center gap-4 mt-10">
            <button
            className="font-bold text-white bg-black rounded-lg px-4 py-2"
            type="submit"
            >
            送信
            </button>
            <button
            className="bg-gray-200 font-bold px-4 py-2 rounded-lg"
            type="reset"
            >
            クリア
            </button>
        </div>
      </form>
    </div>
  );
}