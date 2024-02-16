import "./App.css";
import Header from "./components/Header";
import MainSectionContainer from "./components/store/PostListStore";
import Tags from "./components/Tags";

function App() {
  return (
    <div className="relative">
      <Header />
      <MainSectionContainer />
    </div>
  );
}

export default App;
