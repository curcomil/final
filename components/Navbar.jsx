import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar grid grid-cols-3 p-2 bg-slate-400">
      <div className=" flex justify-start">
        <div className="flex flex-row items-center">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt=""
            className="w-16 h-14"
          />
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-[500px] rounded-sm ml-2 p-1"
          />
          <button className="bg-purple-500 size-12 ml-2 flex justify-center items-center rounded-md hover:bg-cyan-600">
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
        <div className="flex justify-center items-center text-[22px]">
          <Link
            className="mr-3 hover:bg-red-500 p-3 hover:rounded-md"
            href="/login"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="border-2 p-3 rounded-md hover:bg-red-700"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
