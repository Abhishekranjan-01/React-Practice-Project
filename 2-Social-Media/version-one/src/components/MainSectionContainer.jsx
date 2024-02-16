// import { useState } from "react";
// import { useReducer } from "react";
// import postContext from "./store/PostListStore";
// import Post from "./Post";
// import Sidebar from "./Sidebar";
// import CreatePost from "./CreatePost";

// const addPost = (postListStore, payload) => {
//   const newPost = {
//     userId: payload.userIdRef.current.value,
//     postId: new Date().getTime(),
//     title: payload.titleRef.current.value,
//     body: payload.bodyRef.current.value,
//     tags: payload.hashTagsRef.current.value.split(" "),
//     reactionCount: payload.numberOfReactionsRef.current.value,
//   };
//   return [newPost, ...postListStore];
// };

// const deletePost = (postListStore, payload) => {
//   const newList = postListStore.filter((post) => post.postId !== payload);

//   return newList;
// };

// const reducer = (postListStore, action) => {
//   let newPostListStore = postListStore;

//   if (action.name === "DELETE_POST") {
//     newPostListStore = deletePost(postListStore, action.payload);
//     return newPostListStore;
//   } else if (action.name === "ADD_POST") {
//     newPostListStore = addPost(postListStore, action.payload);
//     return newPostListStore;
//   }
// };

// const DEFAULT_POST_LIST = {
//   userId: "",
//   postId: 1,
//   title: "I Want To Learn Advance react",
//   body: "Advance react will be covered after this project",
//   tags: ["advance", "react", "learning"],
//   reactionCount: 2500,

//   // reaction: `This post has been reached by ${this} peaople.`,
// };

// const DD2 = {
//   userId: "",
//   postId: 2,
//   title: "I Want To Learn Js",
//   body: "Advance react ",
//   tags: ["advance"],
//   reactionCount: 5500,
//   reaction: `This post has been reached by 1500 peaople.`,
// };

// const MainSectionContainer = () => {
//   const [postState, setPostState] = useState("Home");

//   const [postListStore, dispatchPostListStore] = useReducer(reducer, [
//     DEFAULT_POST_LIST,
//     DD2,
//   ]);

//   return (
//     <section className="flex flex-row gap-4 relative top-10 w-full">
//       <Sidebar postStateValue={postState} setPostState={setPostState} />
//       <postContext.Provider value={{ postListStore, dispatchPostListStore }}>
//         <div className="flex flex-col gap-2 mt-4 mx-auto">
//           {postState === "Home" ? <Post /> : <CreatePost />}
//         </div>
//       </postContext.Provider>
//     </section>
//   );
// };

// export default MainSectionContainer;
