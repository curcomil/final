import { useState, useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function Navbar() {
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setToken(authToken || "");
  }, []);

  const logout = () => {
    localStorage.clear();
    router.reload("/");
  };

  return (
    <div className="navbar grid grid-cols-3 p-2 bg-[#FFFFFF] text-gray-800">
      <div className=" flex justify-start">
        <div className="flex flex-row items-center">
          <Link href={"/"}>
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt=""
              className="w-16 h-14"
            />
          </Link>
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-[500px] rounded-sm ml-2 p-1 bg-slate-100 ring"
          />
          <button className=" size-12 ml-2 flex justify-center items-center rounded-md hover:bg-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div></div>
      <div className="flex justify-end p-2">
        {token ? (
          <div>
            <Link
              href="/new_post"
              className=" text-xl border-2 border-[#757CFC] p-3 text-[#757CFC] rounded-md hover:bg-[#636EE4] hover:text-white"
            >
              Create post
            </Link>
            <button
              className="ms-3 hover:bg-red-400 hover:text-white p-2 rounded-md"
              onClick={logout}
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center text-[22px]">
            <Link
              className="mr-3 hover:bg-slate-200 p-3 hover:rounded-md"
              href="/login"
            >
              Log in
            </Link>

            <Link
              href="/register"
              className="border-2 border-[#757CFC] p-3 text-[#757CFC] rounded-md hover:bg-[#636EE4] hover:text-white"
            >
              Create account
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
