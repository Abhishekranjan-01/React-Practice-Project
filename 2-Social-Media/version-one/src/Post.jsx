import { MdDelete } from "react-icons/md";
const Post = () => {
  return (
    <section className="flex flex-col gap-2 p-2 border border-gray-300 rounded-md w-fit relative">
      <div className="absolute w-full ">
        <span className="absolute right-0 -top-4 text-red-700 text-2xl">
          <MdDelete />
        </span>
      </div>
      <h1 id="_title" className="font-semibold">
        I Want To Learn Advance react
      </h1>
      <h2 id="_body">Advance react will be covered after this project</h2>
      <div id="_tags" className="flex flex-row gap-2 mt-1">
        <h3 className="bg-sky-500 text-gray-200 text-sm rounded-md font-semibold px-1">
          advance
        </h3>
        <h3 className="bg-sky-500 text-gray-200 text-sm rounded-md font-semibold px-1">
          react
        </h3>
        <h3 className="bg-sky-500 text-gray-200 text-sm rounded-md font-semibold px-1">
          learning
        </h3>
      </div>
      <div
        id="_reactions"
        className="bg-[#D1E7DB] text-green-800 mt-2 rounded-md "
      >
        This post has been reached by 1500 peaople.
      </div>
    </section>
  );
};
export default Post;
