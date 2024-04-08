import React, { useState } from "react";

export default function NewPost() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const [inputValue, setInputValue] = useState("");
  const [hashtags, setHashtags] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === " " && inputValue.trim() !== "") {
      setHashtags([...hashtags, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <main className="p-3 text-black bg-slate-300 min-h-screen">
      <nav>Navbar</nav>
      <div className="body_post">
        <div>1</div>
        <div className="min-h-screen bg-slate-200 p-8">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-row">
              <label
                htmlFor="file-upload"
                className="bg-white border-2 border-slate-400 rounded-lg text-gray-600 font-bold py-2 px-4 rounded cursor-pointer"
              >
                {selectedFile ? selectedFile.name : "Add a cover image"}
              </label>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <input
              className="bg-transparent text-[50px] mt-3 mb-3 focus:border-none p-2"
              type="text"
              placeholder="New post title here..."
            />
            <div>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder="Add some tags"
                className="bg-transparent text-gray-500 text-xl ms-3"
              />
              <div>
                {hashtags.map((tag, index) => (
                  <span
                    key={index}
                    className="tag m-3 text-xl boder-2 rounded-xl shadow-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </form>
        </div>
        <div>3</div>
      </div>
    </main>
  );
}
