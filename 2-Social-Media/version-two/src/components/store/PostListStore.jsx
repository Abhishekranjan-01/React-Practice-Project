import { createContext } from "react";

export const postContext = createContext([]);

import { useState } from "react";
import { useReducer } from "react";
import CreatePost from "../CreatePost";
import WelcomeMessage from "../WelcomeMessage";
import Post from "../Post";
import Sidebar from "../Sidebar";
import LoadingSpinner from "../LoadingSpinner";

const addPost = (postListStore, payload) => {
  const newPost = {
    userId: payload.userIdRef.current.value,
    postId: new Date().getTime(),
    title: payload.titleRef.current.value,
    body: payload.bodyRef.current.value,
    tags: payload.hashTagsRef.current.value.split(" "),
    reactions: payload.numberOfReactionsRef.current.value,
  };
  return [newPost, ...postListStore];
};

const addInitialPosts = (postListStore, payload) => {
  const newPost = payload;
  return newPost;
};

const deletePost = (postListStore, payload) => {
  const newList = postListStore.filter((post) => {
    return post.id !== payload;
  });

  return newList;
};

const reducer = (postListStore, action) => {
  let newPostListStore = postListStore;

  if (action.name === "DELETE_POST") {
    newPostListStore = deletePost(postListStore, action.payload);
    return newPostListStore;
  } else if (action.name === "ADD_POST") {
    newPostListStore = addPost(postListStore, action.payload);
    return newPostListStore;
  } else if (action.name === "INITIAL_POSTS") {
    newPostListStore = addInitialPosts(postListStore, action.posts);
    return newPostListStore;
  }
};

const MainSectionContainer = () => {
  const [postState, setPostState] = useState("Home");
  const [fetching, setFetching] = useState(false);
  const [postListStore, dispatchPostListStore] = useReducer(reducer, []);

  const controller = new AbortController();
  const signal = controller.signal;

  useState(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts", signal)
      .then((res) => res.json())
      .then((data) => {
        dispatchPostListStore({ name: "INITIAL_POSTS", posts: data.posts });
        setFetching(false);
      });

    return () => {
      signal.abort();
      console.log("Cleaning Up.....");
    };
  }, []);

  return (
    <section className="flex flex-row gap-4 relative top-10 w-full">
      <Sidebar postStateValue={postState} setPostState={setPostState} />
      <postContext.Provider value={{ postListStore, dispatchPostListStore }}>
        <div className="flex flex-col gap-2 mt-4 mx-auto">
          {fetching && <LoadingSpinner />}
          {postListStore.length === 0 && <WelcomeMessage />}
          {postState === "Home" ? <Post /> : <CreatePost />}
        </div>
      </postContext.Provider>
    </section>
  );
};

export default MainSectionContainer;
