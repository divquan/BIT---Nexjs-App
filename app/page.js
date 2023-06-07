"use client";
import addData from "@/firebase/firestore/addData";
import addToData from "@/firebase/firestore/addToData";
import { uploadFile } from "@/firebase/storage/uploadFile";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();
  const [status, setStatus] = useState("Add post");

  const handleClick = async () => {
    let imgUrl = "";
    // upload
    setStatus("uploading");
    if (!file) return console.log("no file");
    file && (imgUrl = await uploadFile(file));

    setStatus("sending"), console.log(imgUrl);
    const data = {
      title: title,
      description: description,
      img_url: imgUrl,
    };
    // add to firestore
    const { result, error } = await addToData(data);

    if (error) {
      setStatus("error");
      return console.log(error);
    }
    setStatus("success");

    console.log(result);
  };

  // useEffect(() => console.log(file.name), [file]);

  return (
    <div>
      <div>
        <h1 className="text-center my-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">
          ADD NEW POST
        </h1>
        <div className="">
          <InputField
            name="Title"
            placeholder="your title goes here.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          <InputField
            name="description"
            placeholder="your description goes here.."
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputField
            name="url"
            placeholder="your image url goes here.."
            // value={file}
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept="image/*"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          {status}
        </button>
      </div>
    </div>
  );
}

const InputField = ({ name, placeholder, value, onChange, type }) => {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={name}
        >
          {name}
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="text"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          accept={type === "file" ? "image/*" : null}
        />
        {/* <p className="text-gray-600 text-xs italic">
          Make it as long and as crazy as you'd like
        </p> */}
      </div>
    </div>
  );
};
