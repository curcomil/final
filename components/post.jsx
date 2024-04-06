import Link from "next/link";

export default function Post(props) {
  return (
    <div className="w-full mb-4">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={props.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="author">
            <div>
              <div className="w-14 h-14 rounded-full bg-blue-500"></div>
            </div>
            <div className="flex flex-col">
              <p>Nombre</p>
              <p>{props.date}</p>
            </div>
          </div>
          <Link
            href={"/post_detail"}
            className="card-title text-[30px] hover:text-blue-500"
          >
            {props.title}
          </Link>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
}
