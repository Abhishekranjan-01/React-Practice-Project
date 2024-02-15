const Sidebar = ({ postStateValue, setPostState }) => {
  return (
    <section className="fixed left-0 flex felx-col bg-[#202229] text-gray-200 w-fit min-w-60  py-2 px-2 h-[94vh]">
      <ul className="flex flex-col gap-2 w-full">
        <li
          className={
            postStateValue === "Home"
              ? "bg-sky-600 rounded-md px-2 cursor-pointer"
              : " rounded-md px-2 cursor-pointer"
          }
          onClick={() => {
            setPostState("Home");
          }}
        >
          Home
        </li>
        <li
          className={
            postStateValue === "Create Post"
              ? "bg-sky-600 rounded-md px-2 cursor-pointer"
              : " rounded-md px-2 cursor-pointer"
          }
          onClick={() => {
            setPostState("Create Post");
          }}
        >
          Create Post
        </li>
      </ul>

      <div className="py-2"></div>
    </section>
  );
};
export default Sidebar;
