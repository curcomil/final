import Link from "next/link";

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
            Sign up with Apple
          </button>
          <button className="ring rounded-sm m-3 text-xl p-2">
            Sign up with Forem
          </button>
          <button className="ring rounded-sm m-3 text-xl p-2">
            Sign up with Github
          </button>
          <button className="ring rounded-sm m-3 text-xl p-2">
            Sign up with Twitter
          </button>
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
