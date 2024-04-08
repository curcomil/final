import Navbar from "@/components/Navbar";
import Image from "next/image";
import Post from "@/components/post";
import { useEffect, useState } from "react";

export default function PostDetail() {
  return (
    <main>
      <Navbar></Navbar>
      <div className="body_post min-h-screen p-6 ">
        <div className="flex flex-col items-center bg-slate-500">
          <div className="mt-20">
            <div
              className="size-10 mb-12 dropdown dropdown-right dropdown-hover"
              tabIndex={0}
            >
              <Image alt="" src="/hart.png" width={500} height={300}></Image>
              <div
                tabIndex={0}
                className="  ms-2 dropdown-content z-[1] flex flex-row menu p-2 shadow bg-base-100 rounded-box w-72 content-center justify-center h-24"
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
          <Post title={"hola"} />
        </div>
        <div>3</div>
      </div>
    </main>
  );
}
