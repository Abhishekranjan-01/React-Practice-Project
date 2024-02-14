import "./App.css";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import MainSectionContainer from "./components/MainSectionContainer";

function App() {
  return (
    <div className="relative">
      <Header />
      <MainSectionContainer />

      {/* <CreatePost /> */}

      <div className="mt-4">
        {/* <Post />
        <Post />
        <Post /> */}
      </div>
    </div>
  );
}

export default App;
