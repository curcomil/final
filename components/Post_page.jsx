import Image from "next/image";

export default function Post(props) {
  return (
    <div className="w-full mb-4">
      <div className="card w-full text-gray-800 shadow-xl">
        <figure>
          <img src={props.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="author">
            <div>
              <div className="size-14 rounded-full bg-blue-500">
                <img
                  src={props.avatar}
                  alt=""
                  className="size-14 rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p>{props.author}</p>
              <p>{props.date}</p>
            </div>
          </div>
          <div className="flex flex-row p-2 shadow text-gray-900 w-[50%] content-center justify-between h-24">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[30px] mb-3">❤️​</p>
              <p>43</p>
            </div>
            <div className="flex flex-col justify-center items-center ms-6">
              <p className="text-[30px] mb-3">🦄​​</p>
              <p>14</p>
            </div>
            <div className="flex flex-col justify-center items-center ms-6">
              <p className="text-[30px] mb-3">​🤯​​​</p>
              <p>17</p>
            </div>
            <div className="flex flex-col justify-center items-center ms-6">
              <p className="text-[30px] mb-3">​​🙌​​​​</p>
              <p>8</p>
            </div>
            <div className="flex flex-col justify-center items-center ms-6">
              <p className="text-[30px] mb-3">​​​🔥​​​​​</p>
              <p>22</p>
            </div>
          </div>
          <p className="m-2 text-[25px]">{props.tags}</p>
          <p className="card-title text-[35px] mt-3 mb-3">{props.title}</p>
          <p className="text-[25px]">{props.content}</p>
        </div>
      </div>
    </div>
  );
}
