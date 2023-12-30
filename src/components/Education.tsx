const Education = () => {
  return (
    <table className="w-full border border-white dark:border-zinc-600">
      <thead className="">
        <tr className="border-b border-white dark:border-zinc-600">
          <th className="w-3/5 p-1 text-start">School</th>
          <th className="w-1/5 p-1 text-start">Course</th>
          <th className="w-1/5 p-1">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-1 px-1">School of Open Learning, Delhi University</td>
          <td className="py-1 px-1">Graduation</td>
          <td className="py-1 px-1 text-center">2024</td>
        </tr>
        <tr>
          <td className="py-1 px-1">Techstack Acedamy, Saket, Delhi</td>
          <td className="py-1 px-1">FSWD</td>
          <td className="py-1 px-1 text-center">2023</td>
        </tr>
        <tr>
          <td className="py-1 px-1">DCA Sr. Sec. School, Lodhi Colony </td>
          <td className="py-1 px-1">Higher Secondary</td>
          <td className="py-1 px-1 text-center">2020</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
