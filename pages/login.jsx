import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    fetch(
      "https://kodemia-backend-challenge-d515b23a922f.herokuapp.com/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Invalid password") {
          alert("Contraseña incorrecta");
        } else {
          localStorage.setItem("authToken", data.data.token);
          console.log(localStorage.getItem("authToken"));
          router.push("/");
        }
      });
  };
  return (
    <main className="flex content-center items-center justify-center p-10 min-h-screen text-gray-700 bg-slate-200">
      <div className="flex justify-center items-center flex-col">
        <img
          className="login_logo h-[48px] w-[60px]"
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
        />

        <h1 className="font-bold text-[1.875rem]">Join the DEV Community</h1>
        <p>DEV Community is a community of 1,186,084 amazing developers</p>
        <div className="flex flex-col w-full">
          <button className="border-[3px] border-[#757CFC] rounded-lg m-3 text-xl p-2 hover:scale-110 hover:text-white hover:bg-indigo-500 duration-300">
            Continue with Apple
          </button>
          <button className="border-[3px] border-[#757CFC] rounded-lg m-3 text-xl p-2 hover:scale-110 hover:text-white hover:bg-indigo-500 duration-300">
            Continue with Forem
          </button>
          <button className="border-[3px] border-[#757CFC] rounded-lg m-3 text-xl p-2 hover:scale-110 hover:text-white hover:bg-indigo-500 duration-300">
            Continue with Github
          </button>
          <button className="border-[3px] border-[#757CFC] rounded-lg m-3 text-xl p-2 hover:scale-110 hover:text-white hover:bg-indigo-500 duration-300">
            Continue with Twitter
          </button>
        </div>
        <p>Or</p>
        <div className="w-full flex flex-col content-center justify-center text-lg">
          <form
            className="flex flex-col content-center justify-center"
            onSubmit={onSubmitForm}
          >
            <div className="">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-full p-2 bg-slate-100 rounded-lg boder-2 border-purple-600"
                aria-describedby="emailHelp"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control w-full p-2 bg-slate-100 rounded-lg"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 form-check flex justify-between">
              <span>
                <input
                  type="checkbox"
                  className="form-check-input mr-1 bg-transparent"
                  id="Check1"
                />
                <label className="form-check-label" htmlFor="check1">
                  Remember me
                </label>
              </span>
              <a id="" href="#">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="btn btnPurple m-2 mr-0 btn-primary form-control hover:scale-110 hover:text-white hover:bg-indigo-500 duration-300"
              id="loginButton"
            >
              Log in
            </button>
            <label
              className="form-check-label hidden"
              id="warnEnterData"
            ></label>
          </form>
        </div>
      </div>
    </main>
  );
}
