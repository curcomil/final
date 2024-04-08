export default function Post(props) {
  return (
    <div className="w-full mb-4">
      <div className="card w-full  shadow-xl">
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
          <p className="card-title text-[30px] hover:text-blue-500 mt-2">
            {props.title}
          </p>
          <p>{props.tags}</p>
          <p className="mt-2 text-[20px]">
            ❤️​🦄​🤯​🙌​🔥​ 54 reactions 2 comments
          </p>
        </div>
      </div>
    </div>
  );
}
