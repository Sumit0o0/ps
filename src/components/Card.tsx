import React from "react";
import { Link } from "react-router-dom";

type Props = {
  GitURL: string;
  name: string;
  desc: string;
  author: string;
  img: string;
};

const Card = ({ GitURL, name, desc, author, img }: Props) => {
  return (
    <div className="grid col-span-12 md:col-span-4 border p-2 border-black dark:border-gray-600">
      <a href={`https://github.com/sumit0o0${GitURL}`}>
        <div className="h-[16rem] border-8">
          <img className="w-full h-full object-contain" src={img} />
        </div>
        <div>
          <p className="mt-2 text-xl font-medium">{name}</p>
          <p className="mt-2">{desc}</p>
          <p className="mt-2 text-center font-light">{author}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
