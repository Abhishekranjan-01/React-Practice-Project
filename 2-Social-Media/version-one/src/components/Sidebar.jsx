const Sidebar = () => {
  return (
    <section className="flex felx-col bg-[#202229] text-gray-200 w-fit min-w-60  py-2 px-2 h-[90vh]">
      <ul className="flex flex-col gap-2 w-full">
        <li className="bg-sky-600 rounded-md px-2 cursor-pointer">Home</li>
        <li className=" rounded-md px-2 cursor-pointer">Create Post</li>
      </ul>

      <div className="py-2"></div>
    </section>
  );
};
export default Sidebar;
