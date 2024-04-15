import Navbar from "@/components/Navbar";
import Post from "@/components/post";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://kodemia-backend-challenge-d515b23a922f.herokuapp.com/post"
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
    <main className="text-gray-700 bg-slate-200 min-h-screen">
      <Navbar></Navbar>

      <div className="body min-h-screen p-6">
        <div className=" aside hidden md:block">
          <div className="list_container p-1 mt-2 text-[20px]">
            <li className="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a target="_blank" href="https://dev.to/" class="icon">
                🏠 Home{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a target="_blank" href="#" class="icon">
                📚 Reading List{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a target="_blank" href="https://dev.to/pod" class="icon">
                🎙️ Podcast{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a target="_blank" href="https://dev.to/videos" class="icon">
                📽️ Videos{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a target="_blank" href="https://dev.to/tags" class="icon">
                🏷️ Tags{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a target="_blank" href="https://dev.to/tags" class="icon">
                💡 FAQ{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a target="_blank" href="https://shop.forem.com/" class="icon">
                🛍️ Forem Shop{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a
                target="_blank"
                href="https://dev.to/dev-advertising-options"
                class="icon"
              >
                ❤️ Advertise on DEV{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a target="_blank" href="https://dev.to/about" class="icon">
                🆒 About{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a target="_blank" href="https://dev.to/contact" class="icon">
                📯 Contact{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a target="_blank" href="https://dev.to/guides" class="icon">
                📖 Guides{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a
                target="_blank"
                href="https://dev.to/software-comparisons"
                class="icon"
              >
                🤔 Software Comparisons{" "}
              </a>
            </li>
            <h2 class="labeltitle p-2">Other </h2>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a href="#" class="icon">
                👍 Code of Conduct{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a href="#" class="icon">
                🤓 Privacy Policy{" "}
              </a>
            </li>
            <li class="listbox m-2 hover:bg-blue-200 rounded-md p-1">
              <a href="#" class="icon">
                👀 Terms of use{" "}
              </a>
            </li>
          </div>
        </div>
        <div className="main p-5">
          {data && data.data ? (
            data.data
              .slice()
              .reverse()
              .map((post, index) => (
                <Link href={`/post_detail/${post._id}`} key={index}>
                  <Post
                    title={post.title}
                    date={formatDate(post.createdAt)}
                    cover={post.cover}
                    avatar={post.user.profile_picture}
                    author={post.user.first_name}
                    tags={post.tags}
                  />
                </Link>
              ))
          ) : (
            <p>Cargando...</p>
          )}
        </div>

        <div className="hidden lg:block p-2">
          <div className="main_aside_rigth card-body bg-slate-100 rounded-xl ">
            <p className="text-[23px]">Active discussions</p>
            <div className="mb-2 rounded-md hover:bg-blue-200 p-2">
              <p className="text-[20px]">#AyotziVive</p>
              <p className="text-[15px]">43 comments</p>
            </div>
            <div className="mb-2 rounded-md hover:bg-blue-200 p-2">
              <p className="text-[20px]">#NiDiosNiAmo</p>
              <p className="text-[15px]">1312 comments</p>
            </div>
            <div className="mb-2 rounded-md hover:bg-blue-200 p-2">
              <p className="text-[20px]">#GobiernoObrero</p>
              <p className="text-[15px]">823 comments</p>
            </div>
            <div className="mb-2 rounded-md hover:bg-blue-200 p-2">
              <p className="text-[20px]">#Resistencia</p>
              <p className="text-[15px]">1906 comments</p>
            </div>
            <div className="mb-2 rounded-md hover:bg-blue-200 p-2">
              <p className="text-[20px]">#TodoEstoEsHumedad</p>
              <p className="text-[15px]">1789 comments</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
