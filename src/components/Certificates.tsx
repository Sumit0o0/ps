import React from "react";

type Props = {
    degree: string;
    year: string;
    institution: string;
};

const Certificates = (props: Props) => {
  return (
    <div className="border border-zinc-700 p-2 mb-2">
      <div className="flex justify-between mb-2 shadow-sm dark:shadow-zinc-800">
        <p className="uppercase font-medium">{props.degree}</p>
        <p>{props.year}</p>
      </div>
      <p className="text-sm opacity-80">{props.institution}</p>
    </div>
  );
};

export default Certificates;
