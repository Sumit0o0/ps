import React from "react";
import { Link } from "react-router-dom";

type Props = {
  GitURL: string;
  name: string;
  desc: string;
  author: string;
};

const Card = ({ GitURL, name, desc, author }: Props) => {
  return (
    <div className="grid col-span-12 md:col-span-4 border-2 p-2 border-zinc-700 dark:border-zinc-800">
      <a href={`https://github.com/Sumit0o0/${GitURL}`} target="_blank">
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
