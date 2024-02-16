import { useContext, useRef } from "react";
import { postContext } from "./store/PostListStore";
const CreatePost = () => {
  const { dispatchPostListStore } = useContext(postContext);
  const userIdRef = useRef("");
  const titleRef = useRef("");
  const bodyRef = useRef("");
  const numberOfReactionsRef = useRef(0);
  const hashTagsRef = useRef("");

  return (
    <form
      action=""
      className=" min-w-80 md:min-w-[700px] w-full flex flex-col gap-2 m-2"
      onSubmit={(e) => {
        e.preventDefault();
        dispatchPostListStore({
          name: "ADD_POST",
          payload: {
            userIdRef,
            titleRef,
            bodyRef,
            numberOfReactionsRef,
            hashTagsRef,
          },
        });
      }}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="userId" className="font-semibold">
          Enter your User Id here
        </label>
        <input
          type="text"
          name="userId"
          ref={userIdRef}
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
          ref={titleRef}
          placeholder="How you are feeling today..."
          className="border border-gray-300 rounded-md px-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="postContent" className="font-semibold">
          Post Content
        </label>
        <textarea
          type="text"
          name="postContent"
          ref={bodyRef}
          placeholder="Tell us more about it..."
          className="border border-gray-300 rounded-md px-2 h-48 resize-none"
        ></textarea>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="numberOfReactions" className="font-semibold">
          Number Of Reactions
        </label>
        <input
          type="number"
          name="numberOfReactions"
          ref={numberOfReactionsRef}
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
          ref={hashTagsRef}
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
