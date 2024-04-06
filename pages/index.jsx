import Navbar from "@/components/Navbar";
import Post from "@/components/post";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://k-desafio-node-backend-2-dev-zsez.4.us-1.fl0.io/post"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", options);
  };
  return (
    <main className="text-white min-h-screen">
      <Navbar></Navbar>

      <div className="body min-h-screen p-6">
        <div className=" aside bg-slate-800 hidden md:block">
          <div className="list_container p-1 mt-2 text-[25px]">
            <li className="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a target="_blank" href="https://dev.to/" class="icon">
                🏠 Home{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a target="_blank" href="#" class="icon">
                📚 Reading List{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a target="_blank" href="https://dev.to/pod" class="icon">
                🎙️ Podcast{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a target="_blank" href="https://dev.to/videos" class="icon">
                📽️ Videos{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a target="_blank" href="https://dev.to/tags" class="icon">
                🏷️ Tags{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a target="_blank" href="https://dev.to/tags" class="icon">
                💡 FAQ{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a target="_blank" href="https://shop.forem.com/" class="icon">
                🛍️ Forem Shop{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a
                target="_blank"
                href="https://dev.to/dev-advertising-options"
                class="icon"
              >
                ❤️ Advertise on DEV{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a target="_blank" href="https://dev.to/about" class="icon">
                🆒 About{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a target="_blank" href="https://dev.to/contact" class="icon">
                📯 Contact{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a target="_blank" href="https://dev.to/guides" class="icon">
                📖 Guides{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a
                target="_blank"
                href="https://dev.to/software-comparisons"
                class="icon"
              >
                🤔 Software Comparisons{" "}
              </a>
            </li>
            <h2 class="labeltitle p-2">Other </h2>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a href="#" class="icon">
                👍 Code of Conduct{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a href="#" class="icon">
                🤓 Privacy Policy{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-slate-400 rounded-md p-1">
              <a href="#" class="icon">
                👀 Terms of use{" "}
              </a>
            </li>
          </div>
        </div>
        <div className="main bg-slate-500 p-5">
          {data.data.map((x, index) => (
            <Post
              title={x.title}
              key={index}
              date={formatDate(x.createdAt)}
              cover={x.cover}
            ></Post>
          ))}
        </div>

        <div className="bg-slate-600 hidden lg:block"></div>
      </div>
    </main>
  );
}
