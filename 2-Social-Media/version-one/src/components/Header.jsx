const Header = () => {
  return (
    <header className="fixed top-0 w-full flex justify-between bg-[#202229] py-2 px-2 border-b border-gray-500 z-10">
      <ul className="flex flex-row gap-4 items-center">
        <li className="text-sm text-gray-200 cursor-pointer">Home</li>
        <li className="text-sm text-gray-200 cursor-pointer">Features</li>
        <li className="text-sm text-gray-200 cursor-pointer">Pricing</li>
        <li className="text-sm text-gray-200 cursor-pointer">FAQs</li>
        <li className="text-sm text-gray-200 cursor-pointer">About</li>
      </ul>

      <div className="flex flex-row gap-2">
        <input
          type="text"
          name="postName"
          className="bg-transparent text-gray-200 px-2 border border-gray-400 rounded-md"
        />
        <button
          type="button"
          className="bg-transparent px-2 text-gray-200 border border-gray-200 rounded-md"
        >
          Login
        </button>
        <button
          type="button"
          className="text-gray-900 bg-yellow-500 px-1 rounded-md font-semibold"
        >
          Sign-Up
        </button>
      </div>
    </header>
  );
};

export default Header;
