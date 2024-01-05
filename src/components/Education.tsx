const Education = () => {
  return (
    <table className="w-full border border-zinc-500 dark:border-zinc-600">
      <thead className="">
        <tr className="border-b-2 border-zinc-500 dark:border-zinc-600">
          <th className="w-4/5 p-1 text-start">Course & School</th>
          <th className="w-1/5 p-1 text-end">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-400 dark:border-zinc-700">
          <td className="p-2">
            <span className="font-bold">Bcom</span> - School of Open Learning,
            Delhi University
          </td>
          <td className="p-2 text-end">2024</td>
        </tr>
        <tr className="border-b border-gray-400 dark:border-zinc-700">
          <td className="p-2">
            <span className="font-bold">FSWD</span> - Techstack Acedamy, Saket,
            Delhi
          </td>
          <td className="p-2 text-end">2023</td>
        </tr>
        <tr className="border-b border-gray-400 dark:border-zinc-700">
          <td className="p-2">
            <span className="font-bold">Higher Secondary</span> - DCA Sr. Sec. School, Lodhi
            Colony
          </td>
          <td className="py-1 px-1 text-end">2020</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
