export default function Login() {
  return (
    <main className="flex content-center items-center justify-center p-10 min-h-screen">
      <div className="flex justify-center items-center flex-col">
        <img
          className="login_logo h-[48px] w-[60px]"
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
        />

        <h1 className="font-bold text-[1.875rem]">Join the DEV Community</h1>
        <p>DEV Community is a community of 1,186,084 amazing developers</p>
        <div className="flex flex-col w-full">
          <button className="ring rounded-sm m-3 text-xl p-2">
            Continue with Apple
          </button>
          <button className="ring rounded-sm m-3 text-xl p-2">
            Continue with Forem
          </button>
          <button className="ring rounded-sm m-3 text-xl p-2">
            Continue with Github
          </button>
          <button className="ring rounded-sm m-3 text-xl p-2">
            Continue with Twitter
          </button>
        </div>
        <p>Or</p>
        <div className="w-full flex flex-col content-center justify-center text-lg">
          <form className="flex flex-col content-center justify-center">
            <div className="">
              <label htmlFor="inputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-full p-2"
                id="inputEmail"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control w-full p-2"
                id="inputPassword"
              />
            </div>
            <div className="mb-3 form-check flex justify-between">
              <span>
                <input
                  type="checkbox"
                  className="form-check-input mr-1"
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
              type="button"
              className="btn btnPurple m-2 mr-0 btn-primary form-control"
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
