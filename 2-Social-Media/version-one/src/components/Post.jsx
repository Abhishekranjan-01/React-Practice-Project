import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { postContext } from "./store/PostListStore";
import Tags from "./Tags";
const Post = () => {
  const { postListStore, dispatchPostListStore } = useContext(postContext);

  return postListStore.map((post, i) => (
    <section
      id={post.postId}
      key={post.postId}
      className=" flex flex-col gap-2 p-2 border border-gray-300 rounded-md w-fit md:w-[500px] relative m-2 h-fit"
    >
      <div className="absolute w-full ">
        <span
          className="absolute right-0 -top-4 text-red-700 text-2xl cursor-pointer"
          onClick={() => {
            dispatchPostListStore({
              name: "DELETE_POST",
              payload: post.postId,
            });
          }}
        >
          <MdDelete />
        </span>
      </div>
      <h1 id="_title" className="font-semibold">
        {post.title}
      </h1>
      <h2 id="_body">{post.body}t</h2>
      <div id="_tags" className="flex flex-row gap-2 mt-1">
        <Tags tags={post.tags} />
      </div>
      <div
        id="_reactions"
        className="bg-[#D1E7DB] text-green-800 mt-2 rounded-md px-2"
      >
        {`This post has been reached by ${post.reactionCount} peaople.`}
      </div>
    </section>
  ));
};
export default Post;
