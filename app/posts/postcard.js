import Link from "next/link";
import React from "react";
import noImage from "../../public/noImage.png";
import Image from "next/image";
import BitImage from "./Image";
const postcard = ({ postdetails }) => {
  console.log(postdetails);
  const { id, data } = postdetails;
  const { img_url, title, description } = data;

  //I
  return (
    <>
      <div className="flex flex-row gap-4 my-3 ">
        <BitImage width={500} src={img_url} />
        {/* <Image src={img_url} height={450} width={35} /> */}
        <div>
          <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">
            {title}
          </h2>
          <p>{description.slice(0, 250)}</p>
          <Link href={`/posts/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read more
            </button>
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
};

export default postcard;
