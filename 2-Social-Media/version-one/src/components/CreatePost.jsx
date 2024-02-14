const CreatePost = () => {
  return (
    <form action="" className="max-w-[70%] flex flex-col gap-2 m-2">
      <div className="flex flex-col gap-1">
        <label htmlFor="userId" className="font-semibold">
          Enter your User Id here
        </label>
        <input
          type="text"
          name="userId"
          placeholder="Your User Id"
          className="border border-gray-300 rounded-md px-2"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="postTitle" className="font-semibold">
          Post Title
        </label>
        <input
          type="text"
          name="postTitle"
          placeholder="How you are feeling today..."
          className="border border-gray-300 rounded-md px-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="postContent" className="font-semibold">
          Post Content
        </label>
        <input
          type="text"
          name="postContent"
          placeholder="Tell us more about it."
          className="border border-gray-300 rounded-md px-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="numberOfReactions" className="font-semibold">
          Number Of Reactions
        </label>
        <input
          type="number"
          name="numberOfReactions"
          placeholder="How many people reacted to this post."
          className="border border-gray-300 rounded-md px-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="hashtags" className="font-semibold">
          Enter your hashtags.
        </label>
        <input
          type="text"
          name="hashtags"
          placeholder="Please enter tags using space"
          className="border border-gray-300 rounded-md px-2"
        />
      </div>
      <button
        type="submit"
        className="self-start text-gray-200 bg-sky-500 px-4 py-1 font-semibold rounded-md"
      >
        Post
      </button>
    </form>
  );
};
export default CreatePost;
