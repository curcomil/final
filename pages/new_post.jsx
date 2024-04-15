import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function NewPost() {
  const { register, handleSubmit } = useForm();
  const token = localStorage.getItem("authToken");
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://kodemia-backend-challenge-d515b23a922f.herokuapp.com/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "New Post Created") {
          alert("Post creado correctamente");
          router.push("/");
        }
      });
  };

  return (
    <main className=" text-black bg-slate-300 min-h-screen">
      <nav className="mb-3">
        <Navbar></Navbar>
      </nav>
      <div className="main_container flex min-h-screen justify-center">
        <div className="w-[80%] bg-slate-200 p-8 flex flex-col">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="mt-4 text-xl p-1 rounded-md bg-transparent "
              type="text"
              {...register("cover")}
              placeholder="Ingresa el url de la portada del post"
            />
            <input
              className="mt-4 text-6xl p-1 rounded-md bg-transparent"
              type="text"
              placeholder="Título"
              {...register("title")}
            />
            <input
              className="mt-4 text-xl p-1 rounded-md bg-transparent "
              type="text"
              {...register("tags")}
              placeholder="Tags"
            />
            <textarea
              className="mt-4 text-2xl p-1 rounded-md bg-transparent"
              type="text"
              {...register("content")}
              placeholder="Add content"
            />
            <input
              className="w-[70%] mt-6 mb-6 border-[3px] border-[#757CFC] rounded-lg m-3 text-xl p-2 hover:text-white hover:bg-indigo-500 duration-300"
              type="submit"
            />
          </form>
        </div>
      </div>
    </main>
  );
}
