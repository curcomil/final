import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://kodemia-backend-challenge-d515b23a922f.herokuapp.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "Success") {
          alert("Usuario creado correctamente, por favor inicia sesión");
          router.push("/login");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <main className="flex content-center items-center justify-center p-6 min-h-screen  text-gray-700 bg-slate-200">
      <div className="flex justify-center items-center flex-col">
        <img
          className="login_logo h-[48px] w-[60px]"
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
        />

        <h1 className="font-bold text-[1.875rem]">Join the DEV Community</h1>
        <p>DEV Community is a community of 1,186,084 amazing developers</p>
        <div role="alert" className="alert alert-info mt-3 bg-blue-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            Por favor completa ambas columnas para continuar con tu registro
          </span>
        </div>
        <div className="mt-4 bg-slate-300 p-2 rounded-xl ring-2">
          <form
            className="flex flex-col items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form_container grid grid-cols-2 gap-10">
              <div className="segunda_col flex flex-col items-center">
                <p className="font-bold text-[1.875rem]">Perfil</p>
                <p className="text-xl">Queremos saber sobre ti</p>
                <p className="font-thin">
                  Por favor completa los siguientes campos
                </p>
                <div className="mt-8">
                  <label className="text-xl" htmlFor="">
                    Primer nombre
                  </label>
                  <input
                    className="ml-2 text-xl p-1 rounded-md bg-transparent ring-2"
                    type="text"
                    {...register("first_name")}
                  />
                </div>
                <div className="mt-2">
                  <label className="text-xl" htmlFor="">
                    Segundo Nombre
                  </label>
                  <input
                    className="ml-2 text-xl p-1 rounded-md bg-transparent ring-2"
                    type="text"
                    {...register("last_name")}
                  />
                </div>
                <div className="mt-2 text-xl">
                  <label htmlFor="">Numero de teléfono</label>
                  <input
                    className="ml-2 p-1 text-xl rounded-md bg-transparent ring-2"
                    type="text"
                    {...register("phone")}
                  />
                </div>
                <div className="mt-2 text-xl">
                  <label className="" htmlFor="">
                    Gender
                  </label>
                  <select
                    className="ml-2 select select-bordered text-xl bg-transparent ring-2"
                    name=""
                    id=""
                    {...register("gender")}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="mt-2 text-xl">
                  <label htmlFor="">Elige una imagen de perfil: </label>
                  <select
                    className="ml-2 select select-bordered text-xl bg-transparent ring-2"
                    name=""
                    id=""
                    {...register("profile_picture")}
                  >
                    <option value="https://s3.amazonaws.com/nosfaltan43.1312.acab/zokka.jpg">
                      Sokka
                    </option>
                    <option value="https://qph.cf2.quoracdn.net/main-qimg-d7cab81512488467d79d14515267fba5-lq">
                      Katara
                    </option>
                    <option value="https://www.tonica.la/__export/1655760341555/sites/debate/img/2022/06/20/avatar-la-leyende-aang-netflix.jpg_423682103.jpg">
                      Aang
                    </option>
                    <option value="https://imgix.ranker.com/list_img_v2/15758/2875758/original/2875758">
                      Toph
                    </option>
                    <option value="https://i.pinimg.com/236x/f3/ac/60/f3ac60495d1922cc97723975473b7c8d.jpg">
                      Zuko
                    </option>
                    <option value="https://i.pinimg.com/736x/a9/d7/2e/a9d72e0fbaa20496a3b729d815bd35b6.jpg">
                      Suki
                    </option>
                  </select>
                </div>
              </div>
              <div className="primera_col flex flex-col items-center">
                <p className="font-bold text-[1.875rem]">Datos de ingreso</p>
                <p className="text-xl">
                  Estas serán tus credenciales de acceso para tu nueva cuenta!
                </p>
                <p className="font-thin">
                  Por favor ingresa un correo y contraseña
                </p>
                <div className="mt-8">
                  <label className="text-xl" htmlFor="">
                    Email
                  </label>
                  <input
                    className="text-xl ml-2 p-1 rounded-md bg-transparent ring-2"
                    type="email"
                    {...register("email")}
                  />
                </div>
                <div className="text-xl mt-2">
                  <label htmlFor="">Password</label>
                  <input
                    className="ml-2 p-1 rounded-md bg-transparent ring-2"
                    type="password"
                    {...register("password")}
                  />
                </div>
              </div>
            </div>
            <div className="avatar-container grid grid-cols-6 gap-6">
              <div className="avatar flex flex-col items-center mt-6">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://s3.amazonaws.com/nosfaltan43.1312.acab/zokka.jpg"
                    alt="Sokka"
                  />
                </div>
                <p className="mt-3">Sokka</p>
              </div>
              <div className="avatar flex flex-col items-center mt-6">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://qph.cf2.quoracdn.net/main-qimg-d7cab81512488467d79d14515267fba5-lq"
                    alt=""
                  />
                </div>
                <p className="mt-3">Katara</p>
              </div>
              <div className="avatar flex flex-col items-center mt-6">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://www.tonica.la/__export/1655760341555/sites/debate/img/2022/06/20/avatar-la-leyende-aang-netflix.jpg_423682103.jpg"
                    alt="aang"
                  />
                </div>
                <p className="mt-2">Aang</p>
              </div>
              <div className="avatar flex flex-col items-center mt-6">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://imgix.ranker.com/list_img_v2/15758/2875758/original/2875758"
                    alt="Toph"
                  />
                </div>
                <p className="mt-2">Toph</p>
              </div>
              <div className="avatar flex flex-col items-center mt-6">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://i.pinimg.com/236x/f3/ac/60/f3ac60495d1922cc97723975473b7c8d.jpg"
                    alt="zukko"
                  />
                </div>
                <p className="mt-2">Zuko</p>
              </div>
              <div className="avatar flex flex-col items-center mt-6">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://i.pinimg.com/736x/a9/d7/2e/a9d72e0fbaa20496a3b729d815bd35b6.jpg"
                    alt="suki"
                  />
                </div>
                <p className="mt-2">Suki</p>
              </div>
            </div>
            <input
              className="w-[90%] mt-6 mb-6 border-[3px] border-[#757CFC] rounded-lg m-3 text-xl p-2 hover:scale-110 hover:text-white hover:bg-indigo-500 duration-300"
              type="submit"
              value="Enviar"
            />
          </form>
        </div>
        <div className="mt-3 w-[70%] flex justify-center flex-col items-center">
          <p className="text-center">
            By signing up, you are agreeing to our privacy policy, terms of use
            and code of conduct.
          </p>
          <p className="mt-3">
            Already have an account?{" "}
            <Link className="underline" href="/login">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
