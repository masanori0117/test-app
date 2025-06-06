import React, { useState } from "react";

export default function InquiryForm() {

  const initialFormData = {
    name: '',
    email: '',
    content: '',
  }

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const content = formData.content.trim();

    if (!name || name.length > 30) {
        newErrors.name = '名前は必須です(30文字内で入力してください)';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = 'メールアドレスは必須です(メールアドレスは正しい形式で入力してください)';
    }

    if (!content || content.length > 500) {
        newErrors.content = '本文は必須です(500文字以内で入力してください)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitted(false);
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            content: formData.content.trim(),
        }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert('送信しました');
        setIsSubmitted(true);
        setFormData(initialFormData);
        setErrors({});
      } else if (response.status === 400) {
        console.warn("Bad Request:", result);
        alert('不正なリクエストです。');
      } else if (response.status >= 500) {
        console.error("サーバーエラー:", result);
        alert('サーバーエラー。');
      } else {
        console.error("予期しないエラー:", result);
        alert('予期しないエラーが発生しました。');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      alert('送信に失敗しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
  }

  return (
    <div className="w-full max-w-[800px] mx-auto py-10">
      <h1 className="text-xl font-bold text-left mb-10">問合わせフォーム</h1>
      {isSubmitted && (
        <p className="text-green-600 mb-4 text-center">送信が完了しました！</p>
      )}
      {isSubmitting && (
        <p className="text-gray-600 mb-4 text-center">送信中...</p>
      )}
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
            />
            {errors.name && <p className="text-left text-red-700 text-sm mt-1">{errors.name}</p>}
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
            />
            {errors.email && <p className="text-left text-red-700 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>
        <div className="flex items-center gap-16 mb-6">
          <label className="w-40 text-left font-bold" htmlFor="content" >本文</label>
          <div className="w-full">
            <textarea
              className="border border-gray-300 rounded-lg p-4 w-full"
              rows="8"
              id="content"
              name="content"
              value={formData.content}
             onChange={handleChange}
            />
            {errors.content && <p className="text-left text-red-700 text-sm mt-1">{errors.content}</p>}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-10">
            <button
            className="font-bold text-white bg-black rounded-lg px-4 py-2"
            type="submit"
            disabled={isSubmitting}
            >
            {isSubmitting ? '送信中...' : '送信'}
            </button>
            <button
            className="bg-gray-200 font-bold px-4 py-2 rounded-lg"
            type="button"
            disabled={isSubmitting}
            onClick={handleReset}
            >
            クリア
            </button>
        </div>
      </form>
    </div>
  );
}