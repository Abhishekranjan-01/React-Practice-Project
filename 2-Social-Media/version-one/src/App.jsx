import "./App.css";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import Post from "./components/Post";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-3xl text-orange-700 text-center font-bold">
        Testing
      </h1>
      {/* <CreatePost /> */}

      <div className="mt-4">
        {/* <Post />
        <Post />
        <Post /> */}
      </div>
    </>
  );
}

export default App;
