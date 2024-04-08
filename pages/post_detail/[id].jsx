import Navbar from "@/components/Navbar";
import Image from "next/image";
import Post_page from "@/components/Post_page";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PostDetail() {
  const params = useRouter();
  console.log(params.query.id);

  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch(
      `https://kodemia-backend-challenge-d515b23a922f.herokuapp.com/post/${params.query.id}`
    )
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  console.log(post);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", options);
  };
  return (
    <main className="bg-slate-100">
      <Navbar></Navbar>
      <div className="body_post min-h-screen p-6">
        <div className="flex flex-col items-center">
          <div className="mt-20">
            <div
              className="size-10 mb-12 dropdown dropdown-right dropdown-hover"
              tabIndex={0}
            >
              <Image alt="" src="/hart.png" width={500} height={300}></Image>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] flex flex-row menu p-2 shadow bg-slate-200 text-gray-800 rounded-box w-72 content-center justify-center h-24"
              >
                <div className="flex flex-col justify-center items-center ms-3">
                  <p className="text-[30px] mb-3">❤️​</p>
                  <p>43</p>
                </div>
                <div className="flex flex-col justify-center items-center ms-3">
                  <p className="text-[30px] mb-3">🦄​​</p>
                  <p>14</p>
                </div>
                <div className="flex flex-col justify-center items-center ms-3">
                  <p className="text-[30px] mb-3">​🤯​​​</p>
                  <p>17</p>
                </div>
                <div className="flex flex-col justify-center items-center ms-3">
                  <p className="text-[30px] mb-3">​​🙌​​​​</p>
                  <p>8</p>
                </div>
                <div className="flex flex-col justify-center items-center ms-3">
                  <p className="text-[30px] mb-3">​​​🔥​​​​​</p>
                  <p>22</p>
                </div>
              </div>
            </div>
            <div className="size-10 mb-12">
              <Image
                alt=""
                src="/comments.png"
                width={500}
                height={300}
              ></Image>
            </div>
            <div className="size-10 mb-12 relative">
              <Image alt="" src="/save.png" width={500} height={300}></Image>
            </div>
            <div className="size-10 mb-12">
              <Image
                alt=""
                className="hover: cursor-pointer"
                src="/more.png"
                width={500}
                height={300}
              ></Image>
            </div>
          </div>
        </div>
        <div className="p-4">
          {post && post.data ? (
            <div className="">
              <Post_page
                title={post.data.title}
                cover={post.data.cover}
                content={post.data.content}
                date={formatDate(post.data.createdAt)}
                author={post.data.user.first_name}
                avatar={post.data.user.profile_picture}
                tags={post.data.tags}
              />
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        <div className="p-4">
          {post && post.data ? (
            <div className="card w-96 text-gray-900 shadow-xl w-full">
              <div className="card-body flex flex-row">
                <img
                  src={post.data.user.profile_picture}
                  className="size-16 bg-slate-600 rounded-full"
                ></img>
                <h2 className="card-title ms-2 text-[25px]">
                  {post.data.user.first_name} {post.data.user.last_name}
                </h2>
              </div>
              <div className="card-actions justify-center p-2">
                <button className="btn btn-primary w-[90%]">Follow</button>
                <p className="mt-3">
                  I am a passionate web developer from India. I find pleasure in
                  talking about programming and I love to help everyone who
                  needs any guidance related to programming.
                </p>
                <div className="w-full">
                  <p className="mt-3">Location</p>
                  <p>Mexico City</p>
                  <p className="mt-3">Joined</p>
                  <p>Jun 12, 2023</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Saluditos</p>
          )}
        </div>
      </div>
    </main>
  );
}
