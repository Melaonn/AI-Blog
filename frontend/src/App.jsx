import { useState } from "react";
import axios from "axios";

function App() {
  const [prompt, setPrompt] = useState("");
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(false);

  const generateBlog = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/blog`, {
        prompt,
      });
      setBlog(res.data.blog);
    } catch (err) {
      console.error(err);
      setBlog("❌ Error generating blog");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col items-center p-6 overflow-x-hidden">
      {/* Header */}
    <h1 className="text-2xl font-extrabold text-indigo-700 mb-6 tracking-tight">
  ✨ AI Blog Generator
</h1>

      {/* Input */}
      <textarea
        className="w-full max-w-2xl p-4 border-2 border-indigo-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-xl shadow-sm text-gray-700 placeholder-gray-400 resize-none"
        rows="4"
        placeholder="Write a topic or idea... (e.g., The future of AI in education)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      {/* Button */}
      <button
        className="mt-5 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition disabled:opacity-50"
        onClick={generateBlog}
        disabled={loading || !prompt.trim()}
      >
        {loading ? "✨ Generating..." : "Generate Blog"}
      </button>

      {/* Output */}
      {blog && (
        <div className="mt-8 w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            📝 Generated Blog
          </h2>
          <div className="prose prose-lg text-gray-800 leading-relaxed max-w-none whitespace-pre-line break-words overflow-hidden w-full">
            {blog}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
